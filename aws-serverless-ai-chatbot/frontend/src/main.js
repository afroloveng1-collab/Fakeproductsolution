import './style.css';
import { LexRuntimeV2Client, RecognizeTextCommand } from '@aws-sdk/client-lex-runtime-v2';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';

const settings = {
  region: import.meta.env.VITE_AWS_REGION || 'us-east-1',
  identityPoolId: import.meta.env.VITE_COGNITO_IDENTITY_POOL_ID,
  botId: import.meta.env.VITE_LEX_BOT_ID,
  botAliasId: import.meta.env.VITE_LEX_BOT_ALIAS_ID,
  localeId: import.meta.env.VITE_LEX_LOCALE_ID || 'en_US'
};
const configured = Boolean(settings.identityPoolId && settings.botId && settings.botAliasId && !Object.values(settings).some(x => String(x).includes('REPLACE_WITH')));
let sessionId = crypto.randomUUID();
let busy = false;
let client;
const suggestions = ['What AWS courses do you offer?', 'How do I register?', 'Do you offer corporate training?', 'What is the refund policy?'];

const app = document.querySelector('#app');
app.innerHTML = `
<div class="layout">
  <aside class="sidebar">
    <a class="brand" href="/" aria-label="CloudAssist AI home"><span class="brand-icon">✦</span><span>CloudAssist <b>AI</b><small>POWERED BY AWS</small></span></a>
    <div class="sidebar-label">YOUR WORKSPACE</div>
    <button id="newChatSide" class="new-chat">＋ <span>New conversation</span></button>
    <div class="sidebar-spacer"></div>
    <div class="sidebar-info"><span class="dot"></span> AWS Cloud Assistant <small>Knowledge-powered answers</small></div>
    <div class="sidebar-footer">Built with ☁ by <strong>Build With Olamide</strong></div>
  </aside>
  <main class="main">
    <header class="topbar"><div class="mobile-brand">✦ CloudAssist AI</div><div class="header-title">Cloud Learning Assistant <span class="status"><span class="dot"></span> <span id="connectionStatus">${configured ? 'Ready' : 'Setup required'}</span></span></div><button id="newChatTop" class="reset" title="New chat">↻ <span>New chat</span></button></header>
    <section class="conversation" id="conversation" aria-label="Chat messages" aria-live="polite">
      <div class="welcome" id="welcome"><div class="hero-icon">✦</div><div class="eyebrow">YOUR CLOUD LEARNING COMPANION</div><h1>Hi there, what can I <em>help</em> you with?</h1><p>Ask me about AWS training, enrollment, corporate learning, and more. I'm here to make cloud learning simpler.</p><div class="suggestions" id="suggestions"></div></div>
    </section>
    <div class="composer-wrap"><form id="chatForm" class="composer"><label for="message" class="sr-only">Message CloudAssist AI</label><textarea id="message" rows="1" maxlength="1000" placeholder="Ask anything about AWS training..." required></textarea><button id="send" type="submit" aria-label="Send message">➤</button></form><div class="disclaimer">CloudAssist AI can make mistakes. Verify important information.</div></div>
  </main>
</div>`;
const conversation = document.querySelector('#conversation');
const form = document.querySelector('#chatForm');
const textarea = document.querySelector('#message');
const send = document.querySelector('#send');
const welcome = document.querySelector('#welcome');
const suggestionContainer = document.querySelector('#suggestions');

function addMessage(role, text) {
  const row = document.createElement('div');
  row.className = `message-row ${role}`;
  const avatar = document.createElement('span');
  avatar.className = 'avatar'; avatar.textContent = role === 'assistant' ? '✦' : 'U';
  const bubble = document.createElement('div');
  bubble.className = 'bubble'; bubble.textContent = text;
  row.append(avatar, bubble); conversation.append(row);
  conversation.scrollTop = conversation.scrollHeight;
  return row;
}
function getClient() {
  if (!client) client = new LexRuntimeV2Client({ region: settings.region, credentials: fromCognitoIdentityPool({ clientConfig: { region: settings.region }, identityPoolId: settings.identityPoolId }) });
  return client;
}
async function submit(text) {
  const question = text.trim(); if (!question || busy) return;
  welcome.hidden = true;
  textarea.value = ''; textarea.style.height = 'auto';
  addMessage('user', question);
  busy = true; send.disabled = true;
  const pending = addMessage('assistant', 'Thinking…'); pending.classList.add('pending');
  try {
    if (!configured) throw new Error('AWS connection is not configured. Add your IDs to the .env file and restart the development server.');
    const result = await getClient().send(new RecognizeTextCommand({ botId: settings.botId, botAliasId: settings.botAliasId, localeId: settings.localeId, sessionId, text: question }));
    const messages = (result.messages || []).filter(m => m.contentType === 'PlainText' && m.content).map(m => m.content);
    pending.querySelector('.bubble').textContent = messages.join('\n\n') || 'I did not receive a text response. Please try rephrasing your question.';
  } catch (err) {
    console.error('Lex request failed:', err);
    pending.querySelector('.bubble').textContent = err.message?.includes('not configured') ? err.message : 'Unable to connect to CloudAssist AI right now. Check the Lex bot alias, Cognito role permissions, region, and browser console.';
    pending.classList.add('error');
  } finally { pending.classList.remove('pending'); busy = false; send.disabled = false; textarea.focus(); conversation.scrollTop = conversation.scrollHeight; }
}
suggestions.forEach(q => { const btn = document.createElement('button'); btn.type = 'button'; btn.className = 'suggestion'; btn.textContent = q + ' ↗'; btn.addEventListener('click', () => submit(q)); suggestionContainer.append(btn); });
form.addEventListener('submit', e => { e.preventDefault(); submit(textarea.value); });
textarea.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); } });
textarea.addEventListener('input', () => { textarea.style.height = 'auto'; textarea.style.height = `${Math.min(textarea.scrollHeight, 140)}px`; });
function reset() { if (busy) return; sessionId = crypto.randomUUID(); conversation.querySelectorAll('.message-row').forEach(x => x.remove()); welcome.hidden = false; textarea.value = ''; textarea.focus(); }
document.querySelector('#newChatSide').addEventListener('click', reset);
document.querySelector('#newChatTop').addEventListener('click', reset);
