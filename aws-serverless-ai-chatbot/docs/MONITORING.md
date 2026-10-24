# CloudWatch alarm examples

These examples create Lambda metric alarms. Replace SNS topic ARN, region, and function name. Create an SNS topic, subscribe your email and confirm the subscription first.

```bash
export AWS_PROFILE=cloudassist
export AWS_REGION=us-east-1
export FUNCTION_NAME=cloudassist-chatbot-backend
export SNS_TOPIC_ARN=arn:aws:sns:us-east-1:YOUR_ACCOUNT_ID:cloudassist-alerts

aws cloudwatch put-metric-alarm \
  --alarm-name cloudassist-lambda-errors \
  --namespace AWS/Lambda --metric-name Errors \
  --dimensions Name=FunctionName,Value="$FUNCTION_NAME" \
  --statistic Sum --period 300 --evaluation-periods 1 \
  --threshold 1 --comparison-operator GreaterThanOrEqualToThreshold \
  --treat-missing-data notBreaching \
  --alarm-actions "$SNS_TOPIC_ARN" \
  --profile "$AWS_PROFILE" --region "$AWS_REGION"

aws cloudwatch put-metric-alarm \
  --alarm-name cloudassist-lambda-throttles \
  --namespace AWS/Lambda --metric-name Throttles \
  --dimensions Name=FunctionName,Value="$FUNCTION_NAME" \
  --statistic Sum --period 300 --evaluation-periods 1 \
  --threshold 1 --comparison-operator GreaterThanOrEqualToThreshold \
  --treat-missing-data notBreaching \
  --alarm-actions "$SNS_TOPIC_ARN" \
  --profile "$AWS_PROFILE" --region "$AWS_REGION"
```

Use CloudWatch Console to inspect Lambda Duration and set an alarm if latency matters. For Lex metrics, inspect available metrics in the AWS/Lex namespace before selecting dimensions. Never log user PII or secrets.
