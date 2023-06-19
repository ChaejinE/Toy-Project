from fastapi import APIRouter, HTTPException
from user.schema import UserCreate
from user.crud import get_existing_user, create_user
from sqlalchemy.orm import Session
from fastapi import Depends
from database import get_db
from starlette import status

router = APIRouter(prefix="/api/user")


@router.post("/create", status_code=status.HTTP_204_NO_CONTENT)
def user_create(_user_create: UserCreate, db: Session = Depends(get_db)):
    user = get_existing_user(db=db, user_create=_user_create)
    if user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT, detail="Already Existing User"
        )
    create_user(db=db, user_create=_user_create)
