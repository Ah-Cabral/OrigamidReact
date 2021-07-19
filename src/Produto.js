import React from 'react';

const Produto = ({ data }) => {
    return (
        <div>
            <h1>{data.nome}</h1>
            <h2>R${data.preco}</h2>
            <img src={data.fotos[0].src} alt='imagem'></img>
        </div>
    );
};

export default Produto;