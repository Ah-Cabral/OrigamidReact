import React from 'react'
import Header from "./Header";
import Home from './Home';
import Produtos from './Produtos';

const App = () => {
  let Pagina = Home;
  const {pathname} = window.location;

  if(pathname === '/produtos'){
    Pagina = Produtos
  }else{
    Pagina = Home
  }
  return (
    <section>
      <Header/>
      <Pagina/>
    </section>
  )
}

export default App;
