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

If you want to use **docker-compose**, just build the container and put this code into your *docker-compose.yml*:
```
vps-manager-bot:
    build: ./manager-bot/
    image: vps-manager-bot
    container_name: manager-bot-container
    restart: always
```


### Supervisor
If you want to use **supervisor** as daemon manager, copy the *vps-manager-bot.conf* file inside supervisor's *conf.d* directory and change the file with correct values.

# Updates

When bot sources are updated, you have just to rebuild the image with `docker build . -t vps-manager-bot` and restart the container (if you use **docker-compose** type `docker-compose up`)