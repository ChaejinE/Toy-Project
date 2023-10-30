DOCKER_USER ?= joung6517
IMG ?= comp1
VERSION ?= v1
PLATFORM ?= ''

pack:
	pack build --builder=heroku/buildpacks:20 ${DOCKER_USER}/${IMG}:${VERSION}
docker-push: pack
	docker push ${DOCKER_USER}/${IMG}:${VERSION}
docker-push-mac: pack
	docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t ${DOCKER_USER}/${IMG}:${VERSION} --push .
inspect-platforms:
	docker buildx imagetools inspect ${DOCKER_USER}/${IMG}:${VERSION}
local-test:
	docker run -p 6999:8080 ${DOCKER_USER}/${IMG}:${VERSION}
local-test-mac:
	if [ -z ${PLATFORM} ]; then \
		echo "ENTER ARGUMENT PLATFORM"; \
		exit 1; \
	fi
	docker run -p 6999:8080 ${PLATFORM}