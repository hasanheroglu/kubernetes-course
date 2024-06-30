# Exercise 1.02

## Steps

1. Run `docker build -t {your_docker_hub_username}/todo-app:0.1 .` to create a docker image.
2. Run `docker push {your_docker_hub_username}/todo-app:0.1` to push your docker image to the docker hub.
3. Assuming your k3d cluster is already running, run `kubectl create deployment todo-app --image={your_docker_hub_username}/todo-app:0.1`.
4. Run `kubectl logs deployments/todo-app:0.1` after the container is created and started successfully. 