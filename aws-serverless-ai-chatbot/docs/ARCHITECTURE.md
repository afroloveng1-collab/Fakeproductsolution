# Architecture and request lifecycle

```mermaid
flowchart TD
  User[Web browser] --> Hosting[Amplify Hosting]
  User --> Cognito[Cognito Identity Pool]
  Cognito --> Credentials[Temporary AWS credentials]
  Credentials --> Lex[Lex V2 RecognizeText]
  User --> Lex
  Lex --> Lambda[Lambda Python handler]
  Lambda --> Bedrock[Bedrock RetrieveAndGenerate]
  S3[S3 knowledge documents] --> Ingestion[Bedrock KB ingestion]
  Ingestion --> Vector[OpenSearch Serverless vector index]
  Bedrock --> Vector
  Bedrock --> Lambda
  Lambda --> Lex
  Lex --> User
```

## Security boundaries
- The browser receives only temporary credentials; the guest IAM role, if enabled, should allow only `lex:RecognizeText` for one alias.
- Lambda accesses Bedrock. Never expose model or knowledge-base permissions to the browser.
- S3 source documents stay private; Bedrock service roles require appropriate access.
- Lex alias and intent fulfillment hooks both need to be configured.
- This educational direct-to-Lex frontend has no per-user abuse control; require authentication or use a protected backend for public use.
