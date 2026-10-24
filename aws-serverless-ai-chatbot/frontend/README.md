# CloudAssist AI — Phase 7: Amplify deployment, end-to-end testing and monitoring

This package extends the Phase 6 Vite website with an `amplify.yml` build specification and operational guides. **It does not create AWS resources automatically.**

## Before deploying

- Verify the Phase 6 website works locally, and Lex alias + Lambda + Bedrock Knowledge Base return correct responses.
- Confirm AWS Budgets alerts and cost awareness. OpenSearch Serverless can incur ongoing charges; budget alerts are not spending caps.
- Guest Cognito Identity Pool access allows anonymous visitors to invoke the Lex alias. **Do not expose a public demo indefinitely without controls.** For a real production app, prefer authenticated access or a backend gateway with rate limiting and abuse prevention.
- Do not commit `.env`, AWS keys, or private training documents to GitHub.

## A. Commit your frontend to GitHub

From the repository root, put the frontend files in a `frontend/` directory, including `frontend/amplify.yml` (or adjust the build settings to the location of your project). This archive itself has files at its root for easy local execution.

```bash
npm install
npm run build
```

Commit source files (`index.html`, `src/`, `package.json`, `amplify.yml`, `.env.example`, `.gitignore`) and optionally the generated `package-lock.json`. Do not commit `dist/` or `.env`.

## B. Create an Amplify Hosting app

1. Open https://console.aws.amazon.com/amplify/home?region=us-east-1
2. Select **Deploy an app** and connect your GitHub repository/branch.
3. If the app is in a monorepo under `frontend/`, set the app root to `frontend` and verify build commands execute in that directory. If using a repository containing only this package, keep the root at repository root.
4. Choose Node.js build environment compatible with the Vite version in `package.json`.
5. Configure the environment variables from `.env.example` using the Amplify Console's **Hosting → Environment variables** area. These VITE_ identifiers are public in browser bundles; **never add secret AWS keys**.
6. Confirm build commands (`npm ci` with lockfile, otherwise `npm install`; `npm run build`) and artifact directory `dist`.
7. Save and deploy. Wait until build and deploy succeed. Open the generated `https://...amplifyapp.com` URL.
8. If using a custom domain, add it only after successful deployment and verify HTTPS.

### Environment variables

- `VITE_AWS_REGION=us-east-1`
- `VITE_COGNITO_IDENTITY_POOL_ID=us-east-1:YOUR_UUID`
- `VITE_LEX_BOT_ID=YOUR_BOT_ID`
- `VITE_LEX_BOT_ALIAS_ID=YOUR_BOT_ALIAS_ID`
- `VITE_LEX_LOCALE_ID=en_US`

**Critical:** Vite replaces `import.meta.env.VITE_*` at build time. Updating Amplify environment variables requires a new build/redeploy. A successful build does not prove the Lex connection works.

## C. End-to-end verification

1. Open the deployed URL in a private browser window and on mobile.
2. Confirm the page loads via HTTPS, layout is responsive, and there are no browser console errors.
3. Send `Hello`; verify GreetingIntent or expected greeting response.
4. Send `What AWS courses do you offer?`; confirm response comes from the configured S3 knowledge documents.
5. Send `How can I register?`; verify correct RegistrationIntent or knowledge answer.
6. Ask an unknown question; verify FallbackIntent responds sensibly and does not invent facts.
7. Select **New Chat**, then send another message; ensure it creates a fresh Lex session.
8. Check Lambda CloudWatch logs for invocation success and errors. Do not log full user prompts or private responses in production.
9. Check Amazon Lex metrics for requests and errors; compare with Lambda errors, throttles, and duration.
10. Verify there are no IAM `AccessDeniedException` errors. Verify actual model invocation is allowed by Bedrock.

## D. CloudWatch monitoring

Lambda console → `cloudassist-chatbot-backend` → **Monitor** → **View CloudWatch logs**. Log group: `/aws/lambda/cloudassist-chatbot-backend`.

Create CloudWatch alarms on the following AWS/Lambda metrics with `FunctionName=cloudassist-chatbot-backend`:

- `Errors`: Sum ≥ 1 over 5 minutes (example threshold for demo; tune to volume).
- `Throttles`: Sum ≥ 1 over 5 minutes.
- `Duration`: Average > 30000 milliseconds over 5 minutes, if representative for your workload.

Set **Treat missing data as not breaching** for low-traffic demos. Create an SNS topic and subscribe your email; confirm subscription before relying on notifications.

For Lex, inspect the **AWS/Lex** namespace and select metrics and dimensions that exist for your bot, alias and locale. AWS service metrics and names vary; do not assume an alarm can be created without first checking the metrics available in your account. Also use AWS Budgets alerts for spend, and set CloudWatch Logs retention (e.g., 7 days) appropriate to your privacy needs.

See `monitoring/alarms.md` for exact example CLI commands.

## E. Common issues

| Symptom | Check |
|---|---|
| Amplify build fails | `npm install`/`npm ci`, Node version, Vite dependencies, app root |
| Blank website | Browser developer console, `dist` artifact directory, JS asset paths |
| Configuration missing | Exact `VITE_` names in Amplify, rebuild after edits |
| Cognito access denied | Identity Pool ID, unauth role trust policy, guest access enabled |
| Lex AccessDenied | `lex:RecognizeText` allowed on exact alias ARN |
| Lex resource not found | Bot ID, alias ID, `en_US`, region and alias build status |
| Bedrock errors | Lambda execution role, KB ID, model ARN, Bedrock permissions |
| Empty answer | Lex V2 Lambda response schema and fulfillment hook |

## F. Cleanup and safety

For a temporary public demo, disable Cognito guest access / remove Lex invoke permission when not in use, and take down Amplify hosting if no longer needed. When the whole project is finished, remove CloudWatch alarms, SNS subscriptions/topics, Amplify app, Lex bot, Lambda function, Bedrock KB/data source, OpenSearch Serverless collection and related policies, and S3 objects/bucket as appropriate. **Deletion order matters** and some services do not cascade-delete dependent resources. Check your AWS bill afterward.

## References

- https://docs.aws.amazon.com/amplify/latest/userguide/getting-started.html
- https://docs.aws.amazon.com/amplify/latest/userguide/environment-variables.html
- https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html
- https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics.html
