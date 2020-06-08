FROM node:lts-alpine3.10 as base


FROM base as dependencies
WORKDIR /dependencies
COPY ["src/package.json", "src/yarn.lock", "./"]
RUN yarn --prod

FROM base as build
WORKDIR /build
COPY src .
RUN yarn && \
    yarn run build

FROM base as final
WORKDIR /usr/app
COPY src/tsconfig.json .
COPY --from=dependencies /dependencies .
COPY --from=build ./build/dist .
EXPOSE 5000
CMD [ "npm", "start" ]
