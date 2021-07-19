import React from 'react'
import Produto from './Produto'

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

  const [active, setActive] =  React.useState(0)


  return (
    <div>
     {active && <Produto/>}
      <button onClick={() => setActive(!active)}>{active ? 'Ativo' : 'Inativo'}</button>
    </div>
  )
}

export default App;
