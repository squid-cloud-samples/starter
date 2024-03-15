# Getting Started with Squid Cloud: A Simple Application Project

This template provides a minimal setup for a [Squid Cloud](https://squid.cloud) powered application based on the [Vite](https://vitejs.dev/) counter sample application.

## Prerequisites

For this project you will need:

- NodeJS v18 or later.
- [Vite](https://vitejs.dev/).
- A Squid Cloud account and a Squid application created. (Go to [Squid Cloud Console](https://console.squid.cloud) to signup and create one if you haven't already).
- Squid Cloud CLI (`npm i @squidcloud/cli`).


## Environment Configuration

### Setting Up Your `.env` File

After cloning this project, go to [Squid Cloud Console](https://console.squid.cloud), create an application (if haven't done it already) and click on the `Create .env file` button under `Backend project` that will provide you the command to create required `.env` file for this template to work and run it as following

```bash
$ cd backend
$ squid init-env \
 --appId <appId> \
 --apiKey <apiKey> \
 --environmentId <environmentId> \
 --squidDeveloperId <squidDeveloperId> \
 --region <region>
```

### Finalizing Setup

Complete the environment setup with the following steps, ensuring you're in the `backend` directory:

```bash
$ npm run copy-squid-dotenv
> backend@0.0.1 copy-dotenv-file

File was copied successfully
```

This command prepares your `.env` file for the Vite environment by generating a `frontend/.env.local` file.

## Running the application

### Starting the local Backend Server

To launch the local backend server of your Squid application, run:

```bash
$ cd backend
$ squid start
```

You'll see output similar to the following, indicating that your server is up and running:

```bash
> nodemon --watch ./src --exec ts-node -r tsconfig-paths/register src/main.ts
[Nest] 68047  - 03/15/2024, 7:55:23 PM     LOG [NestApplication] Nest application successfully started +1ms
```

### Launching the Frontend Server

In a separate terminal, initialize the frontend server by navigating to the frontend directory and running:

```bash
$ cd frontend
$ npm run dev
```

Verify that Vite server has started, providing URLs to access your app:

```bash
  VITE v5.1.6  ready in 149 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Exploring Your Squid Application

With both servers running, visit [http://localhost:5173/](http://localhost:5173/) in your web browser. You're now ready to experiment with the count button and explore the functionalities of your Squid Cloud application.


### Resetting The Counter

The Squid application in this project also introduces a webhook that can be used to reset the counter. The webhook full URL from your local environment should be displayed in the output of the `squid start` command (used to start the local Backend Server). Simply accessing that URL will reset the counter.

