### Step 1: Install Docker

### Step 2: Clone the Web Application

**Clone the repository**:

     git clone https://github.com/yourusername/your-app.git

### Step 3: Create a Dockerfile

In the root of your project, create a `Dockerfile`.

1. **Create a `Dockerfile`**:

   ```Dockerfile
   # Use an official Node.js runtime as a parent image
   FROM node:14

   # Set the working directory in the container
   WORKDIR /usr/src/app

   # Copy package.json and package-lock.json to the working directory
   COPY package*.json ./

   # Install any needed packages
   RUN npm install

   # Bundle the app source inside the container
   COPY . .

   # Expose the port the app runs on (assumes your app uses port 3000)
   EXPOSE 3000

   # Run the app when the container starts
   CMD ["npm", "start"]
   ```

### Step 4: Build the Docker Image

Once the `Dockerfile` is created,build the Docker image.

1. **Build the Docker image**:
   
     ```bash
     docker build -t 323_2.1p .
     ```

2. **Verify Image**:

     ```bash
     docker images
     ```

### Step 5: Create a Docker Compose File

1. **Create a `docker-compose.yml` file**:

   ```yaml
   version: '3'
   services:
     app:
       image: your-image-name
       build:
         context: .
       ports:
         - "3000:3000"
       restart: unless-stopped
   ```
### Step 6: Start the Docker Compose Environment

1. **Start the containers**:
  
   ```bash
   docker-compose up -d
   ```

2. **Verify the containers are running**:
 
   ```bash
   docker-compose ps
   ```

3. **Access the application**:
   Open browser and go to `http://localhost:3000` to test if application is running properly.

### Step 7: Test the Application

Open browser and visit `http://localhost:3000` . We can see the web application running inside the Docker container.

### Step 8: Push the Docker Image to a Registry

1. **Login to Docker Hub**:

   ```bash
   docker login
   ```

2. **Tag the Docker image**:

   ```bash
   docker tag 323_2.1p regina224385133/323_2.1p
   ```

3. **Push the Docker image**:
   
   ```bash
   docker push regina224385133/323_2.1p
   ```

### Step 9: Submit Code and Dockerfile

1. **Push code to GitHub**:
   initialize a Git repository in project folder:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     ```

2. **Create a GitHub repository**:
   - Go to GitHub and create a new repository called `sit323-2025-prac5p`.

3. **Push code to GitHub**:
   - Add the remote repository and push code:
     ```bash
     git remote add origin https://github.com/username/sit323-2025-prac5p.git
     git push -u origin master
     ```

