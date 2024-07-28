# Chatbot com GEMINI

Este projeto é um simples chatbot que utiliza a API do Google Gemini para processar entradas de texto e retornar respostas geradas pela IA. A interface é feita em HTML e a lógica de comunicação com a API é implementada em JavaScript.

## Estrutura do Projeto

### HTML
O arquivo HTML define a estrutura da interface do chatbot.

### JavaScript
O arquivo JavaScript contém a lógica para se comunicar com a API do Gemini e atualizar a interface do usuário com a resposta.

```
import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY
const API_KEY = "YOUR_API_KEY";

// Access your API key
const genAI = new GoogleGenerativeAI(API_KEY);

// For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function run() {
    const prompt = document.getElementById('message-input').value;
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    document.getElementById('result').innerHTML = text;
}

const button = document.getElementById('send-button');
button.addEventListener('click', run);

```

## Como Executar
1- Obtenha uma chave de API do Google Generative AI:
- Acesse Google Cloud Console.
- Crie um novo projeto ou selecione um projeto existente.
- Habilite a API do Google Generative AI.
- Crie uma chave de API e copie-a.

2- Configure sua chave de API no JavaScript:
- Substitua YOUR_API_KEY pela sua chave de API no arquivo script.js.
  
3- Abra o arquivo HTML no navegador:
- Você pode abrir diretamente o arquivo index.html no seu navegador ou usar um servidor local para servir os arquivos.
  
## Conclusão
Este projeto fornece uma base para a criação de um chatbot usando a API do Google Generative AI. Ele demonstra como integrar a API em uma aplicação web simples e atualizar dinamicamente o conteúdo da página com respostas geradas pela IA.

## Contribuição 

Este é um projeto de código aberto, então sinta-se à vontade para contribuir com sugestões, correções de bugs ou até mesmo novas funcionalidades. Todas as contribuições são bem-vindas!

## Licença 

Este projeto está licenciado sob a Licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

---
