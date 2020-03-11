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
```zsh
docker-compose up
```