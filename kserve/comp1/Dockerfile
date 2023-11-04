FROM python:3.9-slim
ARG WORKINGDIR=/usr/src

RUN apt-get update && apt-get install -y build-essential gcc gettext-base
RUN pip install --upgrade pipenv

COPY . ${WORKINGDIR}
WORKDIR ${WORKINGDIR}
RUN pipenv install --dev --system --deploy
EXPOSE 8080

ENTRYPOINT [ "python", "app.py" ]
