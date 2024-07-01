# Exercise 1.02

## Steps

1. Run `docker build -t {your_docker_hub_username}/todo-app:0.1 .` to create a docker image.
2. Run `docker push {your_docker_hub_username}/todo-app:0.1` to push your docker image to the docker hub.
3. Assuming your k3d cluster is already running, run `kubectl create deployment todo-app --image={your_docker_hub_username}/todo-app:0.1`.
4. Run `kubectl logs deployments/todo-app:0.1` after the container is created and started successfully. 
   
## Updates

### Exercise 1.04
For exercise 1.04, the app version is updated to 0.2.0, and the docker image is created accordingly.
A [deployment file](manifests/deployment.yaml) has been added.
The deployment file can be applied by running the command `kubectl apply -f manifests/deployment.yaml`.

### Exercise 1.05
For exercise 1.05, the app version is updated to 0.3.0, and the app now returns a html page on GET request to the route `/`. 
Running the command `kubectl port-forward <pod_name> 3003:3333` would forward the pod's port 3333 to `localhost:3003`.

### Exercise 1.06
For exercise 1.06, the app version is updated to 0.4.0, and [service.yaml](./manifests/service.yaml) has been added.
k3d cluster maps agent 0's port `:30081` to localhost:8083 and NodePort maps container's `:3333` to node's `:30081`.