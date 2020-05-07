---
title: Docker Notes
date: '2020-04-27T22:12:03.284Z'
tags: ['docker']
---

## What is Docker?

Docker creates a container for your program. Let's say we want to run a Python program on our computer. We have to install Python to run any programs. Then we can create and run the program on our computer. Docker is its own little computer that has nothing installed except what you install on it, which in our instance is Python. Instead of running locally on our computer, we can run our program in Docker and then put the entire Docker container on a server to run automatically.

How do we create a Python container? Well we don't have to create it from scratch. Docker Images are pre-configured Docker containers that we can copy. When we want to create a new container, we can either create it ourselves from scratch or copy one from DockerHub which is kinda like GitHub, only for Docker Images specifically. When we run `docker run python`, if we don't have an image called Python on our computer, Docker will automatically grab it from DockerHub!

Remember, Docker is just a container that makes sure your program has everything it needs to run. There is a lot more functionality included with Docker that I'm not going to get into. I taught myself Docker using a couple different resources:

1. [KodeKloud Docker for Beginners](https://kodekloud.com/p/docker-for-the-absolute-beginner-hands-on) is great for going from absolutely no knowledge. Kode Kloud also has in-browser labs which are super handy.
2. [Docker and Kubernetes: The Complete Guide](https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/) I took this after the KodeKloud course. It offers a lot more in-depth on the _why_ behind commands and not just the _how_. There's also a few projects to get your hands dirty.

## Command Cheatsheet

### Basic Commands

| Command                                          | Description                    |
| ------------------------------------------------ | ------------------------------ |
| `docker search someImage`                        | Search for image               |
| `docker run --name containerName -d imageName`   | Run container in background    |
| `docker run --name containerName -a imageName`   | Run container in foreground    |
| `docker ps`                                      | View all running containers    |
| `docker run -p hostPort:containerPort imageName` | Run on specific port           |
| `docker run -p 8000 imageName`                   | Set a random container port    |
| `docker port containerName hostPort`             | Find random port               |
| `docker run -v hostDirectory:containerDirectory` | Store changes to host          |
| `docker logs containerId`                        | View logs of running container |
| `docker create imageName`                        | Create container from image    |
| `docker start containerId`                       | Run a container                |
| `docker stop containerId`                        | Sigterm aka stop on own time   |
| `docker kill containerId`                        | Sigkill aka stop right now     |

### Running Commands inside Containers

Run command inside container:
`docker exec -it containerId command`

#### What is -it flag?

`-i` stands for internal. Run the command on the internal of the given container.

`-t` text in good format.

`-i -t` === `-it`

#### Opening shell in running container

> Control-d or `exit` to exit container if control-c does not work.

Open **sh**ell in running container
`docker exec -it containerId sh`

Or use `run` if you aren't running other processes
`docker run -it containerId sh`

### Creating Images

Curios on how Docker images are created? They're built from configuration files called Dockerfiles. It's pretty easy to get started:

1. Create docker file named `Dockerfile`. (Just a file telling Docker how to make a container)
2. Specify the base image in the Dockerfile. (You gotta start with somewhere)
3. Specify the commands to run while building the image.
4. Specify the command that runs when the container is ran.

```dockerfile
# Specify docker image base
FROM ubuntu

# Specify commands to run while building
RUN apt-get npm

# Specify command to be run on start
CMD npm run dev
```

_Note, the example above probably won't work. I didn't test if those names correlate with actual Docker images._

After creating an image, you can build it from the directory where the Dockerfile is located with:

```bash
docker build .
```

The `.` stands for the _build context_. For now, that just means we're building it where we're located at in the file structure, but more on this later.

The command line output will have steps printed out that coordinate with the steps specified in the Dockerfile. For example, running the example I have above would output three steps. At the end, you should get an ID that can be used to run the new container with the run command!

```bash
docker run someHashId
```

At every step of building an image, Docker creates a temporary image and stores it in the cache. This is important because if you make a change to the Docker file, it will start from the beginning of the file and use cached "steps" until it comes across something new. Docker saves a lot of build time this way.

Instead of using that hash of digits for an ID, we can specify a tag to use instead with the `-t` option:

```bash
docker build -t dockerID/projectName:version .
docker run dockerID/projectName:version || latest
```

When we create a Docker account on DockerHub, we setup a Docker ID. The above syntax is how everybody names their images, the exception being community images such as ubutnu or reddis. We use our docker id / our project name / the version number. The tag is technically the version number, and the name is our docker id / project name. We can run images without specifying the tag (version), and Docker will automatically run the latest version. Docker images kept on DockerHub or locally should be versioned just like software on GitHub. For example:

```bash
docker build danielcurtis/superCoolApp:1.0
docker run danielcurtis/superCoolApp:1.0

OR

docker run danielcurtis/superCoolApp
```
