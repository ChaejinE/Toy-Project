from pydantic import BaseModel, EmailStr, validator


class UserCreate(BaseModel):
    username: str
    password1: str
    password2: str
    email: EmailStr

    @validator("username", "password1", "password2", "email")
    def valid_empty(cls, v):
        if not v or not v.strip():
            raise ValueError("Empty value")
        return v

    @validator("password2")
    def valid_password(cls, v, values):
        if "password1" in values and v != values["password1"]:
            raise ValueError("Password realted Error")
        return v


class Token(BaseModel):
    username: str
    access_token: str
    token_type: str
