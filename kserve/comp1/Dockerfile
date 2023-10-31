FROM python:3.9-slim
ARG WORKINGDIR=/usr/src/app

WORKDIR ${WORKINGDIR}
COPY Pipfile* ${WORKINGDIR}
RUN apt-get update
RUN pip install --upgrade && pip install --upgrade pipenv
RUN cd ${WORKINGDIR} && pipenv install --dev --system --deploy
RUN rm -rf ${WORKINGDIR}/Pipfile*

EXPOSE 8080

COPY . ${WORKINGDIR}

ENTRYPOINT [ "python", "app.py" ]
