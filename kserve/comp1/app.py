import argparse
from typing import Dict
from kserve import Model, ModelServer


class Comp1(Model):
    def __init__(self, name: str):
        super().__init__(name)
        self.name = name
        self.model = None
        self.ready = True

    def predict(self, payload: Dict, headers: Dict[str, str] = None) -> Dict:
        data = payload["query"]["a"]
        return {"a": data}


if __name__ == "__main__":
    comp = Comp1("comp1")
    ModelServer().start([comp])

import argparse
import base64
from torchvision import models, transforms
from typing import Dict, Union
import torch
import numpy as np
from PIL import Image
from kserve import Model, ModelServer
from kserve.utils.utils import generate_uuid


class AlexNetModel(Model):
    def __init__(self, name: str):
        super().__init__(name)
        self.name = name
        self.load()

    def load(self):
        self.model = models.alexnet(pretrained=True)
        self.model.eval()
        self.ready = True

    def predict(self, payload: Dict, headers: Dict[str, str] = None) -> Dict:
        img_data = payload["instances"][0]["image"]["b64"]
        raw_img_data = base64.b64decode(img_data)
        input_image = Image.open(io.BytesIO(raw_img_data))
        preprocess = transforms.Compose(
            [
                transforms.Resize(256),
                transforms.CenterCrop(224),
                transforms.ToTensor(),
                transforms.Normalize(
                    mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]
                ),
            ]
        )
        input_tensor = preprocess(input_image).unsqueeze(0)
        output = self.model(input_tensor)
        torch.nn.functional.softmax(output, dim=1)
        values, top_5 = torch.topk(output, 5)
        result = values.flatten().tolist()
        response_id = generate_uuid()
        return {"predictions": result}


if __name__ == "__main__":
    model = AlexNetModel("custom-model")
    ModelServer().start([model])
