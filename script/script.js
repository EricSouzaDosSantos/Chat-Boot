import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY
const API_KEY = "AIzaSyBOhUYzGh0eQHCNtBrzWFf4nNvzktkzZ4g"

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

// For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function run() {
    const prompt = document.getElementById('message-input').value
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    document.getElementById('result').innerHTML = text
  }

  const button = document.getElementById('send-button')
  button.addEventListener('click', run)
  
