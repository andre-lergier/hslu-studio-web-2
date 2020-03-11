## Docker
Configuration tutorial: https://www.digitalocean.com/community/tutorials/how-to-secure-a-containerized-node-js-application-with-nginx-let-s-encrypt-and-docker-compose

#### run just node image
```zsh
docker build -t node-socket-io . #image dockerfile wird aufgerufen und image erhält namen node-socket-io
docker images #show all images
docker run --name node-socket-io -p 8080:3000 node-socket-io #container wird gestartet; gegen aussen auf port 8080, gegen innen auf port 3000
docker ps # show all running images
docker system prune # restart all
docker system prune -a
```

##### Stop container
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

Generate key pair
```zsh
ssh-keygen -t rsa -b 4096 -C "andre@lergier.ch"
```

Key anzeigen
```zsh
cat ~/.ssh/id_rsa.pub 
```

### SSH-Verbindung aufbauen
```zsh
ssh root@167.172.188.13
```
Enter passphrase for key

### init vm
- install docker
```zsh
apt install docker.io
apt install docker-compose
```
if this doesn't work: https://docs.docker.com/install/linux/docker-ce/ubuntu/

### start docker
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

Rebuild just the certbot
```zsh
docker-compose up --force-recreate --no-deps certbot
```

Stop a specific service / container
```zsh
docker-compose stop webserver
```

### Initialize HTTPS
Nur auf dem Server:
```zsh
sudo openssl dhparam -out /root/hslu-studio-web-2/dhparam/dhparam-2048.pem 2048
```