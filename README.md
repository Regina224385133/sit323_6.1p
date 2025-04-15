### Step 1: 克隆5.1程序
     git clone https://github.com/Regina224385133/sit323-2025-prac5p.git

### Step 2: 创建Docker镜像
**1.创建Dockerfile文件**

**2.构建镜像**
```
     docker build -t regina224385133/323_2.1p
```
**登录并推送镜像到Docker Hub**

     docker login
     docker puush regina224385133/323_2.1p



### Step 3: 部署到 Kubernetes

 **1.启动 Minikube**
```
   minikube start
   minikube start --driver=docker
```
**2.创建 Deployment 文件**

在项目中新建文件夹 kubernetes/，里面建文件 deployment.yaml：

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

**3. 创建 Service 文件**
在 kubernetes/ 文件夹中再建一个 service.yaml
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

### Step 4: 部署并访问应用

**1. 部署到 Kubernetes**:
   
   
        kubectl apply -f kubernetes/deployment.yaml
        kubectl apply -f kubernetes/service.yaml

    

**2.访问你的应用**:

   
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

