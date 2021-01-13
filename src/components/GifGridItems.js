import React from 'react';

const estilos = {
    color:"red"
}

const GifGridItem = ({ id, title, url }) => {
    return (
        <div className="card">
            <p style={estilos}>{ title }</p>
            <img src={url} alt={title} />
        </div>
    );
}

export default GifGridItem;