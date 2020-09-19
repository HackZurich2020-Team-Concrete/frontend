FROM node:13-alpine

WORKDIR /app

# Add the package.json and yarn.lock first for better caching.
COPY package.json yarn.lock ./

# Install the dependencies using the lockfile.
RUN yarn install --frozen-lockfile

EXPOSE 3000

ENV HOST="0.0.0.0"
ENV NODE_ENV=development
ENV CI=true

CMD ["yarn", "run", "start"]
