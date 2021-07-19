import React from 'react'

const App = () => {
  const [cart, setCart] = React.useState(0);
  const [notify, setNotify] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick(){
    setCart(cart + 1);
    setNotify('Você adicionou um item ao carrinho');

    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() =>{
      setNotify(null);
    }, 2000);

  }

  return (
    <div>
      <p>{notify}</p>
      <button onClick={handleClick}>Carrinho {cart}</button>
    </div>
  )
}

export default App;
