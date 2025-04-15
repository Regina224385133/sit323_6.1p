### Step 1: Cloning 5.1 program
     git clone https://github.com/Regina224385133/sit323-2025-prac5p.git

### Step 2: Creating a Docker image
**1.Create the Dockerfile file**

**2.Building an image**
```
     docker build -t regina224385133/323_2.1p
```
**Log in and push the image to Docker Hub**

     docker login
     docker puush regina224385133/323_2.1p



### Step 3: Deploying to Kubernetes

 **1.Start Minikubee**
```
   minikube start
   minikube start --driver=docker
```
**2.Creating a Deployment File**

Create a new folder in the project, kubernetes/, with the file deployment.yaml in it：

 ```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: node-app-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: node-app
  template:
    metadata:
      labels:
        app: node-app
    spec:
      containers:
      - name: node-app
        image: yourdockerhubusername/node-app:1.0
        ports:
        - containerPort: 3000

  ```

**3. Creating a Service File**
Make another service.yaml in the kubernetes/ folder
 ```
apiVersion: v1
kind: Service
metadata:
  name: node-app-service
spec:
  type: NodePort
  selector:
    app: node-app
  ports:
    - port: 3000
      targetPort: 3000
      nodePort: 30036
 ```

### Step 4: Deploy and access applications

**1. Deploying to Kubernetes**:
   
   
        kubectl apply -f kubernetes/deployment.yaml
        kubectl apply -f kubernetes/service.yaml

    

**2.Access to your application**:

   
        minikube service node-app-service



### Step 5: Submit Code and Dockerfile

1. **Push code to GitHub**:
   initialize a Git repository in project folder:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     ```

2. **Create a GitHub repository**:
   - Go to GitHub and create a new repository called `sit323-2025-prac6.1p`.

3. **Push code to GitHub**:
   - Add the remote repository and push code:
     ```bash
     git remote add origin https://github.com/regina224385133/sit323-6.1p.git
     git push -u origin master
     ```

