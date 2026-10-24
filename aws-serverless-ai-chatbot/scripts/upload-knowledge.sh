#!/usr/bin/env bash
set -euo pipefail
: "${BUCKET_NAME:?Set BUCKET_NAME to the existing private S3 bucket name}"
PROFILE="${AWS_PROFILE:-cloudassist}"
aws s3 sync knowledge-base/ "s3://${BUCKET_NAME}/knowledge-base/" --exclude '*' --include '*.md' --profile "$PROFILE"
echo "Upload complete. Sync the data source in Bedrock Knowledge Bases."
