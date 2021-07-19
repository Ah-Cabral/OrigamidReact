import React from 'react'

const App = () => {

  const [count, setCount] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1'])

  function handleClick(){
    setCount((count )=> count + 1)
    setItems((items)=> [...items, 'Item ' + (count + 1)]);
  }

  return (
    <div>
      {items.map(item => <li key={item}>{item}</li>)}
      <button onClick={handleClick}> {count} </button>
    </div>
  )
}

export default App;
