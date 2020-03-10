# aktuelles node image wird von docker hub geladen
# https://hub.docker.com/_/node/
FROM node:13.10

# directory wird auf geladenem image erstellt
# owner des ordners ist user node
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# neu gemachter app ordner wird betreten
WORKDIR /home/node/app

# alle lokalen package (lock & normal) json files werden ins image kopiert
COPY package*.json ./

# ab jetzt wird user node verwendet
USER node

RUN npm install

# COPY . .
# alle lokalen daten werden ins image kopiert
COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node", "index.mjs" ]
