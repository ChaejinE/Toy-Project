from typing import Union
import hmac
import hashlib
import base64
import json


def convert_to_base64(data: Union[str, dict]) -> str:
    # Python에서 base64로 인코딩하려면 str type을 bytes type으로 인코딩, 디코딩하는 과정이 필요하다.
    try:
        data = json.dumps(data).encode("ascii")
    except TypeError:
        pass

    data = base64.urlsafe_b64encode(data)
    data = data.decode("ascii")
    data = data.strip("=")
    return data


def convert_base64to_origin(data: str):
    data = base64.urlsafe_b64decode(data)
    data = data.decode("ascii")
    return data


def generate_signature(header: str, payload: str, secret_key: bytes) -> str:
    data = f"{header}.{payload}"
    data = hmac.new(
        key=secret_key, msg=data.encode("ascii"), digestmod=hashlib.sha256
    ).digest()
    data = convert_to_base64(data)
    return data


def generate_jwt(header: str, payload: str, signature: str):
    return f"{header}.{payload}.{signature}"


header = {
    "alg": "HS256",
    "typ": "JWT",
}

payload = {
    "email": "myjwt@gmail.com",
    "name": "cjlotto",
    "isAdmin": True,
}

header = convert_to_base64(header)
payload = convert_to_base64(payload)
secret_key = b"secret_key"
signature = generate_signature(header, payload, secret_key)
jwt = generate_jwt(header, payload, signature)
print(jwt)
