# Frontend
```
cd github-action
```
- Join in the github-action folder

## How to create app

```bash
npx create-react-app hello-frontend
```

## Dockerbuild
### First Develop

```bash
IMG=my-app
TAG=dev
docker build -f Dockerfile.frontend.dev -t ${IMG}:${TAG} .
```
- docker build

```bash
IMG=my-app
TAG=dev
LOCAL_PATH=$PWD/hello-frontend
CONTAINER_PATH=/usr/src/app
LOCAL_PORT=2000
CONTAINER_PORT=3000
docker run --rm -it -d -v ${LOCAL_PATH}:${CONTAINER_PATH} -p ${LOCAL_PORT}:${CONTAINER_PORT} ${IMG}:${TAG}
```
- docker image run