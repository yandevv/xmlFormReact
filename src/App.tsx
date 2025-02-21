import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  function gerarXML() {
    // Criação do XML
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<usuario xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="dados.xsd">
  <nome>${nome}</nome>
  <email>${email}</email>
</usuario>`;

    // Criar um Blob e permitir o download do XML
    let blob = new Blob([xml], { type: "application/xml" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "dados.xml";
    link.click();
  }

  return (
    <>
      <form
        id="xmlForm"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          style={{ marginBottom: '8px' }}
          onChange={event => setNome(event.target.value)}
          required
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          style={{ marginBottom: '16px' }}
          onChange={event => setEmail(event.target.value)}
          required
        />

        <button type="button" onClick={gerarXML}>Gerar e Enviar XML</button>
     </form>
    </>
  )
}

export default App
