import React from 'react'
import Produto from './Produto';

const App = () => {

  // Os links abaixo puxam dados de um produto em formato JSON
  // https://ranekapi.origamid.dev/json/api/produto/tablet
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // Crie uma interface com 3 botões, um para cada produto.
  // Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
  // Mostre apenas um produto por vez
  // Mostre a mensagem carregando... enquanto o fetch é realizado

  //Primeiro de tudo, se é um dado que é modificado, devemos utilizar o useState

  const [data, setData] = React.useState(null);
  const [load, setLoad] = React.useState(null);

  async function handleClick(event){
    setLoad(true)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    const json = await response.json()
    setData(json)
    setLoad(false)
  }

  return (
    <div>
      <button onClick={handleClick} style={{margin: '5px'}}>notebook</button>
      <button onClick={handleClick} style={{margin: '5px'}}>smartphone</button>
      <button onClick={handleClick} style={{margin: '5px'}}>tablet</button>
      {load && <p>Carregando...</p>}
      {!load && data && <Produto data={data}/>}
    </div>
  )
}

export default App;
