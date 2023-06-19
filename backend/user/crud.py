from sqlalchemy.orm import Session
from user.schema import UserCreate
from user.models import User
from passlib.context import CryptContext
from passlib.hash import sha256_crypt

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def create_user(db: Session, user_create: UserCreate):
    print(user_create.password1)
    db_user = User(
        username=user_create.username,
        password=sha256_crypt.encrypt(user_create.password1),
        email=user_create.email,
    )
    db.add(db_user)
    db.commit()


def get_existing_user(db: Session, user_create: UserCreate):
    user = (
        db.query(User)
        .filter(
            (User.username == user_create.username) | (User.email == user_create.email)
        )
        .first()
    )
    return user
