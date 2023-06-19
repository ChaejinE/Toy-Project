from fastapi import Depends, FastAPI
from starlette.middleware.cors import CORSMiddleware
from starlette import status
from user.router import router as user_router

app = FastAPI()

origins = [""]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(user_router)


@app.get("/health_check", status_code=status.HTTP_200_OK)
def health_check():
    from fastapi.responses import JSONResponse

    return JSONResponse({"health_check": True})
