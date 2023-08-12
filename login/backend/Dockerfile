FROM python:3.9-slim

RUN apt-get update
RUN pip install --upgrade pip && pip install pipenv
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN pipenv install --dev --system --deploy

ENTRYPOINT [ "/bin/bash", "-c" ]
CMD [ "uvicorn", "main:app", "--reload", "--host", "0.0.0.0"]
