# vps-manager-bot
Telgram bot which allows to manage a VPS server

# Run
To execute this bot, got to root directory and type
``` bash
docker build . -t vps-manager-bot
```
to create the docker image. To run a container of that image, type
```
docker container run vps-manager-bot <bot_token>
```

If you want to use *docker-compose*, just put this code into your *docker-compose.yml*:
```
vps-manager-bot:
    build: ./manager-bot/
    image: vps-manager-bot
    container_name: manager-bot-container
    restart: always
```

