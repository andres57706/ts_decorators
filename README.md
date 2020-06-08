# Decorators test

This repo it's a test using decorator for controllers and middlerwares in a simple express js application

this express application uses the @overnightjs/core npm package in order to achieve this

to start the app you can use the dev script (requires ts-node)

```
$ npm install
$ npm run dev
```

or you can also build the project and then run

```
$ npm run build
$ npm run start
```

or also you could run a container  andthe server will be listening on container's port 5000

```
$ docker build --rm -t decorators -f docker/Dockerfile .
docker run --rm -p 8080:5000 decorators:latest
```