# CloudAssist AI ☁️🤖

**An end-to-end serverless RAG chatbot on AWS — Build With Olamide**

A complete, unified GitHub project combining the frontend, Python Lambda backend, example knowledge documents, AWS deployment instructions, monitoring notes, tests and cleanup guide. No separate phase downloads required.

> **Status:** Educational reference implementation. Deploy and validate against your own AWS account before using publicly. AWS resources are provisioned using the Console instructions, not automatically by this repository.

## Architecture

```text
Browser ── Amplify Hosting (Vite frontend)
   │
   ├── Cognito Identity Pool → temporary AWS credentials
   └── Amazon Lex V2 → Lambda (Python) → Bedrock Knowledge Base
                                         ├── S3 source documents (ingestion)
                                         └── OpenSearch Serverless (vectors)
```

See [Architecture](docs/ARCHITECTURE.md) for the full diagram and request flow.

## Features
- Responsive chat interface with suggestions, typing state and New Chat
- Lex V2 intents for greetings, course questions and registration, plus AI fallback
- Lambda `RetrieveAndGenerate` integration with Bedrock Knowledge Bases
- Private Markdown knowledge documents in S3; OpenSearch Serverless vector store
- Cognito temporary credentials, Amplify hosting and CloudWatch monitoring guidance
- Python unit tests and GitHub Actions validation

## Project structure

```text
aws-serverless-ai-chatbot/
├── backend/
│   ├── lambda_function.py
│   └── requirements.txt
├── frontend/
│   ├── src/main.js
│   ├── src/style.css
│   ├── index.html
│   ├── package.json
│   ├── amplify.yml
│   └── .env.example
├── knowledge-base/
│   ├── company-overview.md
│   ├── training-courses.md
│   ├── registration-and-payment.md
│   ├── corporate-training.md
│   └── frequently-asked-questions.md
├── scripts/
│   ├── upload-knowledge.sh
│   └── verify-resources.sh
├── tests/test_lambda.py
├── docs/
│   ├── ARCHITECTURE.md
│   ├── DEPLOYMENT.md
│   ├── MONITORING.md
│   └── SECURITY-COST-CLEANUP.md
└── .github/workflows/ci.yml
```

## Quick start

1. Follow the **[full AWS deployment guide](docs/DEPLOYMENT.md)** to provision S3, Bedrock KB, OpenSearch, Lambda, Lex and Cognito.
2. Copy `frontend/.env.example` to `frontend/.env` and fill in the IDs.
3. Run:

```bash
cd frontend
npm install
npm run dev
```

4. For a production build run `npm run build`; connect GitHub to Amplify and deploy the `frontend` app root.
5. Run Python unit tests: `python -m unittest discover -s tests -v`.

## Sample questions
- What AWS courses do you offer?
- How do I register for training?
- Do you provide corporate training?
- What is your refund policy?

## Security and cost warning

The optional Cognito guest mode is **for controlled demonstrations only**. A public anonymous site can generate Lex, Bedrock and OpenSearch charges. Require authentication or a protected backend, narrow IAM, avoid logging personal content and monitor budgets. OpenSearch Serverless may incur ongoing OCU charges. Read [Security, Cost & Cleanup](docs/SECURITY-COST-CLEANUP.md).

## Project series
This single repository supports the complete eight-part Build With Olamide tutorial: architecture, S3, Bedrock/OpenSearch, Lambda, Lex, frontend/Cognito, Amplify/monitoring and security/cleanup.

## Credits
Created for **Build With Olamide**. All sample academy details are fictional.
