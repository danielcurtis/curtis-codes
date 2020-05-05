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
