# Exercise 1.01

## Steps

1. Run `docker build -t {your_docker_hub_username}/log-output .` to create a docker image.
2. Run `docker push {your_docker_hub_username}/log-output` to push your docker image to the docker hub.
3. Assuming your k3d cluster is already running, run `kubectl create deployment log-output --image={your_docker_hub_username}/log-output`.
4. Run `kubectl logs deployments/log-output` after the container is created and started successfully. 