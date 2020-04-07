# Multi-Screen Ball Animation
This is project I did in the course __Studio Web & Mobile Design 2__ in my Digital Ideation studies at Lucerne University of Applied Science and Arts HSLU.

The target was to create an animation which runs over several screens/devices. To achieve this, the clients are connected to the server over WebSockets.
The main tools I used for this Project are [Socket.io](https://socket.io/), [Node.js](https://nodejs.org/en/), [WebPack](https://webpack.js.org/) and [Docker](https://www.docker.com/).

My focus in this project was to create a user interface, which allows users to handle the connected devices easily. Furthermore it was important to me to build a clean architecture and hosting environment.

![Screencast](/assets/screencast-gif.gif "Screencast")

### Architecture
![Architecutre Diagram](/assets/server-architektur.png "Architecutre Diagram")

### Sequence Diagram
The following diagram visualizes all important events, which are sent trough websockets.
![Sequence Diagram](/assets/sequenzdiagramm.png "Architecutre Diagram")

## Available Scripts
### `npm run watch`
Use in __development mode__:
Triggers webpack to watch the files and starts node server with nodemon (runs `npm run start`).

### `npm run build`
Builds the app with webpack and create files in 'dist' folder.

### `npm run buildStart`
Use in __production mode__:
Builds the app and starts the node server (runs `npm run build` and `node index.mjs` afterwards). To view the page, open http://localhost:3000.

### `npm run start`
Starts node server. To view the page, open http://localhost:3000.

### `npm run dev`
Starts node server with nodemon in devmode. To view the page, open http://localhost:3000.

## Links

### API references
- HTML Drag and Drop API: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
  - DataTransfer getData: https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/getData
- Pointer Events: https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events
- RequestAnimationFrame: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  - Tutorial: https://www.mediaevent.de/javascript/requestAnimationFrame.html

### Diverses
- Drag and Drop Tutorial: https://www.html5rocks.com/de/tutorials/dnd/basics/
- Pointer Events: https://patrickhlauke.github.io/touch/tracker/multi-touch-tracker-pointer-hud.html
- Sortable.js: https://github.com/SortableJS/Sortable
- Heroku deploy Subdirectory: https://github.com/timanovsky/subdir-heroku-buildpack
- Matter JS: https://brm.io/matter-js
- Shopify Draggable: https://shopify.github.io/draggable/examples/

### Webpack
##### Loaders:
- babel-loader: https://webpack.js.org/loaders/babel-loader/
- sass-loader: https://webpack.js.org/loaders/sass-loader/
- MiniCssExtractPlugin: https://webpack.js.org/plugins/mini-css-extract-plugin/
- postcss-loader: https://github.com/postcss/postcss-loader
  - Autoprefixer: https://github.com/postcss/autoprefixer

# Docker
I use docker to handle all the stuff on my [DigitalOcean](digitalocean.com)-Server.
- [Configuration tutorial](https://www.digitalocean.com/community/tutorials/how-to-secure-a-containerized-node-js-application-with-nginx-let-s-encrypt-and-docker-compose)
- [Another nice tutorial](https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker)


## Docker installation and useful commands
The following part can be ignored, these are just useful commands about docker for myself.

---

#### Run just node image
```zsh
docker build -t node-socket-io . #image dockerfile wird aufgerufen und image erhält namen node-socket-io
docker images #show all images
docker run --name node-socket-io -p 8080:3000 node-socket-io #container wird gestartet; gegen aussen auf port 8080, gegen innen auf port 3000
docker ps # show all running images
docker system prune # restart all
docker system prune -a
```

#### Stop container
Show all running containers
```zsh
docker ps #fdd49939c22d
```

```zsh
docker stop fdd49939c22d
```

```zsh
docker system prune -a
```

### SSH Key generieren
```zsh
cd ~/.ssh
ls
```
```zsh
ls -al ~/.ssh
```

#### Generate key pair
```zsh
ssh-keygen -t rsa -b 4096 -C "andre@lergier.ch"
```

#### Key anzeigen
```zsh
cat ~/.ssh/id_rsa.pub 
```

### SSH-Verbindung aufbauen
```zsh
ssh root@167.172.188.13
```
Enter passphrase for key

### Initialize VM
I use an Ubuntu VM on [DigitalOcean](https://m.do.co/c/404a0f0fcd1d). 

#### Install docker
```zsh
apt install docker.io
apt install docker-compose
```
if this doesn't work: https://docs.docker.com/install/linux/docker-ce/ubuntu/

### Use docker-compose
To start the webserver simply run the following command on the root directory of the git repo on the server.
```zsh
docker-compose up
```

To hide all Logs, add the flag -d
```zsh
docker-compose up -d
```

Check status:
```zsh
docker-compose ps
```

This should look like this:
```zsh
  Name                 Command               State          Ports       
------------------------------------------------------------------------
certbot     certbot certonly --webroot ...   Exit 0                     
nodejs      docker-entrypoint.sh npm r ...   Up       3000/tcp          
webserver   nginx -g daemon off;             Up       0.0.0.0:80->80/tcp
```

Show logs for a specific service:
```zsh
docker-compose logs certbot
```

Check that your credentials have been mounted to the webserver container
```zsh
docker-compose exec webserver ls -la /etc/letsencrypt/live

# Output
drwx------    3 root     root          4096 Mar 11 09:47 .
drwxr-xr-x    9 root     root          4096 Mar 11 09:50 ..
-rw-r--r--    1 root     root           740 Mar 11 09:47 README
drwxr-xr-x    2 root     root          4096 Mar 11 09:47 studio-web-2.hslu.lergier.ch
```

Rebuild just one image (in this case certbot)
```zsh
docker-compose up --force-recreate --no-deps certbot
```

Stop a specific service / container
```zsh
docker-compose stop webserver
```

Build images, doesn't start the containers
```zsh
docker-compose build
```

Build images if images do not exist, then start the containers
```zsh
docker-compose up
```

Build all images, even if they exist, then starts the containers
```zsh
docker-compose up --build
```

### Initialize HTTPS
Only on Server:
```zsh
sudo openssl dhparam -out /root/hslu-studio-web-2/dhparam/dhparam-2048.pem 2048
```

### Renew SSL
Commands to run on VM
```zsh
chmod +x ssl_renew.sh
```

```zsh
sudo crontab -e
```

To generate the repeat time, check this [fancy time repeat generator](https://crontab.guru/#0_0_*_*_*)
```zsh
*/2 * * * * /root/hslu-studio-web-2/ssl_renew.sh >> /var/log/cron.log 2>&1
```

Later change to `0 0 * * *`. This runs the `.sh` script every day at 00:00:
```zsh
0 0 * * * /root/hslu-studio-web-2/ssl_renew.sh >> /var/log/cron.log 2>&1
```
