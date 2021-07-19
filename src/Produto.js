import React from 'react'

const Produto = ({produto}) => {
    const [data, setData] = React.useState(null);
    const [load, setLoad] = React.useState(null);
    React.useEffect(() =>{
        setLoad(true)
        if(produto !== null){
            fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`).then(response => response.json()).then((json) => setData(json))
        }
        setLoad(false)
    }, [produto])

    if(data === null) return null;

    return (
        <div>
            {!load && data && <h1>{data.nome}</h1>}
            {!load && data && <h1>{data.preco}</h1>}
        </div>
    )
}

export default Produto
