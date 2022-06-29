FROM cypress/base
WORKDIR /home/app
COPY package.json package-lock.json /home/app/
RUN npm install
COPY . .
