DOCKER_USER ?= joung6517
IMG ?= comp1
VERSION ?= v1
LOCAL_PORT ?= 6999
SERVICE_FILENAME ?= inferenceService.yaml

docker-build:
	docker build -t ${DOCKER_USER}/${IMG}:${VERSION} .
docker-push: docker-build
	docker push ${DOCKER_USER}/${IMG}:${VERSION}
docker-run:
	docker run -p ${LOCAL_PORT}:8080 ${DOCKER_USER}/${IMG}:${VERSION}
docker-run-test:
	curl localhost:${LOCAL_PORT}/v1/models/comp1:predict -d @./input.json
deploy:
	export DOCKER_USER=${DOCKER_USER}; \
	export IMG=${IMG}; \
	export VERSION=${VERSION}; \
	envsubst < ${SERVICE_FILENAME}.template > ${SERVICE_FILENAME}
	kubectl apply -f ${SERVICE_FILENAME}
