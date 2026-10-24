# Phase 8 — Security, cost, cleanup and release

## Before changing anything
Record the region, resource names, account, Knowledge Base ID, Lex bot ID and alias, Cognito Identity Pool ID, Amplify app ID, OpenSearch collection ARN, and S3 bucket. Never commit credentials. Keep a copy of non-sensitive architecture notes.

## 1. Security hardening
- **Browser access:** Phase 6 uses Cognito Identity Pool guest credentials. A public URL can be abused. For a demo, disable guest access when not presenting. For a persistent public app, use Cognito User Pool sign-in plus authenticated Identity Pool roles, or a backend gateway with server-side throttling, bot protection, and abuse controls. Auth alone is not rate limiting.
- **Lex:** Restrict `lex:RecognizeText` to the exact `arn:aws:lex:REGION:ACCOUNT:bot-alias/BOT_ID/ALIAS_ID` in the authenticated role; revoke it from unauthenticated roles when migrating. The bot alias Lambda permission must be scoped to its source ARN.
- **Lambda:** Scope `bedrock:Retrieve` to the KB ARN, `bedrock:InvokeModel` to required model/inference-profile resources, and keep `bedrock:RetrieveAndGenerate` only where necessary. Confirm resource/condition support for each IAM action. Use AWSLambdaBasicExecutionRole for logs. Do not put AWS keys in code.
- **S3:** Block Public Access on; SSE-S3 or approved encryption; limit KB role to document prefix; consider versioning retention and lifecycle.
- **OpenSearch Serverless:** Review encryption, network and data access policies and principals. Never open data access to `*` for a public demo. Bedrock-managed collections need the KB role access.
- **Privacy:** Avoid storing entire questions, response bodies, names or sensitive documents in logs. Set log retention; redact errors in the UI.
- **GitHub:** Scan for credentials, `.env`, tokens, private documents and generated build artifacts. Rotate any exposed credentials; removing a commit alone is insufficient.

## 2. Cost optimization
- AWS Budgets alerts are notifications, **not a hard spend limit**. Review Cost Explorer and AWS billing regularly.
- OpenSearch Serverless OCU capacity is frequently the largest ongoing cost. Review collection capacity, any minimum OCUs, and whether your configuration supports newer scale-to-zero features; do not assume quick-create is scale-to-zero.
- Bedrock charges depend on selected embedding/generation models, token usage and requests. Lex charges per request, Lambda per requests/compute, Amplify for hosting/build/data transfer, S3 for storage/requests, CloudWatch for logs/metrics/alarms. Confirm current region-specific prices in AWS pricing pages.
- Restrict access, keep tests short, avoid needless KB syncs and expensive model selection, and clean up resources after recording.

## 3. Safe teardown sequence (manual Console)
**Only perform if you no longer need the live demo. Destructive and potentially irreversible.**
1. Disable public/guest Lex invocation and stop new traffic. Record required identifiers and export any documentation you wish to retain.
2. Remove Amplify app/branch and custom-domain mappings if not needed.
3. Delete Lex bot/aliases and Lambda function once no longer needed.
4. Delete Bedrock Knowledge Base/data source, after confirming no other applications use them. **Do not assume this deletes OpenSearch resources.**
5. Independently inspect and delete the dedicated OpenSearch Serverless collection, indexes if needed, and related access/network/encryption policies **only if unused elsewhere**. Check collection deletion status.
6. Delete dedicated Cognito Identity Pool and optional User Pool, after confirming no other app uses them.
7. Remove dedicated IAM roles and policies after dependencies are gone.
8. Remove CloudWatch alarms, dedicated SNS subscriptions/topic and dedicated log groups as appropriate.
9. Empty the dedicated S3 bucket, including **all versions and delete markers** if versioning was enabled; then delete the bucket. Never delete shared buckets.
10. Inspect CloudFormation stacks if you created any separately; verify no retained billable resources. Check Cost Explorer/billing over subsequent days because charges may post later.

Avoid automated bulk deletion unless resources are tagged, individually verified, and explicitly approved.

## 4. Verification and release
- [ ] Authenticated users can chat, guests cannot if disabled
- [ ] Lex permissions scoped; Lambda permissions reviewed
- [ ] S3 private; OpenSearch policies reviewed
- [ ] Logs have retention and avoid sensitive content
- [ ] Budget alert, cost review, CloudWatch alarms verified
- [ ] `npm run build` succeeds; frontend responds through Lex
- [ ] README includes architecture, prerequisites, setup, demo, costs, security and cleanup
- [ ] Screenshots contain no account numbers, tokens or personal data

## Official documentation
- AWS Lex V2 Lambda response format: https://docs.aws.amazon.com/lexv2/latest/dg/lambda-response-format.html
- Amazon Cognito Identity Pools: https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html
- Bedrock Knowledge Bases: https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html
- OpenSearch Serverless pricing: https://aws.amazon.com/opensearch-service/pricing/
- AWS Budgets: https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html
