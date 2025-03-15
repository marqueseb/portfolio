# Remove diretórios antigos
Remove-Item -Path "node_modules" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "package-lock.json" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "public/build" -Recurse -Force -ErrorAction SilentlyContinue

# Limpa o cache do npm
npm cache clean --force

# Instala as dependências com flags específicas
npm install --legacy-peer-deps --force

# Instala o vite globalmente
npm install -g vite

# Gera o build
npm run build

Write-Host "Instalação concluída. Execute 'npm run dev' para iniciar o servidor de desenvolvimento."