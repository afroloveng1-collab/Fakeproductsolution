#!/usr/bin/env bash
set -euo pipefail
PROFILE="${AWS_PROFILE:-cloudassist}"
REGION="${AWS_REGION:-us-east-1}"
aws sts get-caller-identity --profile "$PROFILE"
aws bedrock-agent list-knowledge-bases --region "$REGION" --profile "$PROFILE" --max-results 20
aws lexv2-models list-bots --region "$REGION" --profile "$PROFILE" --max-results 20
aws lambda get-function --function-name cloudassist-chatbot-backend --region "$REGION" --profile "$PROFILE" --query 'Configuration.[FunctionName,Runtime,State]'
