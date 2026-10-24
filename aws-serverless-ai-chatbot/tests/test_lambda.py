import importlib.util
import json
from pathlib import Path
import sys
import types
import unittest
from unittest.mock import patch

sys.modules.setdefault("boto3", types.SimpleNamespace(client=lambda _: None))
path = Path(__file__).resolve().parents[1] / "backend" / "lambda_function.py"
spec = importlib.util.spec_from_file_location("cloudassist_handler", path)
handler = importlib.util.module_from_spec(spec)
spec.loader.exec_module(handler)

class LambdaTests(unittest.TestCase):
    def test_greeting(self):
        event = {"sessionState": {"intent": {"name": "GreetingIntent"}}, "invocationSource": "FulfillmentCodeHook", "inputTranscript": "Hello"}
        result = handler.lambda_handler(event, None)
        self.assertEqual(result["sessionState"]["dialogAction"]["type"], "Close")
        self.assertIn("Welcome", result["messages"][0]["content"])

    def test_missing_question(self):
        self.assertEqual(handler.lambda_handler({"question": ""}, None)["statusCode"], 400)

    @patch.dict("os.environ", {"KNOWLEDGE_BASE_ID": "kb123", "MODEL_ARN": "model123"})
    def test_bedrock_direct(self):
        fake = types.SimpleNamespace(retrieve_and_generate=lambda **_: {"output": {"text": "Sample answer"}, "citations": []})
        with patch.object(handler.boto3, "client", return_value=fake):
            result = handler.lambda_handler({"question": "Which courses?"}, None)
        self.assertEqual(json.loads(result["body"])["answer"], "Sample answer")

if __name__ == "__main__": unittest.main()
