# Project VOICE

Project VOICE is an experimental software developed as a communication support tool using generative AI for people who have difficulty in vocalizing and / or typing due to disabilities.

This software uses generative AI to predict possible words and sentences that might be implied by the user’s input. The user can select a suggested word or sentence using accessibility features such as eye tracking and / or switch access. We aim to enable users to input longer sentences in fewer steps than other input methods.

![Demo animation](/demo_hamburger.gif)

<!--- TODO: Add a link to the external promotion page. -->

## Local Deployment

Ensure you have configured SSH key to development Project VOICE in github (see
[here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)).

```shell
$ git clone git@github.com:project-voice-buu/project-voice.git
$ cd project-voice
```

### Build

You can choose either run directly on your Linux machine or run inside docker.

#### Run on host machine directly

1.  Install packages needed

    ```
    $ sudo apt-get install -y nodejs python3 python3-pip python3-venv
    ```

2.  Set up Python venv

    ```shell
    $ cd project-voice
    $ python3 -m venv .venv
    $ source .venv/bin/activate
    ```

3.  Set up node.js environment and install python packages

    ```
    $(.venv) npm install && npm run build
    ```

4.  Run server

    ```shell
    $(.venv) python3 main.py
    ```

#### Run inside docker

With the help of docker, the container has packaged all the environment needed
to run the Project VOICE. You can quick run a demo or develop the project by
running a docker container.

**Note: Please ensure you have docker successfully installed.**

1. Build project-voice docker image

    *Note: It may take several minutes to build a docker image, depending on your network status.*

    ```shell
    $ docker build -f docker/Dockerfile -t project-voice .
    ```

2. Start a container

    a. Interaction Mode

    ```shell
    $ docker run -i -t --rm -p 5000:5000 --name voice project-voice
    ```
    
    - You can see the logs in console directly, use Ctrl + C to exit.

    b. Detached Mode

    ```shell
    $ docker run -d --rm -p 5000:5000 --name voice project-voice
    ```
    
    -   use `docker stop voice` to exit
    -   use `docker logs -f voice` to check logs

### Access web page

You should be able to see the content by opening http://localhost:5000. But the
access of LLM API is not configured yet in this guide. See below on how to access local LLM.

## Run with local LLM

The following guide shows how to use docker to run project-voice together with
ollama to make project-voice have accessibility of local LLM.

1.  Setup a new docker network bridge (only once)

    This is used for the network communication between project-voice and ollama

    ```shell
    $ docker network create --subnet=192.168.88.0/24 voice_bridge
    ```

2.  Run ollama

    ```shell
    $ docker run -d --name ollama \
      --network=voice_bridge --ip=192.168.88.3 -p 11434:11434 \
      -v ollama:/root/.ollama \
      ollama/ollama
    ```

3.  Download model file (only once)

    Use this only after ollama container is running.

    ```shell
    $ docker exec -it ollama ollama pull gemma3:4b
    ```

4.  Run project-voice

    ```shell
    $ docker run -it --rm --name voice \
      --network=voice_bridge --ip=192.168.88.2 -p 5000:5000 \
      -e OPENAI_BASE_URL="http://192.168.88.3:11434/v1" \
      -e OPENAI_API_KEY="ollama" \
      project-voice
    ```

5.  Open http://localhost:5000 on your host machine, and have a try!

## Experimental: use docker-compose to run with local LLM

Install docker-compose if you haven't

```shell
$ sudo apt-get install docker-compose
```

Then, use this single command to run project-voice and ollama.

```
docker compose -f docker/docker-compose.yml up
```

## Storybook

You can spin up the [Storybook](https://storybook.js.org/) server by running `npm run storybook`.
This is helpful for UI component development by providing isolation from the app context.

## Notice
Please avoid entering potentially sensitive or personally identifiable information (PII) into this application.

## Disclaimer

This is not an officially supported Google product. This project is not eligible for the [Google Open Source Software Vulnerability Rewards Program](https://bughunters.google.com/open-source-security).

This project is intended for demonstration purposes only. It is not intended for use in a production environment.

## Contributors

This project exists thanks to all the people who have contributed.

- Adriana Guevara Rukoz
- Atsuko Yamagami
- Atsushi Yamashita
- Ayush Agarwal
- Daisuke Chijiwa
- Jason Zhang
- Johnny Huang
- Kevin Chang
- Satoru Arao
- Shuhei Iitsuka
- Subhashini Venugopalan
- Tomoki Oinuma
- Yasuaki Takebe
- Yu-Sheng Li

<!--- TODO: Revisit this section. -->
