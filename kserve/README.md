# For Practice Setting
```
pipenv install <packages>
```
- I installed packages and set environent using pipenv

```
pipenv requirements > <component-foldername>/requirements.txt
```
- I freezed requirements.txt in specific component folder. This will be used by kserve app build & package

```
make docker-push
```
- Make sure python version through ```runtime.txt```
- After packaging component app, like ```return_a.py```, using Buildpacks, it will push on docker repository