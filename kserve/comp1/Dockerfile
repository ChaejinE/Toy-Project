FROM python:3.9-slim
ARG WORKINGDIR=/usr/src

RUN apt-get update
RUN pip install --upgrade pipenv

WORKDIR ${WORKINGDIR}
COPY . ${WORKINGDIR}
RUN pipenv install --dev --system --deploy

EXPOSE 8080

ENTRYPOINT [ "python", "app.py" ]
