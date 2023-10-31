import json
from typing import Dict, Union
from kserve import Model, ModelServer
from kserve.protocol.infer_type import InferResponse


class Comp1(Model):
    def __init__(self, name: str):
        super().__init__(name)
        self.name = name
        self.model = None
        self.ready = True

    def preprocess(self, request: Dict, headers: Dict[str, str] = None) -> Dict:
        data = json.loads(request)
        return data["query"]["a"]

    def predict(self, payload: Dict, headers: Dict[str, str] = None) -> Dict:
        return payload

    def postprocess(self, response: Dict, headers: Dict[str, str] = None) -> Dict:
        return {"result": response}


if __name__ == "__main__":
    comp = Comp1("comp1")
    ModelServer().start([comp])
