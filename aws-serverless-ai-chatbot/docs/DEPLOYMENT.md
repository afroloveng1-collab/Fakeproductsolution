# End-to-end deployment guide

## 1. Prerequisites
AWS CLI v2, Git, Python 3.12, Node.js 20+, AWS account with budget alerts. Region `us-east-1` in this guide. Confirm Bedrock model and service availability and current pricing.

## 2. S3 documents
Create a private, versioned S3 general-purpose bucket with Block Public Access enabled. Set `BUCKET_NAME` and run `bash scripts/upload-knowledge.sh`. The documents are fictional; edit them before production.

## 3. Bedrock and OpenSearch Serverless
In Bedrock > Knowledge Bases create a vector knowledge base with S3 data source prefix `knowledge-base/`, Titan Text Embeddings V2 (1024 floating-point dimensions) and quick-create OpenSearch Serverless vector store. Review Bedrock service-role permissions, collection access and network policies. Sync the data source and verify ingestion completes. Copy the knowledge base ID. Choose a supported text-generation model or inference profile for `RetrieveAndGenerate` and record its ARN. **OpenSearch Serverless can have substantial ongoing compute costs.**

## 4. Lambda
Create Python 3.12 function `cloudassist-chatbot-backend`, handler `lambda_function.lambda_handler`, timeout 60 seconds, memory 256 MB. Deploy `backend/lambda_function.py` as the handler source. Set `KNOWLEDGE_BASE_ID` and `MODEL_ARN`. Attach AWSLambdaBasicExecutionRole and permissions for `bedrock:Retrieve`, `bedrock:RetrieveAndGenerate` and `bedrock:InvokeModel` as required by the chosen model. Restrict model resources and the knowledge-base ARN where supported. Use a direct test event: `{"question":"What AWS courses do you offer?"}`.

## 5. Lex V2
Create `CloudAssistAI` bot in `en_US`, with intents `GreetingIntent`, `CourseInquiryIntent`, `RegistrationIntent` and built-in `AMAZON.FallbackIntent`. Sample utterances: `Hello`, `What courses do you offer?`, `How do I register?`. Enable fulfillment Lambda hooks on each intent. Associate the function with the `en_US` locale on `TestBotAlias`, grant Lex alias permission to invoke Lambda, build the locale, and test each intent. Use a dedicated versioned alias for stable deployments when ready.

## 6. Cognito
Create a Cognito Identity Pool in `us-east-1`. For a controlled demo, allow unauthenticated identities and scope the unauthenticated IAM role to `lex:RecognizeText` on `arn:aws:lex:us-east-1:ACCOUNT_ID:bot-alias/BOT_ID/ALIAS_ID`. Verify the role's trust policy restricts it to the specific Identity Pool and `amr=unauthenticated`. **Do not leave guest access open on an unattended public demo.** Prefer sign-in for sustained use.

## 7. Frontend
```bash
cd frontend
cp .env.example .env
npm install
npm run dev
npm run build
```
Set all five `VITE_` values in `.env`. The `VITE_` values are public identifiers, never secrets. Open the Vite URL and test messages. The frontend uses AWS SDK v3 `RecognizeTextCommand` with Cognito temporary credentials.

## 8. Amplify Hosting
Connect GitHub repository, set application root to `frontend` in a monorepo build (or configure Amplify build settings to `cd frontend`), and use `npm run build` with output `dist`. The included `frontend/amplify.yml` is a frontend-root build spec. Set the five `VITE_` variables in Amplify and redeploy; Vite bakes them into the bundle. Verify the deployed HTTPS URL and mobile layout.

## 9. Observe and clean up
Review `/aws/lambda/cloudassist-chatbot-backend` CloudWatch logs and metrics, set error/throttle alarms and budget alerts. See [Security, Cost & Cleanup](SECURITY-COST-CLEANUP.md) for teardown order. Avoid deleting shared resources.
