# vps-manager-bot
Telgram bot which allows to manage a VPS server

# Run
To execute this bot, you have to create the docker image starting from the Dockerfile and effectively run the container.

Firstly open the Dockerfile and change the third argument of *ENTRYPOINT* command with the bot token provided by **Bot Father**.  
After that, go to root directory and type
``` bash
docker build . -t vps-manager-bot
docker container run vps-manager-bot
```

If you want to use *docker-compose*, just put this code into your *docker-compose.yml*:
```
vps-manager-bot:
    build: ./manager-bot/
    image: vps-manager-bot
    container_name: manager-bot-container
    restart: always
```

