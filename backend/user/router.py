from fastapi import APIRouter, HTTPException, Depends
from fastapi.responses import RedirectResponse, HTMLResponse
from fastapi.security import OAuth2PasswordRequestForm
from user.schema import UserCreate, Token
from user.crud import get_existing_user, create_user, get_user, pwd_context
from sqlalchemy.orm import Session
from database import get_db
from starlette import status
from datetime import datetime, timedelta
from jose import jwt

import requests

router = APIRouter(prefix="/api/user")
TOKEN_EXPIRE_TIME = 60 * 24
SECRET_KEY = "de400c87c4e564325c9a741b1c1f7f30a8a09392419d1cd235d8887b9c0c4e97"


@router.post("/create", status_code=status.HTTP_204_NO_CONTENT)
def user_create(_user_create: UserCreate, db: Session = Depends(get_db)):
    user = get_existing_user(db=db, user_create=_user_create)
    if user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT, detail="Already Existing User"
        )
    create_user(db=db, user_create=_user_create)


@router.post("/login", response_model=Token)
def login_for_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)
):
    user = get_user(db, username=form_data.username)
    if not user or not pwd_context.verify(form_data.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"www-authenticate": "Bearer"},
        )

    data = {
        "sub": user.username,
        "exp": datetime.utcnow() + timedelta(microseconds=TOKEN_EXPIRE_TIME),
    }
    access_token = jwt.encode(data, key=SECRET_KEY, algorithm="HS256")

    return {
        "access_token": access_token,
        "token_type": "jwt",
        "username": user.username,
    }

@router.get("/kakao/auth")
def login_kakao(redirect_url: str):
    print(redirect_url)
    client_id = "2e703c9d3df3d30e99e1054e9f77ce01"
    authorization_url = f"https://kauth.kakao.com/oauth/authorize?response_type=code&client_id={client_id}&redirect_uri={redirect_url}"
    try:
        response = requests.get(url=authorization_url)
        print(response.content.decode())
    except Exception as e:
        print(e)
        return {"success": False}
        
    return HTMLResponse(response.content.decode())