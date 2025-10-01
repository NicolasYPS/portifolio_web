FROM node:20-alpine

WORKDIR /app

# Habilita Corepack (para pnpm/yarn se quiser, mas usaremos npm)
RUN corepack enable || true

# Copia manifests primeiro (cache de dependências)
COPY app/package.json app/package-lock.json* ./app/

# Instala dependências
RUN cd app && npm install

# Copia o restante do projeto
COPY app ./app

# Exposição da porta do Vite
EXPOSE 5173

# Comando de dev — escuta 0.0.0.0 para acesso via host
CMD ["sh", "-c", "cd app && npm run dev -- --host 0.0.0.0"]
