import React from 'react'

const App = () => {
  const [comments, setComments] = React.useState(['1'])
  const [input, setInput] = React.useState('1')
  const inputElement = React.useRef()

  function handleClick(){
    setComments([...comments, input])
    setInput('')
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {comments.map(comment => <li key={comment}>{comment}</li>)}
      </ul>

      <input type='text' value={input} onChange={({target}) => setInput(target.value)}/>
      <br/>
      <button onClick={handleClick} ref={inputElement}>Enviar</button>
    </div>
  )
}

export default App;
