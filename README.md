# Mensagens de Fé

Site estático em HTML, CSS e JavaScript puro.

## Arquivos
- `index.html`: estrutura da página.
- `styles.css`: identidade visual responsiva.
- `app.js`: mensagens de exemplo, busca, filtros, versículo diário e compartilhamento via WhatsApp.

## Como executar
1. Extraia o ZIP.
2. Abra `index.html` no navegador. Para uma experiência local mais consistente, use a extensão Live Server no VS Code ou rode `python -m http.server 8000` dentro da pasta e visite `http://localhost:8000`.
3. O site não precisa de build, Node.js nem banco de dados.

## Como publicar gratuitamente
### GitHub Pages
1. Crie um repositório no GitHub.
2. Envie `index.html`, `styles.css` e `app.js` para a raiz do repositório.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**, escolha `main` e `/ (root)` e salve.
5. Aguarde a publicação e abra o endereço informado pelo GitHub Pages.

### Netlify (alternativa)
1. Entre em Netlify e crie um site novo por deploy manual.
2. Arraste a pasta que contém os três arquivos para a área de deploy.
3. Use o endereço fornecido pelo Netlify ou configure um domínio próprio.

## Personalização
- Edite o array `messages` no início de `app.js` para acrescentar ou alterar mensagens.
- Edite o array `verses` para atualizar a seleção de versículos do dia.
- Ajuste as cores e estilos em `styles.css`, na seção `:root`.
- Troque os links de redes sociais no bloco `#comunidade` de `index.html` pelos perfis oficiais do projeto.
- A imagem de fundo usa uma imagem remota do Unsplash e as fontes usam Google Fonts; para funcionar sem internet, substitua esses recursos por arquivos locais.

## Observações importantes
- O “versículo do dia” escolhe automaticamente um item de uma lista local, por data. Não consulta uma API bíblica nem atualiza o texto por serviço externo.
- O botão “Ler mensagem” mostra um resumo/aviso com o texto completo; para páginas individuais, pode-se adicionar uma rota ou modal.
- O formulário de cadastro por e-mail não foi incluído; o site mantém um convite para compartilhar conteúdo, sem coletar dados pessoais.
- Links sociais são exemplos genéricos. Atualize-os antes de publicar.
