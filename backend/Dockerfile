FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci 

COPY . .

RUN npx prisma generate
RUN npx typedoc
RUN npm run build

RUN npm prune --omit=dev

FROM node:20-alpine 

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
