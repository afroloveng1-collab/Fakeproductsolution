# NaijaVerify — A Smart Product Authentication and Counterfeit Detection Platform for Nigeria

> **Project Type:** Digital Product Authentication, Anti-Counterfeiting, and Consumer Protection  
> **Proposed Technology:** QR Codes, Unique Product Identifiers, Secure Verification APIs, Database Management, Analytics, and Fraud Detection  
> **Target Market:** Nigeria  
> **Primary Users:** Consumers, manufacturers, distributors, retailers, regulatory bodies, and platform administrators  
> **Project Status:** Proposed / Under Development

---

## Table of Contents

1. Project Overview
2. Background and Problem Statement
3. Aim and Objectives
4. Proposed Solution
5. Project Scope
6. Target Users and Stakeholders
7. System Architecture
8. How the Platform Works
9. Unique Product Identification Mechanism
10. Product Verification Workflow
11. Functional Requirements
12. Non-Functional Requirements
13. Security Architecture
14. Threat Model and Risk Analysis
15. Mitigation Controls
16. Fraud Detection and Duplicate-Scan Monitoring
17. System Components and Technology Stack
18. Database Design
19. API Design
20. User Interface and User Experience
21. Privacy and Data Protection
22. Implementation Plan
23. Testing and Quality Assurance
24. Deployment and Infrastructure
25. Monitoring and Maintenance
26. Limitations and Challenges
27. Possible Improvements and Future Enhancements
28. Success Metrics and Evaluation
29. Ethical, Legal, and Regulatory Considerations
30. Expected Benefits and Impact
31. Conclusion
32. Future Development Roadmap

---

## 1. Project Overview

NaijaVerify is a proposed digital product authentication platform designed to help consumers and businesses identify potentially counterfeit products in the Nigerian market.

Counterfeit products are goods that imitate genuine products, often using unauthorized branding, packaging, labels, or claims of authenticity. These products can be found across several industries, including pharmaceuticals, cosmetics, food and beverages, electronics, automotive spare parts, household goods, and personal care products.

The challenge is that consumers may not be able to distinguish genuine products from counterfeit products by looking at their packaging alone. Counterfeiters can reproduce labels, logos, barcodes, packaging designs, and other visible product features.

NaijaVerify proposes a system in which participating manufacturers or authorized brand owners register their products on a centralized verification platform. The platform generates a unique identity for each individual product unit and connects that identity to a secure database record.

A consumer can scan a QR code printed on the product or enter its verification code manually through a website or mobile application. The platform checks the submitted code against its records and returns a verification result.

Depending on the information available, the result may indicate that the product is registered and its code is valid, that the code has already been used in suspicious circumstances, that the code is invalid, or that further investigation is required.

The platform can also monitor repeated scans, unusual geographic patterns, suspicious verification activity, and reported counterfeit incidents to help manufacturers and administrators identify potential fraud.

### Core concept

**Every registered product unit receives a unique digital identity that can be checked against an authorized product registry.**

The platform is intended to make product verification more accessible to consumers while helping businesses monitor counterfeit activity and protect their brands.

An important limitation is that a valid code is evidence that the identifier exists in the system, not absolute proof that the physical product is genuine. Stronger authentication requires secure code issuance, protection against copying, supply-chain controls, and additional evidence.

---

## 2. Background and Problem Statement

### 2.1 Background

Counterfeit products are a major consumer protection and supply-chain concern. In Nigeria, consumers may encounter products whose contents, quality, origin, or safety do not match what their packaging claims.

The problem affects both consumers and legitimate businesses.

Consumers may spend money on products that are ineffective, unsafe, inferior, or different from what they intended to purchase. Legitimate manufacturers may experience financial losses, reputational damage, customer complaints, and reduced trust in their brands.

Traditional product identification methods, such as printed serial numbers, ordinary barcodes, packaging labels, and brand logos, can help identify products. However, these methods do not necessarily provide a direct way for consumers to verify whether an individual item was legitimately issued by its manufacturer.

A barcode may identify a product type rather than a specific physical item. A counterfeit seller may also copy a genuine product's label or QR code and reproduce it on multiple counterfeit products.

There is therefore a need for an accessible authentication system that links product identifiers to manufacturer-controlled records and monitors suspicious use of those identifiers.

### 2.2 Problem Statement

The central problem this project addresses is the difficulty consumers and legitimate businesses face when trying to distinguish genuine products from counterfeit products using existing visible product information.

The proposed platform seeks to address the following challenges:

**1. Lack of accessible verification**

Consumers may not have an easy, consistent method of checking whether a product identifier was issued by an authorized manufacturer.

**2. Replication of product packaging**

Counterfeiters may reproduce product labels, packaging, serial numbers, and QR codes, making visual inspection unreliable.

**3. Limited visibility into suspicious products**

Manufacturers may lack timely information about repeated scans, copied identifiers, or unusual verification activity across different locations.

**4. Consumer uncertainty**

Consumers may be unsure whether to trust a product when its packaging looks genuine but its origin is unclear.

**5. Fragmented authentication processes**

Different brands may use different identification and verification methods, creating inconvenience for consumers who purchase products from multiple manufacturers.

**6. Limited access to counterfeit reporting**

Consumers may discover suspicious products but lack a simple channel for submitting information that manufacturers or relevant authorities can investigate.

**7. Weak traceability at the individual-unit level**

A product identifier that only represents a product category or batch may not be sufficient to distinguish one physical item from another.

### 2.3 Why the Problem Matters

Counterfeit products can cause several types of harm:

- **Consumer safety:** Products may contain unknown, substituted, contaminated, or incorrectly manufactured materials.
- **Financial losses:** Customers may pay genuine-product prices for counterfeit goods.
- **Business losses:** Manufacturers may lose revenue and market share.
- **Brand damage:** Consumers may blame legitimate brands for poor-quality counterfeit products.
- **Supply-chain risks:** Businesses may struggle to determine where suspicious goods entered the distribution network.
- **Regulatory challenges:** Investigators may need better information to identify, document, and trace suspected counterfeit activity.

The severity varies by product category. Counterfeit medicines, food products, vehicle components, and electrical equipment can create particularly serious safety risks.

NaijaVerify is intended to provide an additional verification and reporting mechanism. It does not replace physical inspections, laboratory testing, market surveillance, product recalls, or regulatory enforcement.

---

## 3. Aim and Objectives

### 3.1 Project Aim

To design and implement a secure, accessible, and scalable digital platform that helps consumers verify registered products using unique product identifiers and helps manufacturers detect suspicious activity associated with counterfeit products.

### 3.2 Specific Objectives

The project aims to:

1. Develop a centralized registry for participating manufacturers, brands, and registered product units.
2. Generate a unique identifier for every registered physical product unit.
3. Provide QR codes that link products to their verification records.
4. Allow consumers to scan QR codes using a smartphone camera.
5. Support manual entry of verification codes when QR scanning is unavailable.
6. Return understandable verification results based on the platform's records.
7. Detect invalid codes, repeated scans, and suspicious verification patterns.
8. Allow users to report suspected counterfeit products.
9. Provide manufacturers with dashboards for monitoring verification activity.
10. Protect product identifiers, account credentials, and verification records against unauthorized modification.
11. Maintain audit logs to support investigation and accountability.
12. Design the platform to accommodate increasing numbers of manufacturers, products, and verification requests.
13. Support future integration with manufacturer inventory systems and relevant regulatory processes.
14. Evaluate the platform using security tests, usability tests, performance tests, and realistic counterfeit scenarios.

### 3.3 Research and Evaluation Questions

The project can be evaluated by asking:

- Can consumers verify a registered product without specialized technical knowledge?
- Can the platform identify invalid or unregistered identifiers?
- Can the system detect suspicious repeated use of a copied code?
- How accurately can the platform distinguish ordinary repeated scans from suspicious patterns?
- Can manufacturers generate and manage identifiers securely?
- How quickly can the platform return verification results under normal operating conditions?
- Can the platform scale to support large product catalogs and high verification traffic?
- What additional controls are needed to prevent counterfeiters from copying genuine product identifiers?

---

## 4. Proposed Solution

NaijaVerify will provide a centralized product authentication service with a consumer-facing verification interface and a manufacturer-facing management dashboard.

### 4.1 Manufacturer Registration

Participating manufacturers register their organizations and provide the required business and product information.

The platform verifies manufacturer eligibility according to a defined onboarding process before allowing the organization to issue product identifiers.

A registration request should not automatically grant trusted manufacturer status. The platform should verify relevant business details and, where applicable, evidence of authorization to represent a brand.

### 4.2 Product Registration

An approved manufacturer creates a product record containing information such as:

- Product name
- Brand name
- Product category
- Model or variant
- Manufacturer identification
- Batch or lot number
- Manufacturing date, where appropriate
- Expiry date, where applicable
- Product image, where useful
- Relevant authorization or registration references
- Product-unit issuance details

The system distinguishes between a product definition, a production batch, and an individual physical unit.

For example, a manufacturer may register a particular brand of cooking oil as a product type. It may then register a batch of 10,000 bottles and issue a different unique identifier to each of those bottles.

### 4.3 Unique Code Generation

The system generates a unique identifier for each product unit.

Each identifier is associated with a record in the authentication database. A corresponding QR code can be generated for printing on the product's packaging or security label.

The QR code should contain an identifier or a link to the verification service rather than confidential manufacturer information or a claim that cannot be independently checked.

### 4.4 Consumer Verification

A consumer visits the platform or opens the mobile application and scans the QR code.

The system extracts the identifier and sends it to the verification API. The API checks the relevant records, validates the code's status, and evaluates available risk signals.

The consumer receives a result that explains whether the code is valid, invalid, previously scanned, or associated with suspicious activity.

### 4.5 Fraud Detection

The platform records relevant verification events and evaluates patterns such as:

- Many scans of the same identifier within a short period
- Repeated scans from widely separated locations within an implausible time interval
- Attempts to use invalid or unissued identifiers
- Large numbers of failed verification attempts from one source
- Unusual activity associated with a batch, manufacturer, or distribution area

These signals should be treated as indicators of possible fraud, not automatic proof that a physical product is counterfeit.

### 4.6 Manufacturer Dashboard

Authorized manufacturers can use a dashboard to:

- Register product definitions and batches
- Generate and manage product identifiers
- Monitor verification activity
- Review suspicious scan alerts
- Examine reported counterfeit incidents
- Export authorized reports
- Revoke or disable compromised identifiers
- Review audit records for relevant actions

### 4.7 Consumer Reporting

Consumers can submit a report when a product appears suspicious.

The report may include the product identifier, brand, product name, purchase location, purchase date, description of the concern, and optional evidence such as a photograph or receipt.

Reports should be labeled as allegations until they have been reviewed. The platform must not publicly identify a seller or manufacturer as fraudulent solely because a consumer submitted a report.

---

## 5. Project Scope

### 5.1 Features Included in the Initial Version

The minimum viable product (MVP) should include:

- Manufacturer account registration and approval
- Product and batch registration
- Unique product-unit identifier generation
- QR-code generation
- Public product verification
- Manual verification-code entry
- Verification result pages
- Basic duplicate-scan monitoring
- Consumer counterfeit reporting
- Manufacturer dashboard
- Administrator dashboard
- Role-based access control
- Basic audit logging
- API authentication and input validation
- Secure database storage
- Basic system monitoring and error handling

### 5.2 Features Outside the Initial Scope

The following can be considered future enhancements rather than mandatory first-release requirements:

- Nationwide integration with every Nigerian manufacturer
- Direct integration with every regulatory database
- Universal verification of products that have never been registered
- Guaranteed detection of all counterfeit goods
- Blockchain-based supply-chain records
- Artificial intelligence trained on a large historical counterfeit dataset
- Physical anti-tamper hardware for every product category
- Automatic identification of counterfeit products from photographs alone

The initial platform should concentrate on making its core registration and verification process secure and reliable.

### 5.3 Important Scope Boundary

The platform can verify identifiers that have been issued and recorded within its system, subject to the quality of its enrollment and authentication controls.

It cannot automatically determine the authenticity of every product sold in Nigeria. Products from non-participating manufacturers may return an unregistered result even when they are genuine.

The system should communicate this limitation clearly to users.

---

## 6. Target Users and Stakeholders

### 6.1 Consumers

Consumers scan or enter product identifiers to check the platform's records. They can also report suspicious products.

Their primary needs are simplicity, fast responses, clear explanations, and protection of their personal information.

### 6.2 Manufacturers and Brand Owners

Manufacturers issue product identifiers, manage their product records, and investigate suspicious verification activity.

They need secure access to product-management tools, accurate reporting, and control over their authorized product identifiers.

### 6.3 Distributors and Retailers

Authorized distributors and retailers may use the system to check product identifiers before receiving or selling stock.

In later versions, these stakeholders may also record inventory movements and transfers between approved supply-chain participants.

### 6.4 Platform Administrators

Administrators manage accounts, approve manufacturers, investigate alerts, review abuse reports, and maintain the platform.

Administrative access must be restricted and monitored.

### 6.5 Regulatory Bodies

Relevant Nigerian regulatory and consumer protection organizations may benefit from aggregated reports and properly authorized evidence.

Potential stakeholders include the National Agency for Food and Drug Administration and Control (NAFDAC), the Standards Organisation of Nigeria (SON), and the Federal Competition and Consumer Protection Commission (FCCPC), depending on the product category and legal mandate.

Integration or information sharing would require appropriate authorization, data governance, and agreement with the relevant organization.

---

## 7. System Architecture

The proposed platform uses a client-server architecture with a centralized verification service.

### 7.1 Main Components

**1. Consumer interface**

A responsive website or mobile application through which users scan QR codes, enter codes, view verification results, and report suspicious products.

**2. Manufacturer portal**

An authenticated interface for registering products, generating identifiers, managing batches, and reviewing verification analytics.

**3. Administrator portal**

A restricted interface for manufacturer approval, fraud investigation, user management, and system administration.

**4. API gateway or application backend**

The backend receives requests, validates input, authenticates authorized users, applies rate limits, and routes requests to the appropriate service.

**5. Verification service**

The verification service checks product identifiers, retrieves relevant records, evaluates code status, and produces verification results.

**6. Product registry database**

The database stores manufacturer records, product definitions, product batches, individual product identifiers, code status, and other authorized information.

**7. Verification event store**

This component stores scan events and relevant risk signals for monitoring, analysis, and investigation.

**8. Fraud detection service**

This component evaluates suspicious patterns and generates alerts for review.

**9. Notification service**

This component can notify authorized manufacturers or administrators about important events, such as suspicious activity or a compromised code.

**10. Monitoring and audit service**

This component collects operational metrics, security events, and records of important administrative actions.

### 7.2 High-Level Architecture Diagram

<CodeBlock language="mermaid" model_previewable>
flowchart TD
    A[Consumer Scans QR Code] --> B[Web or Mobile Interface]
    B --> C[Verification API]
    C --> D[Input Validation and Rate Limiting]
    D --> E[Product Verification Service]
    E --> F[(Product Registry Database)]
    E --> G[Fraud Detection Engine]
    G --> H[(Verification Events)]
    G --> I[Risk Assessment]
    I --> J[Verification Result]
    F --> J
    J --> B

    K[Manufacturer Portal] --> L[Authenticated Management API]
    L --> M[Manufacturer and Product Management]
    M --> F

    N[Administrator Portal] --> O[Admin API and Access Controls]
    O --> P[Investigation and Audit Services]
    P --> H
    P --> F
</CodeBlock>

### 7.3 Architectural Principles

The system should follow these principles:

- Keep verification logic on the server rather than trusting information embedded in a QR code.
- Store sensitive records in protected databases.
- Separate public verification access from privileged management operations.
- Apply least-privilege permissions.
- Keep audit logs for important changes.
- Make the verification service stateless where practical so that it can scale horizontally.
- Use controlled interfaces between components.
- Avoid exposing confidential manufacturer or customer information in public responses.
- Design for reliable operation without allowing an outage to produce false claims of authenticity.

---

## 8. How the Platform Works

### 8.1 Manufacturer Registration

A manufacturer creates an account and submits the information required to establish its identity and authorization.

The platform or its authorized administrators review the submission.

Once approved, the manufacturer receives access to product-management functions.

### 8.2 Product and Batch Creation

The manufacturer registers a product and creates a production batch.

For example:

- Product: Premium Cooking Oil
- Brand: Example Foods
- Batch: CO-2026-001
- Quantity: 5,000 bottles

The platform creates an individual product record for each bottle.

### 8.3 Unique Identifier Issuance

The system generates 5,000 distinct identifiers, one for each bottle.

Each identifier is associated with the relevant manufacturer, product, batch, issuance status, and other approved metadata.

The identifiers are then provided to the manufacturer for controlled printing and application to the products.

### 8.4 Consumer Scanning

A consumer purchases a bottle and scans its QR code using a smartphone.

The QR code opens a verification page or supplies the product identifier to the application.

### 8.5 Server-Side Verification

The backend receives the identifier and checks whether:

1. The identifier has the expected format.
2. The identifier exists in the registry.
3. The identifier was issued by an approved manufacturer.
4. The product record is active.
5. The identifier has been revoked, disabled, or flagged.
6. Previous verification events indicate suspicious activity.
7. The available evidence supports the result being displayed.

### 8.6 Result Presentation

The system returns an appropriate result.

Possible outcomes include:

- **Registered code:** The code matches an active registered product record.
- **First recorded scan:** No earlier verification event is recorded for that identifier.
- **Previously scanned:** The identifier has been scanned before.
- **Suspicious activity detected:** The identifier has a scan pattern that requires further investigation.
- **Invalid or unissued code:** No matching issued identifier was found.
- **Revoked code:** The manufacturer or an authorized administrator has disabled the identifier.
- **Verification unavailable:** The system cannot currently complete the check.

These statuses should be presented carefully. A first recorded scan does not prove that a product is genuine, and a previously scanned code does not automatically prove counterfeiting.

---

## 9. Unique Product Identification Mechanism

The unique-code mechanism is central to the project.

### 9.1 Why Ordinary Barcodes Are Not Enough

Traditional barcodes often identify a product type, model, or trade item. Thousands of identical products may share the same barcode.

For example, all bottles of one cooking-oil brand and size may carry the same product barcode.

That barcode helps identify the product category but does not necessarily identify one specific bottle.

NaijaVerify should therefore use a **unique identifier for each physical product unit**, rather than relying only on a shared product barcode.

### 9.2 Identifier Requirements

Each identifier should:

- Be unique within the platform.
- Be difficult to guess.
- Be generated using a cryptographically secure random-number generator or another suitably secure issuance method.
- Have sufficient entropy to resist brute-force attempts.
- Be associated with an authorized database record.
- Be validated by the server.
- Avoid embedding sensitive information.
- Support revocation when compromise is suspected.
- Be linked to an auditable issuance process.

A sequential identifier such as `PRODUCT-000001`, `PRODUCT-000002`, or `PRODUCT-000003` is easy to predict and should not be used as the sole authentication secret.

A public product reference may be sequential if appropriate, but the security-sensitive verification token should be unpredictable.

### 9.3 Example of a Unique Identifier

Illustrative example:

`NV-7K4P-9X2M-Q8RT-6W3D`

This example demonstrates the intended format only. It is not a real issued code.

The code would map to a database record containing the relevant product, manufacturer, batch, issuance state, and verification history.

### 9.4 QR Code Design

The QR code can contain either:

- A random verification token, or
- A URL containing a token that the verification service can resolve.

For example, an illustrative verification link could be:

`https://verify.example.com/v/<token>`

The actual domain and token must be configured during implementation.

The QR code should not be treated as a security mechanism by itself. It is simply a convenient way to transfer the identifier to the verification service.

### 9.5 Preventing Code Prediction

The system should use a secure random generator, avoid sequential authentication tokens, apply rate limits, and monitor failed verification attempts.

The system should also avoid exposing enough internal information in error messages to help attackers enumerate valid codes.

### 9.6 Protecting Stored Tokens

Depending on the token design, the system may store a cryptographic hash of the verification token instead of the original token.

When a token is presented, the server hashes it and compares the result with the stored value.

This can reduce the impact of a database leak because the original tokens are not directly stored in recoverable form, assuming a suitable design and strong token entropy.

If the platform needs to regenerate or reprint codes, the issuance workflow must be designed accordingly. Hash-only storage means the original token cannot simply be recovered from the database.

---

## 10. Product Verification Workflow

The consumer verification process should be straightforward.

### Step 1: Scan the Code

The consumer opens the verification website or mobile application and scans the product's QR code.

### Step 2: Submit the Identifier

The application extracts the identifier and submits it to the backend over HTTPS.

Manual entry should be available for users who cannot scan the QR code.

### Step 3: Validate the Request

The backend checks the request format, applies rate limits, and verifies that the identifier is within the permitted length and character set.

### Step 4: Retrieve the Product Record

The verification service searches the registry for a matching issued identifier.

### Step 5: Check the Product Status

The service checks whether the code is active, revoked, blocked, or otherwise restricted.

### Step 6: Analyze Verification History

The system examines relevant earlier scans, including timing and coarse location signals where lawful and available.

### Step 7: Calculate a Risk Result

The platform applies its risk rules to determine whether the code appears ordinary, suspicious, or compromised.

### Step 8: Display the Result

The application shows the verification status and a clear explanation of what it means.

### Step 9: Record the Event

The platform records the verification event and relevant security signals, subject to its privacy and retention policies.

### Step 10: Escalate Suspicious Cases

If the system detects concerning patterns, it may alert the manufacturer or authorized investigation team.

### Verification Flow Diagram

<CodeBlock language="mermaid" model_previewable>
flowchart TD
    A[Scan or Enter Code] --> B[Submit Verification Request]
    B --> C{Request Valid?}
    C -- No --> D[Reject Invalid Request]
    C -- Yes --> E{Code Exists and Was Issued?}
    E -- No --> F[Display Invalid or Unregistered Code]
    E -- Yes --> G{Code Active?}
    G -- No --> H[Display Revoked or Disabled Status]
    G -- Yes --> I[Analyze Verification History]
    I --> J{Suspicious Pattern?}
    J -- Yes --> K[Display Caution and Flag for Review]
    J -- No --> L[Display Registered Code Status]
    K --> M[Record Event and Generate Alert if Needed]
    L --> N[Record Verification Event]
</CodeBlock>

A verification failure should never be silently converted into a successful authentication result. If the database or verification service is unavailable, the interface should state that verification could not be completed.

---

## 11. Functional Requirements

Functional requirements describe what the system must do.

### FR-01: User Registration

The platform shall allow users to create accounts where account access is required.

### FR-02: Manufacturer Verification

The platform shall support an approval process for manufacturers and authorized brand owners.

### FR-03: Product Registration

Approved manufacturers shall be able to create product definitions and production batches.

### FR-04: Unique Identifier Generation

The system shall generate distinct identifiers for registered product units and prevent duplicate issuance.

### FR-05: QR Code Generation

The system shall generate QR codes corresponding to issued product identifiers.

### FR-06: Public Verification

The system shall allow consumers to verify identifiers without necessarily creating an account.

### FR-07: Manual Code Entry

The system shall allow consumers to enter codes manually.

### FR-08: Verification Status

The system shall return a status that accurately reflects the available registry information and verification checks.

### FR-09: Scan History

The system shall maintain relevant verification events for fraud monitoring and authorized investigation.

### FR-10: Duplicate Detection

The system shall identify repeated use of the same product identifier.

### FR-11: Suspicious Activity Alerts

The system shall generate alerts when configured fraud-detection rules are triggered.

### FR-12: Consumer Reports

The system shall allow users to submit reports about potentially counterfeit products.

### FR-13: Manufacturer Dashboard

The system shall provide manufacturers with access to their authorized product records and verification analytics.

### FR-14: Administrator Dashboard

The system shall provide administrators with tools for account approval, monitoring, and investigation.

### FR-15: Identifier Revocation

The system shall support disabling or revoking compromised identifiers.

### FR-16: Audit Logging

The system shall record significant security-sensitive actions, including manufacturer approval, code issuance, code revocation, and privileged changes.

### FR-17: Access Control

The system shall restrict management operations according to user roles and permissions.

### FR-18: Error Handling

The system shall provide understandable error messages without disclosing sensitive internal details.

---

## 12. Non-Functional Requirements

### 12.1 Security

The platform should protect its identifiers, APIs, accounts, databases, and administrative functions against unauthorized access and manipulation.

### 12.2 Performance

Verification should be fast enough for practical use at retail locations.

An initial engineering target could be a median response time below 500 milliseconds and a 95th-percentile response time below 1.5 seconds under a defined test load, excluding unusually slow mobile networks. These are proposed targets, not measured performance results.

### 12.3 Availability

The service should be designed to remain available during expected usage periods.

The team may establish an initial availability target, such as 99.5% monthly uptime, and revise it as operational requirements and resources mature.

### 12.4 Scalability

The system should support increasing numbers of manufacturers, registered products, and verification requests without requiring a complete redesign.

### 12.5 Usability

The verification process should be understandable to users with different levels of digital literacy.

### 12.6 Compatibility

The platform should support common smartphone browsers and QR-scanning capabilities.

### 12.7 Maintainability

The codebase should use modular components, documented APIs, automated tests, version control, and clear deployment procedures.

### 12.8 Reliability

The system should avoid duplicate identifier issuance, inconsistent product statuses, and false success responses during failures.

### 12.9 Privacy

The platform should collect only the personal information and verification metadata needed for its legitimate purposes.

### 12.10 Accessibility

The user interface should support readable text, clear contrast, keyboard navigation, and understandable messages.

---

## 13. Security Architecture

Security must be built into the design rather than added only after the platform has been developed.

### 13.1 Authentication

Manufacturer and administrator accounts should use secure authentication.

Recommended controls include:

- Strong password storage using a modern password-hashing algorithm.
- Multi-factor authentication for privileged accounts.
- Secure account recovery.
- Session expiration and revocation.
- Protection against credential stuffing and repeated login attempts.

Public product verification should not require a privileged account.

### 13.2 Authorization

The backend must check permissions for every protected operation.

For example, a manufacturer must not be able to modify another manufacturer's products simply by changing an identifier in an API request.

Role-based access control should separate consumer, manufacturer, support, investigator, and administrator permissions.

### 13.3 Transport Security

HTTPS should be enforced for public and authenticated endpoints.

Secure transport reduces the risk of interception and tampering while data travels between clients and servers.

### 13.4 Database Security

The database should use:

- Least-privilege database accounts.
- Restricted network access.
- Encryption at rest where supported.
- Encrypted and tested backups.
- Parameterized database queries.
- Managed secrets rather than hardcoded passwords.
- Auditing of sensitive operations.
- Appropriate separation between development and production environments.

### 13.5 API Security

The API should apply:

- Input validation.
- Rate limiting.
- Request-size limits.
- Authentication for protected endpoints.
- Authorization checks.
- Safe error handling.
- Abuse detection.
- Dependency updates.
- Security testing.

### 13.6 Secrets Management

Database passwords, signing keys, API credentials, and other secrets must not be committed to public source repositories.

Secrets should be stored in a suitable secrets manager or protected deployment configuration.

### 13.7 Secure Development

The project should follow secure software development practices, including code review, dependency scanning, static analysis, and testing for common web vulnerabilities.

The OWASP Top 10 and OWASP API Security Top 10 are useful references for threat identification and testing.

---

## 14. Threat Model and Risk Analysis

A threat model identifies what attackers may attempt, what assets they may target, and which controls can reduce the associated risks.

| Threat | Potential impact | Recommended control |
|---|---|---|
| Copying a genuine QR code | Counterfeit products may reuse a legitimate identifier | Tamper-evident labels, duplicate-scan analytics, and stronger product authentication |
| Guessing product identifiers | Unauthorized enumeration of valid codes | Cryptographically secure random identifiers, rate limits, and monitoring |
| Creating fake manufacturer accounts | Unauthorized codes appear to come from a trusted brand | Manufacturer identity and authorization checks |
| Unauthorized database changes | Fake records or altered product statuses | Access controls, database permissions, audit logs, and change monitoring |
| Manufacturer account compromise | Attacker issues or revokes codes without permission | MFA, session security, alerts, and account recovery controls |
| API abuse | Service disruption or automated code discovery | Rate limiting, abuse detection, request validation, and traffic controls |
| Insider misuse | Unauthorized access or manipulation of records | Least privilege, separation of duties, and auditable administrative actions |
| QR label replacement | A genuine code is attached to a different product | Tamper-evident packaging and controlled labeling processes |
| False counterfeit reports | Legitimate businesses or products are unfairly flagged | Evidence review, controlled escalation, and clear distinction between allegation and confirmed finding |
| Location spoofing | Fraud detection produces misleading location patterns | Treat location as a risk signal, not definitive evidence |
| Database breach | Exposure of product, business, or personal information | Encryption, access restrictions, monitoring, and incident response |
| Verification service outage | Consumers cannot verify products | Monitoring, resilient infrastructure, backups, and clear unavailable status |
| Replay of copied codes | A copied identifier repeatedly appears valid | Scan-history analysis, physical security controls, and stronger authentication methods |

### 14.1 Assets to Protect

The most important assets are:

- Product verification identifiers.
- Manufacturer accounts and authorization records.
- Product and batch records.
- Identifier issuance and revocation records.
- Verification events and fraud alerts.
- Administrative credentials.
- Personal data collected during verification or reporting.
- System signing keys and secrets.
- Audit logs and backups.

### 14.2 Attacker Profiles

Potential attackers include counterfeit manufacturers, unauthorized distributors, organized fraud groups, malicious insiders, compromised account holders, and automated bots.

The system should also consider accidental threats such as incorrectly printed labels, duplicate manufacturing records, or mistaken administrative actions.

### 14.3 Risk Prioritization

The initial development team should prioritize:

1. Copying and reuse of genuine QR codes.
2. Unauthorized manufacturer enrollment.
3. Weak or predictable identifiers.
4. Account compromise.
5. Unauthorized modification of product records.
6. Automated code guessing and API abuse.
7. Inaccurate or misleading verification results.
8. Service outages and data loss.

Risk ratings should be refined through a formal assessment that considers likelihood, impact, and the controls actually implemented.

---

## 15. Mitigation Controls

Mitigation controls are the technical and operational measures used to reduce the risks identified above.

### 15.1 Unique and Unpredictable Identifiers

**Problem:** Attackers may guess identifiers or generate large numbers of verification requests.

**Control:** Use sufficiently long, cryptographically random tokens. Do not use sequential product numbers as the only security-sensitive code. Apply rate limits and monitor repeated failed attempts.

**Expected outcome:** Makes code guessing more difficult and reduces the effectiveness of automated enumeration.

**Limitation:** Randomness does not stop someone from copying a valid code from a genuine product.

### 15.2 Manufacturer Approval

**Problem:** Fraudulent parties may register brands or products they do not own.

**Control:** Require manufacturer identity checks, authorization evidence, and approval before allowing product-code issuance. Reassess accounts when suspicious activity occurs.

**Expected outcome:** Reduces the likelihood that unauthorized organizations can create trusted product records.

**Limitation:** Verification quality depends on the evidence available and the review process.

### 15.3 Protection Against QR Code Copying

**Problem:** A counterfeiter may photograph a genuine product's QR code and print the same code on thousands of counterfeit products.

**Controls:**

- Use unique identifiers for individual product units.
- Monitor repeated scans and suspicious scan patterns.
- Use tamper-evident labels where appropriate.
- Consider scratch-off verification codes or concealed security tokens for higher-risk products.
- Consider cryptographic product labels for products requiring stronger authentication.
- Maintain a process for reporting and revoking compromised identifiers.

**Expected outcome:** Makes large-scale reuse more detectable and provides stronger evidence for investigation.

**Limitation:** A copied identifier can still produce a valid database match. Duplicate-scan detection helps identify suspicious reuse but cannot guarantee that the first scan came from the genuine item.

### 15.4 Role-Based Access Control

**Problem:** Users may access or change records outside their responsibilities.

**Control:** Assign roles and permissions and enforce authorization checks on the backend for every sensitive operation.

**Expected outcome:** Reduces unauthorized access and limits the consequences of compromised accounts.

### 15.5 Multi-Factor Authentication

**Problem:** Stolen passwords may allow unauthorized access to manufacturer or administrator accounts.

**Control:** Require MFA for administrators and preferably for manufacturer accounts, especially for code issuance, bulk exports, and revocation operations.

**Expected outcome:** Adds a second barrier against account compromise.

### 15.6 Rate Limiting and Abuse Prevention

**Problem:** Attackers may repeatedly submit codes in an attempt to discover valid identifiers or overload the service.

**Control:** Apply request limits by relevant dimensions, such as IP address, account, device signals, and endpoint. Use graduated restrictions and monitoring.

**Expected outcome:** Reduces brute-force attempts and abusive traffic.

**Limitation:** Shared networks, mobile carriers, and VPNs can cause legitimate users to share apparent network identifiers. Limits should not unnecessarily block ordinary consumers.

### 15.7 Secure Database Operations

**Problem:** Attackers may exploit application vulnerabilities or excessive database permissions.

**Control:** Use parameterized queries, least-privilege database accounts, secure configuration, encryption, backups, and audit logging.

**Expected outcome:** Reduces the likelihood and impact of unauthorized database access or modification.

### 15.8 Audit Trails

**Problem:** Unauthorized changes may be difficult to investigate.

**Control:** Record important events such as product creation, code issuance, batch changes, revocation, manufacturer approval, and administrative access.

Audit records should include relevant timestamps, actor identifiers, action types, and affected records without unnecessarily storing secrets.

**Expected outcome:** Improves accountability and supports incident investigation.

### 15.9 False Positive Management

**Problem:** A legitimate consumer may scan a product several times or purchase it in a location different from the manufacturer's distribution records.

**Control:** Use multiple signals, risk thresholds, review procedures, and clear warning language. Provide a way to challenge an incorrect result.

**Expected outcome:** Reduces the risk of incorrectly labeling legitimate products as counterfeit.

### 15.10 Backup and Recovery

**Problem:** Data loss, accidental deletion, ransomware, or infrastructure failure may disrupt the service.

**Control:** Use encrypted backups, appropriate backup retention, recovery procedures, and regular restoration tests.

**Expected outcome:** Improves recovery capability after operational or security incidents.

### 15.11 Incident Response

**Problem:** The team may not respond consistently when a breach or widespread code compromise occurs.

**Control:** Establish an incident-response plan covering detection, triage, containment, investigation, recovery, communication, and post-incident review.

**Expected outcome:** Helps limit damage and restores service in a controlled manner.

---

## 16. Fraud Detection and Duplicate-Scan Monitoring

Fraud detection is one of the most important opportunities for making NaijaVerify more useful than a basic QR-code lookup service.

### 16.1 Why Duplicate-Scan Monitoring Matters

Suppose a manufacturer issues a unique code for a single bottle of cooking oil.

The bottle is sold in Lagos and a consumer scans the code. Later, the same identifier is scanned repeatedly from unrelated locations.

This pattern may indicate that the code has been copied and attached to counterfeit products.

However, the pattern could also arise from a genuine consumer sharing the verification link, scanning the product more than once, or checking a product on behalf of another person.

The platform must therefore evaluate patterns rather than treating every repeated scan as proof of fraud.

### 16.2 Data Used for Fraud Analysis

Where necessary and lawful, the system may analyze:

- Product identifier.
- Verification timestamp.
- Verification outcome.
- Number of previous scans.
- Time between scans.
- Approximate location, if available and justified.
- Manufacturer and batch.
- Rate of failed attempts.
- Identifier revocation status.
- Previous fraud alerts.
- Relevant distribution information, when available.

The system should not collect precise location or persistent device identifiers by default unless a clear, proportionate purpose justifies doing so.

### 16.3 Example Detection Rules

**Rule A: Repeated scans within a short period**

If one identifier receives an unusually high number of scans within a short interval, the system generates a review alert.

**Rule B: Implausible geographic movement**

If the same identifier appears in distant locations within a period that is inconsistent with plausible travel, the system increases its risk score.

**Rule C: High-volume failed attempts**

If a source repeatedly submits invalid identifiers, the system applies additional rate limits or temporary restrictions.

**Rule D: Batch-level anomaly**

If many identifiers from the same batch generate suspicious activity, the platform flags the batch for manufacturer review.

**Rule E: Revoked-code usage**

If a revoked identifier continues to be submitted, the system records the activity and may notify the responsible manufacturer or investigator.

### 16.4 Illustrative Risk Scoring Model

A simple rule-based model can be used for the MVP.

For example:

| Signal | Illustrative score |
|---|---:|
| Unusually high scan count | +20 |
| Implausible location pattern | +35 |
| High rate of invalid-code attempts | +20 |
| Identifier already revoked | +50 |
| Confirmed compromise associated with the identifier | Escalate immediately |

These values are illustrative and must be calibrated using realistic test data and observed performance.

The platform could define the following initial thresholds:

- **0–19:** No significant anomaly detected.
- **20–39:** Low-level anomaly; monitor.
- **40–59:** Elevated risk; flag for review.
- **60 or above:** High risk; initiate an appropriate review or protective action.

The actual thresholds should depend on the product category, fraud prevalence, and consequences of false positives.

A score should never be presented as a scientifically validated probability of counterfeiting unless it has been properly calibrated and evaluated.

### 16.5 Fraud Detection Pseudocode

```python
def assess_product_code(code, scan_history):
    if code.status == "revoked":
        return "REVOKED"

    if code.status != "active":
        return "NOT_ACTIVE"

    risk_score = 0

    if scan_history.scan_count_is_unusual:
        risk_score += 20

    if scan_history.has_implausible_location_pattern:
        risk_score += 35

    if scan_history.has_unusual_failure_pattern:
        risk_score += 20

    if risk_score >= 60:
        return "HIGH_RISK"

    if risk_score >= 40:
        return "REVIEW_REQUIRED"

    return "REGISTERED_CODE"
```

This is illustrative pseudocode, not a complete production implementation. The production system must define its data structures, calculate signals securely, protect against manipulated inputs, and account for false positives.

### 16.6 Human Review

High-risk alerts should enter an investigation workflow.

An authorized reviewer may examine scan history, batch information, manufacturer reports, distribution records, and submitted evidence.

The reviewer can then classify the case as unresolved, likely legitimate, suspected counterfeit, or confirmed counterfeit according to a documented evidence standard.

A product should not be publicly declared counterfeit solely because an automated rule was triggered.

---

## 17. System Components and Technology Stack

The following is a proposed stack, not a mandatory requirement. The final choice should depend on the development team's skills, budget, deployment environment, and operational needs.

### 17.1 Frontend

**Suggested technologies:** React, Next.js, or a comparable frontend framework.

Responsibilities:

- Consumer verification interface.
- QR scanning through supported browser camera APIs.
- Manual code entry.
- Verification results.
- Manufacturer dashboard.
- Administrator dashboard.
- Responsive layouts for mobile devices.

The interface should provide a fallback when camera access is unavailable or denied.

### 17.2 Backend

**Suggested technologies:** Python with FastAPI or Django, or Node.js with a suitable backend framework.

Responsibilities:

- Manufacturer onboarding.
- Product registration.
- Unique-code issuance.
- QR-code generation.
- Verification endpoints.
- Authentication and authorization.
- Fraud detection.
- Audit logging.
- Reporting and analytics.

A single well-structured backend application is sufficient for an MVP. Separate microservices can be introduced when scale or operational requirements justify them.

### 17.3 Database

**Suggested technology:** PostgreSQL or another relational database with suitable transactional and indexing capabilities.

Reasons for this choice include:

- Structured product and manufacturer records.
- Relationships between products, batches, and individual units.
- Unique constraints for identifiers.
- Transactional consistency during code issuance.
- Flexible reporting and analytics queries.

### 17.4 Caching

A cache such as Redis may be useful for:

- Rate-limit counters.
- Short-lived verification lookups.
- Temporary session data.
- Frequently accessed public product metadata.

Caching must not allow revoked or compromised codes to remain incorrectly trusted.

### 17.5 Infrastructure

The platform may be deployed using AWS or another suitable cloud provider.

A possible AWS architecture includes:

- Amazon CloudFront for content delivery.
- Amazon S3 for static assets and authorized object storage.
- AWS WAF for selected web attack and traffic controls.
- Amazon ECS, AWS App Runner, AWS Lambda, or Amazon EC2 for backend execution.
- Amazon RDS for PostgreSQL.
- AWS Secrets Manager for sensitive application credentials.
- Amazon CloudWatch for logs, metrics, and alarms.
- AWS KMS for key management and supported encryption operations.

Not every service is necessary for the MVP. The team should select the simplest secure architecture that meets the project's requirements and budget.

### 17.6 Development Tools

Useful development tools include:

- Git and GitHub or an equivalent version-control system.
- Docker for consistent local environments.
- Automated testing frameworks.
- CI/CD pipelines.
- API documentation tools.
- Dependency and vulnerability scanners.
- Infrastructure-as-code tools when infrastructure complexity justifies them.

### 17.7 Suggested MVP Stack

| Component | Suggested choice |
|---|---|
| Frontend | React or Next.js |
| Backend API | Python FastAPI |
| Database | PostgreSQL |
| QR generation | A maintained QR-code library |
| Identifier generation | Cryptographically secure random generator |
| Authentication | Established authentication library or identity provider |
| Hosting | AWS or another suitable cloud platform |
| Monitoring | Cloud-native logs, metrics, and alerts |
| Version control | Git |
| Testing | Unit, integration, security, and end-to-end tests |

The project should avoid building custom cryptographic algorithms or inventing its own password-storage mechanism.

---

## 18. Database Design

The database should represent the difference between a manufacturer, a product type, a production batch, an individual physical unit, and a verification event.

### 18.1 Manufacturers Table

Stores information about participating manufacturers.

| Field | Purpose |
|---|---|
| manufacturer_id | Unique internal manufacturer identifier |
| legal_name | Registered business name |
| brand_name | Brand name, where applicable |
| verification_status | Pending, approved, rejected, or suspended |
| contact_email | Authorized contact email |
| created_at | Registration timestamp |
| updated_at | Last update timestamp |

Sensitive documents and verification evidence should be stored with suitable access restrictions rather than exposed through public product responses.

### 18.2 Products Table

Stores product definitions.

| Field | Purpose |
|---|---|
| product_id | Unique product identifier |
| manufacturer_id | Associated manufacturer |
| product_name | Product name |
| brand_name | Public brand name |
| category | Product category |
| model_or_variant | Size, type, or variant |
| product_status | Active, discontinued, or restricted |
| created_at | Creation timestamp |

### 18.3 Batches Table

Stores production batch information.

| Field | Purpose |
|---|---|
| batch_id | Unique batch identifier |
| product_id | Associated product |
| batch_number | Manufacturer's batch or lot reference |
| manufacturing_date | Date of manufacture, where applicable |
| expiry_date | Expiry date, where applicable |
| declared_quantity | Declared batch quantity |
| batch_status | Current batch status |

### 18.4 Product Units Table

Stores the individual physical units issued into the verification system.

| Field | Purpose |
|---|---|
| unit_id | Internal unit identifier |
| batch_id | Associated batch |
| token_hash | Hash of the verification token, if hash-based storage is used |
| issuance_status | Issued, disabled, revoked, or another defined status |
| issued_at | Issuance timestamp |
| first_verified_at | First recorded verification timestamp, if any |
| last_verified_at | Most recent verification timestamp, if any |

The original token should not be included in routine logs or exposed through manufacturer reports.

### 18.5 Verification Events Table

Stores verification activity.

| Field | Purpose |
|---|---|
| event_id | Unique event identifier |
| unit_id | Associated unit, when identified |
| event_timestamp | Event timestamp |
| result | Verification outcome |
| risk_score | Calculated risk score, if used |
| approximate_location | Coarse location, where justified and available |
| source_reference | Limited reference to the relevant request or source |
| review_status | Investigation status, where applicable |

The schema should avoid storing unnecessary personal information, raw authentication secrets, or complete IP addresses indefinitely.

### 18.6 Users Table

Stores authenticated user accounts.

| Field | Purpose |
|---|---|
| user_id | Unique user identifier |
| email | Account email |
| password_hash or identity_reference | Authentication data, depending on the authentication design |
| role | Authorized role |
| account_status | Active, disabled, or pending |
| created_at | Account creation timestamp |

### 18.7 Counterfeit Reports Table

Stores consumer-submitted reports.

| Field | Purpose |
|---|---|
| report_id | Unique report identifier |
| unit_id | Related product unit, if identified |
| reporter_reference | Optional protected reference to the reporting user |
| report_category | Type of concern |
| description | User-submitted description |
| evidence_reference | Reference to securely stored evidence |
| investigation_status | Pending, under review, resolved, or another defined state |
| created_at | Report timestamp |

### 18.8 Audit Logs Table

Stores important administrative and security-sensitive actions.

| Field | Purpose |
|---|---|
| audit_id | Unique audit record identifier |
| actor_id | User or service responsible |
| action | Action performed |
| resource_type | Type of affected record |
| resource_id | Affected record reference |
| timestamp | Action timestamp |
| outcome | Success or failure |
| correlation_id | Reference for related system events |

Audit records should be protected against unauthorized alteration and should not contain passwords, full verification tokens, or other secrets.

### 18.9 Database Relationships

<CodeBlock language="mermaid" model_previewable>
erDiagram
    MANUFACTURERS ||--o{ PRODUCTS : owns
    PRODUCTS ||--o{ BATCHES : contains
    BATCHES ||--o{ PRODUCT_UNITS : issues
    PRODUCT_UNITS ||--o{ VERIFICATION_EVENTS : generates
    PRODUCT_UNITS ||--o{ COUNTERFEIT_REPORTS : receives
    USERS ||--o{ AUDIT_LOGS : performs
    USERS ||--o{ COUNTERFEIT_REPORTS : submits
</CodeBlock>

### 18.10 Database Integrity Controls

The implementation should enforce:

- Unique constraints on internal identifiers.
- Unique issuance of security-sensitive product tokens.
- Foreign-key constraints for related records.
- Transactions for batch creation and bulk identifier issuance.
- Validation of manufacturer and product status before issuance.
- Controlled status transitions.
- Appropriate indexes for token lookups, batch queries, and scan analysis.
- Database backups and tested restoration procedures.

Bulk issuance should be transactional or safely resumable so that interrupted operations do not accidentally create duplicate or inconsistent identifiers.

---

## 19. API Design

The backend should expose a documented API that separates public verification operations from privileged management functions.

The following endpoints are illustrative. They are proposed API routes, not live services.

### 19.1 Public Verification

**Endpoint:** `POST /api/v1/verify`

Purpose: Verify a product identifier.

Example request:

```json
{
  "code": "NV-7K4P-9X2M-Q8RT-6W3D"
}
```

Example response:

```json
{
  "status": "registered",
  "message": "This code matches an active registered product record.",
  "product": {
    "name": "Premium Cooking Oil",
    "brand": "Example Foods",
    "manufacturer": "Example Foods Limited"
  },
  "risk": {
    "level": "low",
    "message": "No significant anomaly was detected."
  }
}
```

This response is illustrative. A real API must only return information supported by the database and authorization rules.

### 19.2 Manufacturer Registration

**Endpoint:** `POST /api/v1/manufacturers`

Purpose: Submit a manufacturer registration request.

The endpoint should validate required fields, store the submission, and assign an appropriate pending status.

### 19.3 Product Registration

**Endpoint:** `POST /api/v1/products`

Purpose: Register a product definition.

Access should be restricted to authorized manufacturer accounts or administrators with the required permission.

### 19.4 Batch Registration

**Endpoint:** `POST /api/v1/batches`

Purpose: Register a production batch associated with an authorized product.

### 19.5 Bulk Identifier Issuance

**Endpoint:** `POST /api/v1/batches/{batch_id}/issue-codes`

Purpose: Generate and associate unique identifiers with product units.

The endpoint should verify manufacturer authorization, batch eligibility, quantity limits, and identifier uniqueness.

### 19.6 Verification History

**Endpoint:** `GET /api/v1/products/{product_id}/verification-analytics`

Purpose: Return authorized verification analytics.

Access must be restricted to the appropriate manufacturer or administrative role.

### 19.7 Counterfeit Reporting

**Endpoint:** `POST /api/v1/reports`

Purpose: Submit a report about a suspected counterfeit product.

The endpoint should validate the submission, protect uploaded evidence, and return a report reference.

### 19.8 Identifier Revocation

**Endpoint:** `POST /api/v1/product-units/{unit_id}/revoke`

Purpose: Disable an identifier that has been compromised or otherwise requires revocation.

Access should be restricted, and the action should be audited.

### 19.9 API Security Requirements

All endpoints should implement appropriate:

- Authentication and authorization.
- Input validation.
- Rate limits.
- Request-size limits.
- Error handling.
- Logging.
- Monitoring.
- Versioning and documentation.

The verification API should avoid exposing sensitive internal data, such as token hashes, confidential manufacturer records, private contact details, or full fraud-detection rules that could help attackers evade monitoring.

---

## 20. User Interface and User Experience

The interface must be easy to use because the platform depends on consumers choosing to verify products.

### 20.1 Homepage

The homepage should contain:

- A clear explanation of the platform.
- A prominent scan or verify option.
- Manual code entry.
- A link to report a suspicious product.
- Basic instructions on interpreting verification results.
- A statement explaining that only registered products can be checked against the platform.

### 20.2 Verification Page

The verification page should show the result prominently, followed by the relevant product information and explanation.

It should distinguish between:

- A valid registered identifier.
- A previously scanned identifier.
- An identifier requiring review.
- An invalid or unissued identifier.
- A revoked identifier.
- A temporarily unavailable verification service.

The platform should avoid presenting a simple green checkmark as an unconditional guarantee of authenticity.

### 20.3 Manufacturer Dashboard

The manufacturer dashboard should include:

- Product and batch management.
- Identifier issuance and revocation.
- Verification trends.
- Suspicious activity alerts.
- Report investigation status.
- Authorized data exports.
- Account and access management.

### 20.4 Administrator Dashboard

The administrator dashboard should include:

- Manufacturer approval requests.
- Account and permission management.
- Fraud alerts.
- Product and batch investigations.
- Report review.
- Audit history.
- Service health information.

### 20.5 Accessibility and Connectivity

The system should be optimized for mobile devices and varying network conditions.

Useful features include:

- Manual code entry.
- Short and readable verification messages.
- Low-bandwidth pages.
- Clear error messages.
- Language localization, initially English and potentially additional Nigerian languages.
- Accessible controls and readable text.

If offline verification is introduced in a later version, it must be clear that an offline result cannot confirm the current server-side status of a code that may have been revoked or compromised.

---

## 21. Privacy and Data Protection

The platform may process manufacturer information, user reports, scan timestamps, and potentially location-related metadata.

Privacy must therefore be considered during system design.

### 21.1 Data Minimization

Collect only the information required to perform verification, investigate reports, secure the service, and fulfill legitimate operational requirements.

A public verification request should not automatically require the consumer's name, telephone number, email address, or precise GPS location.

### 21.2 Purpose Limitation

Information collected for product verification should not be reused for unrelated marketing or tracking purposes without an appropriate legal basis and the required transparency.

### 21.3 Location Privacy

Location data can be useful for detecting copied identifiers, but it can also expose sensitive movement patterns.

Where location signals are justified:

- Prefer coarse location over precise coordinates when sufficient.
- Explain relevant data practices to users.
- Avoid unnecessary background tracking.
- Restrict access to location-related records.
- Define retention periods.
- Consider the risk of location spoofing.

### 21.4 Retention

The project should establish retention schedules for:

- Verification events.
- Authentication and security logs.
- Manufacturer registration documents.
- Consumer reports.
- Investigation evidence.
- Backups.

Retention periods should reflect the platform's purposes, applicable law, security needs, and investigation requirements.

### 21.5 Nigerian Data Protection Requirements

The project should assess its obligations under the Nigeria Data Protection Act 2023 and applicable guidance from the Nigeria Data Protection Commission.

Depending on the deployment and processing activities, the team may need privacy notices, a lawful basis for processing, appropriate security safeguards, procedures for handling data-subject requests, and a data protection impact assessment.

Legal and regulatory requirements should be reviewed with an appropriately qualified professional before production deployment.

---

## 22. Implementation Plan

The project should be developed in stages so that the team can test its core security assumptions before adding complex features.

### Phase 1: Requirements and Research

Activities:

- Define the target product categories.
- Interview potential consumers and manufacturers.
- Review existing authentication approaches.
- Identify relevant legal and regulatory requirements.
- Define the verification statuses.
- Establish the initial threat model.
- Select the technology stack.

Deliverables:

- Requirements document.
- Initial architecture.
- Threat model.
- Data model.
- Project plan.

### Phase 2: Backend and Database

Activities:

- Build manufacturer and product models.
- Implement product and batch registration.
- Implement secure identifier generation.
- Add database integrity constraints.
- Implement role-based access control.
- Add basic audit logging.

Deliverables:

- Backend API.
- Database schema.
- Identifier issuance service.
- Automated unit tests.

### Phase 3: QR Code and Verification

Activities:

- Generate QR codes.
- Build the public verification endpoint.
- Create the consumer verification interface.
- Implement manual code entry.
- Add code-status checks.
- Add clear failure handling.

Deliverables:

- Working QR-code flow.
- Public verification interface.
- Verification API.
- Initial product registry.

### Phase 4: Dashboards and Reporting

Activities:

- Build manufacturer management screens.
- Build administrator functions.
- Implement verification history.
- Add counterfeit reporting.
- Implement code revocation.

Deliverables:

- Manufacturer dashboard.
- Administrator dashboard.
- Reporting workflow.
- Audit records.

### Phase 5: Fraud Detection

Activities:

- Implement duplicate-scan monitoring.
- Establish baseline activity patterns.
- Add rule-based risk scoring.
- Create alerts and review queues.
- Test false-positive scenarios.

Deliverables:

- Fraud detection module.
- Risk alerts.
- Review workflow.
- Initial detection evaluation.

### Phase 6: Security and Quality Assurance

Activities:

- Test authentication and authorization.
- Test code guessing resistance.
- Test copied-code scenarios.
- Perform API security testing.
- Test database recovery.
- Test system performance.
- Conduct usability testing.

Deliverables:

- Test reports.
- Security findings.
- Remediation records.
- Release readiness checklist.

### Phase 7: Pilot Deployment

Activities:

- Onboard a small number of participating manufacturers.
- Register selected product batches.
- Distribute labeled pilot products.
- Collect user feedback.
- Monitor scan activity.
- Measure performance and false positives.
- Refine the product-verification process.

Deliverables:

- Pilot release.
- Pilot evaluation report.
- Updated risk model.
- Prioritized improvements.

---

## 23. Testing and Quality Assurance

Testing should cover correctness, security, usability, reliability, and fraud detection.

### 23.1 Unit Testing

Test individual functions, including:

- Identifier generation.
- Identifier uniqueness checks.
- Token validation.
- Product-status evaluation.
- Risk-score calculation.
- Authorization checks.
- Input validation.

### 23.2 Integration Testing

Test interactions between:

- Frontend and backend.
- Backend and database.
- Identifier issuance and batch registration.
- Verification service and event logging.
- Fraud detection and alert generation.
- Report submission and investigation workflows.

### 23.3 Security Testing

Test whether:

- Invalid identifiers are rejected.
- Sequential or guessed codes cannot be easily enumerated.
- Unauthorized users cannot issue or revoke identifiers.
- One manufacturer cannot access another manufacturer's restricted records.
- API endpoints enforce authorization.
- Sensitive information is not exposed through error messages.
- Rate limits behave appropriately.
- Database queries resist injection.
- Session and account controls work as expected.
- Audit logs record relevant privileged actions.

### 23.4 Functional Test Cases

| Test | Expected result |
|---|---|
| Scan a valid active code for the first time | The platform returns the supported registered-code status |
| Scan a nonexistent code | The platform returns an invalid or unregistered status |
| Scan a revoked code | The platform returns the revoked or disabled status |
| Scan the same code several times | The platform records the repeated activity |
| Scan a copied code from different locations | The system evaluates available evidence and may generate a suspicious-activity alert |
| Submit a malformed code | The request is rejected safely |
| Attempt to access another manufacturer's data | Access is denied |
| Submit a counterfeit report | The report is stored and assigned an appropriate status |
| Disable a compromised identifier | Subsequent verification reflects its disabled status |
| Temporarily disconnect the database | The platform reports verification unavailability rather than claiming success |

### 23.5 Performance Testing

Measure:

- Verification response times.
- Concurrent request handling.
- Database lookup performance.
- Bulk identifier issuance throughput.
- Rate-limiting effectiveness.
- Resource utilization.
- Behavior during temporary service failures.

Performance targets should be validated through load testing rather than assumed.

### 23.6 Fraud Detection Evaluation

The system should be tested using controlled scenarios containing:

- Normal repeated scans.
- Shared verification links.
- Copied-code scenarios.
- Unusual geographic patterns.
- Automated code guessing.
- Legitimate users on shared mobile networks.
- Products that have been revoked.

Evaluation should measure precision, recall, false-positive rates, and the time required to detect suspicious activity.

A high detection rate is not sufficient if the system also produces too many false alarms.

---

## 24. Deployment and Infrastructure

The platform should be deployed through a controlled process.

### 24.1 Environment Separation

Maintain separate development, testing, staging, and production environments.

Production data and secrets should not be copied into development environments without an approved, privacy-protective process.

### 24.2 CI/CD

A deployment pipeline can automate:

1. Code checkout.
2. Dependency installation.
3. Automated testing.
4. Static security checks.
5. Build creation.
6. Deployment to staging.
7. Approval for production deployment.
8. Health checks after deployment.

### 24.3 Database Migration

Database schema changes should be versioned and tested.

Production migrations should include an appropriate rollback or recovery strategy.

### 24.4 Monitoring

Monitor:

- API response times.
- Error rates.
- Database health.
- Verification request volume.
- Failed code submissions.
- Suspicious scan alerts.
- Authentication failures.
- Infrastructure availability.

### 24.5 Recovery

Define recovery procedures for:

- Database failure.
- Accidental data deletion.
- Compromised manufacturer accounts.
- Compromised code batches.
- Malicious changes.
- Service outages.
- Security incidents.

A recovery plan should be tested rather than existing only as documentation.

---

## 25. Monitoring and Maintenance

After deployment, the team should monitor both the technical platform and its effectiveness at detecting suspicious products.

### 25.1 Technical Monitoring

Track uptime, API latency, failed requests, database capacity, infrastructure costs, and backup status.

### 25.2 Security Monitoring

Track unusual login activity, permission changes, repeated failed verifications, administrative actions, and potential attempts to enumerate codes.

### 25.3 Product Monitoring

Track code issuance, product registrations, revoked identifiers, verification patterns, and reports associated with specific batches.

### 25.4 Maintenance

Regular maintenance should include:

- Security updates.
- Dependency patching.
- Backup restoration tests.
- Access reviews.
- Incident-response exercises.
- Fraud-rule evaluation.
- API documentation updates.
- Review of user feedback.
- Periodic privacy and security assessments.

### 25.5 Manufacturer Support

Manufacturers need a defined process for correcting product information, replacing damaged labels, reporting compromised identifiers, and handling customer complaints.

A code that is difficult to scan should not automatically be interpreted as counterfeit.

---

## 26. Limitations and Challenges

The platform can improve verification, but several challenges remain.

### 26.1 QR Code Duplication

A genuine QR code can be copied and attached to counterfeit products.

**Response:** Combine unique identifiers with duplicate-scan analytics, tamper-evident packaging, secure issuance, and stronger physical authentication where justified.

### 26.2 First-Scan Problem

A counterfeiter may copy a code and sell the counterfeit product before the genuine product is scanned.

The counterfeit product could appear to be the first scanned item.

**Response:** Do not treat a first recorded scan as conclusive proof. Use stronger label technology, supply-chain information, and appropriate physical checks for higher-risk products.

### 26.3 Manufacturer Adoption

The platform is most useful when manufacturers participate and register products correctly.

**Response:** Start with a limited pilot, demonstrate business value, simplify onboarding, and develop a sustainable commercial model.

### 26.4 Internet Connectivity

Some users may have slow or intermittent internet access.

**Response:** Optimize the verification page, support manual entry, minimize data usage, and communicate service outages clearly.

### 26.5 Incorrect Product Records

An approved manufacturer may enter inaccurate information or register products incorrectly.

**Response:** Use validation, controlled approvals, audit logs, and processes for correcting records.

### 26.6 False Positives

A genuine product may trigger a suspicious-scan alert.

**Response:** Use risk-based warnings and human review rather than automatically declaring products counterfeit.

### 26.7 Counterfeit Products Without Registered Codes

Products that are not registered on the platform cannot be fully authenticated through its database.

**Response:** Clearly distinguish between unregistered and confirmed counterfeit products and encourage participation from relevant manufacturers.

### 26.8 Operational Cost

Hosting, verification traffic, security monitoring, manufacturer onboarding, and support all have ongoing costs.

**Response:** Begin with an affordable architecture and scale infrastructure according to actual demand.

### 26.9 Consumer Trust

Users may distrust the platform if it returns inaccurate results or if manufacturers do not consistently apply codes.

**Response:** Publish clear verification explanations, use transparent investigation procedures, and communicate limitations honestly.

---

## 27. Possible Improvements and Future Enhancements

The following enhancements can make the platform more effective over time. They should be prioritized based on evidence from the pilot rather than implemented all at once.

### 27.1 Tamper-Evident Product Labels

**Current challenge:** A copied QR code may remain valid.

**Improvement:** Use labels that reveal damage when removed, destructible stickers, security seals, or concealed codes.

**Benefit:** Makes it harder to transfer a genuine label onto another product without leaving evidence.

**Limitation:** A sophisticated counterfeiter may reproduce some physical security features, and not every product package can accommodate them.

### 27.2 Scratch-Off Verification Codes

A concealed code beneath a scratch-off layer can reduce casual copying before purchase.

The consumer reveals the code and verifies it online.

**Benefit:** The secret is less visible to someone photographing the product from outside the package.

**Limitation:** Scratch-off codes can still be copied after exposure, and the first-scan problem remains. The printing and distribution process must also prevent unauthorized access to concealed codes.

### 27.3 Cryptographic Product Authentication

For higher-risk products, the platform could introduce labels or devices that support cryptographic challenge-response authentication.

Instead of merely scanning a static token, the verifier challenges a product-specific secure component to produce a response that can be checked cryptographically.

**Benefit:** A copied static QR code alone would not be sufficient to impersonate the genuine cryptographic component.

**Limitation:** This approach introduces additional manufacturing cost, key management, integration complexity, and possible hardware requirements. It is not necessary for every product category.

### 27.4 Supply-Chain Traceability

Future versions could record authorized product movements between manufacturers, distributors, wholesalers, and retailers.

For example:

1. A manufacturer creates a batch.
2. An authorized distributor receives the batch.
3. A wholesaler records receipt.
4. A retailer records delivery or receipt.
5. A consumer verifies an individual unit.

**Benefit:** Investigators can compare the product's recorded journey with its reported location.

**Limitation:** Traceability is only as reliable as the information recorded by participants. Recording a movement does not independently prove that the physical goods were genuine.

### 27.5 Integration with Regulatory Systems

The platform could explore authorized integration with relevant Nigerian regulatory or product-registration systems.

**Benefit:** May improve product information quality and provide additional evidence during verification.

**Limitation:** Integration requires authorization, technical compatibility, reliable data exchange, and compliance with applicable legal requirements. The platform must not imply regulatory approval merely because a manufacturer has an account.

### 27.6 Artificial Intelligence for Fraud Detection

A future version could use machine-learning models to identify unusual scan patterns across large volumes of verification events.

Potential features include:

- Anomaly detection.
- Batch-level risk analysis.
- Geographic pattern analysis.
- Detection of coordinated code reuse.
- Prioritization of reports for investigation.

**Benefit:** May identify complex patterns that are difficult to capture with simple rules.

**Limitation:** Machine learning requires suitable data, evaluation, monitoring, and human oversight. It should not be presented as a reliable counterfeit detector without evidence of performance.

A rule-based system is generally more practical for the first release.

### 27.7 Consumer Mobile Application

A mobile application could support scanning, verification history, notifications, product reports, and saved receipts.

**Benefit:** May improve convenience for frequent users.

**Limitation:** A mobile app adds maintenance, distribution, and device-compatibility costs. A mobile-friendly website should be built first unless user research demonstrates a need for an app.

### 27.8 Multiple Language Support

The platform could support English and selected Nigerian languages based on user research, such as Hausa, Yoruba, and Igbo.

**Benefit:** Improves accessibility for users who prefer local languages.

**Limitation:** Translation quality and consistent terminology must be maintained.

### 27.9 Retailer and Distributor Verification

The platform could provide tools for businesses to scan incoming stock before accepting delivery.

**Benefit:** Moves verification earlier in the supply chain rather than relying exclusively on consumers.

**Limitation:** Business users need practical scanning workflows, reliable stock records, and incentives to use the platform consistently.

### 27.10 Offline Verification Support

A future version may support limited offline checks or cached public product information.

**Benefit:** Can help in areas with intermittent connectivity.

**Limitation:** An offline device cannot reliably determine whether a code has recently been revoked or copied. Offline results must be labeled accordingly.

### 27.11 Blockchain-Based Audit Records

The project could evaluate whether a tamper-evident distributed ledger adds value for recording selected supply-chain events.

**Benefit:** A suitably designed ledger may make certain historical changes easier to detect.

**Limitation:** Blockchain does not prove that information entered into the system is true. It does not stop physical products or QR codes from being copied. A conventional database with strong access controls and audit logs may be more practical and economical for the initial release.

### 27.12 Product Recall Notifications

The platform could notify users or authorized retailers when a participating manufacturer issues a relevant recall or safety notice.

**Benefit:** Helps communicate safety information associated with a product or batch.

**Limitation:** Notifications must be based on verified information, respect privacy, and follow the relevant manufacturer's and regulator's procedures.

---

## 28. Success Metrics and Evaluation

The project should use measurable indicators to determine whether it is achieving its objectives.

### 28.1 Adoption Metrics

- Number of approved manufacturers.
- Number of registered product types.
- Number of registered product units.
- Number of participating retailers.
- Number of unique consumer verification sessions.

### 28.2 Performance Metrics

- Median verification response time.
- 95th-percentile response time.
- Verification service availability.
- API error rate.
- Successful request rate.
- Recovery time after service disruption.

### 28.3 Security Metrics

- Number of blocked unauthorized management attempts.
- Number of suspicious code-enumeration events.
- Time required to revoke a compromised identifier.
- Number of unresolved high-risk security findings.
- Backup restoration success rate.
- Number of privileged actions with complete audit records.

### 28.4 Fraud Detection Metrics

- Number of suspicious identifiers flagged.
- Percentage of alerts confirmed as genuine cases of abuse after investigation.
- False-positive rate.
- Detection delay for controlled duplicate-code scenarios.
- Number of investigations resolved.
- Number of compromised identifiers successfully disabled.

### 28.5 Usability Metrics

- Percentage of users who complete verification successfully.
- Average time required to verify a product.
- Percentage of users who understand the returned status.
- QR-scanning failure rate.
- User satisfaction from structured feedback.

### 28.6 Suggested Initial Targets

These are proposed pilot targets, not claims of current performance.

| Metric | Illustrative target |
|---|---|
| Successful verification of valid test codes | At least 99% under defined test conditions |
| Median verification response time | Below 500 ms under defined load |
| Critical security findings | Zero unresolved at production launch |
| Manufacturer issuance integrity | No duplicate identifiers in issuance tests |
| Audit coverage | All defined privileged actions logged |
| Backup recovery | Successful scheduled restoration tests |
| Verification usability | At least 90% task completion in a defined pilot test |

Targets should be adjusted after establishing a baseline and defining the test conditions.

### 28.7 Evaluation Method

The pilot should compare expected behavior with actual results.

For example, the team can issue codes for a controlled batch, scan them under normal conditions, deliberately copy selected codes, simulate suspicious scan patterns, and measure how well the platform distinguishes the scenarios.

This approach provides evidence about the platform's capabilities without claiming that a small pilot proves it can eliminate counterfeit products across Nigeria.

---

## 29. Ethical, Legal, and Regulatory Considerations

### 29.1 Fairness and Accuracy

The platform must distinguish between an invalid code, an unregistered product, a suspicious identifier, and a confirmed counterfeit product.

These categories should not be treated as interchangeable.

### 29.2 Consumer Safety

For products that may pose immediate safety risks, the platform should establish an appropriate escalation process involving the manufacturer and relevant authorities where necessary.

The platform should not replace emergency guidance, medical advice, or official recall instructions.

### 29.3 Business Reputation

False accusations may damage legitimate businesses.

Investigation records, public warnings, and reports should follow clear evidence standards and appropriate review procedures.

### 29.4 Intellectual Property

Manufacturers should have the appropriate rights or authorization to register product brands and issue verification identifiers.

### 29.5 Data Protection

The project should comply with applicable data protection obligations and maintain clear privacy notices and security controls.

### 29.6 Regulatory Claims

The platform must not imply that a product is approved by NAFDAC, SON, or another regulator unless the relevant approval has been verified through an appropriate source and can lawfully be represented.

A platform-generated registration record is not automatically equivalent to government certification.

---

## 30. Expected Benefits and Impact

### 30.1 Benefits to Consumers

- More accessible product-code verification.
- Better information about registered product records.
- Warnings when an identifier appears suspicious.
- A way to report potentially counterfeit products.
- Clearer guidance when product authenticity cannot be established.

### 30.2 Benefits to Manufacturers

- Individual product-unit identification.
- Monitoring of verification activity.
- Better visibility into suspected code copying.
- A process for disabling compromised identifiers.
- Evidence to support counterfeit investigations.
- Potential improvements in customer confidence.

### 30.3 Benefits to Distributors and Retailers

- Additional checks during stock receipt.
- Better visibility into registered batches.
- A way to flag suspicious inventory.
- Potentially improved supply-chain accountability.

### 30.4 Benefits to Investigators and Regulators

Subject to authorization and appropriate data-sharing arrangements, the platform may provide structured information about suspicious identifiers, reported products, and recurring activity patterns.

### 30.5 Broader Impact

If implemented effectively and adopted by participating manufacturers, NaijaVerify could contribute to improved consumer awareness, better product traceability, more timely reporting, and stronger evidence-based investigation of suspected counterfeit activity.

Its overall impact would depend on adoption, data quality, authentication strength, and cooperation between relevant stakeholders.

---

## 31. Conclusion

NaijaVerify proposes a digital approach to product authentication in Nigeria by connecting individual product identifiers to a centralized verification service.

The platform combines manufacturer registration, product-unit identification, QR-code verification, secure backend validation, verification-history monitoring, counterfeit reporting, and administrative investigation tools.

Its primary value is not simply that a product has a QR code. Its value comes from controlling how identifiers are issued, maintaining trustworthy product records, detecting suspicious reuse, and communicating the limitations of each verification result.

A basic implementation can identify unregistered codes and provide useful verification records. A more mature implementation can add tamper-evident packaging, stronger cryptographic authentication, authorized supply-chain traceability, and evidence-based fraud detection.

The recommended approach is to begin with a secure, manageable MVP, validate it through a controlled pilot with participating manufacturers, measure its effectiveness,
