# Log Output Writer

## Steps

1. Run `docker build -t {your_docker_hub_username}/log-output .` to create a docker image.
2. Run `docker push {your_docker_hub_username}/log-output` to push your docker image to the docker hub.
3. Assuming your k3d cluster is already running, run `kubectl create deployment log-output --image={your_docker_hub_username}/log-output`.
4. Run `kubectl logs deployments/log-output` after the container is created and started successfully. 

## Updates 

### Exercise 1.03
For Exercise 1.03, a [deployment file](manifests/deployment.yaml) has been added.
The deployment file can be applied by running the command `kubectl apply -f manifests/deployment.yaml`.

### Exercise 1.07
For exercise 1.07, express and dotenv are added to the project dependencies.
[ingress.yaml](./manifests/ingress.yaml) and [service.yaml](./manifests/service.yaml) are added for accessing the app.
Running `kubectl apply -f log-output/manifests/` would run the app in the k8s cluster and set up the network. 

### Exercise 1.09
For exercise 1.09, [ingress.yaml](./manifests/ingress.yaml) has been adjusted, and [strip-prefix-mw.yaml](./manifests/strip-prefix-mw.yaml) has been added.

### Exercise 1.10
For exercise 1.10, the app is split into two applications, and this one is converted to log-output-writer.