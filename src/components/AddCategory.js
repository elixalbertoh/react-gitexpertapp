import React, { useState } from 'react';
import Proptypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    //const [setCategories] = props;
    const [seriex, setSeriex] = useState("");
    const handleInputChange = (e) => {
        setSeriex(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(seriex.trim().length > 2){
            setCategories(series => [ seriex, ...series ]);
            setSeriex("");
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={seriex}
                    onChange={handleInputChange}
                    placeholder="Introduce la seríe a agregar"
                />
                <button>Agregar</button>
            </form>
        </div>
    )

}

export default AddCategory;

AddCategory.propTypes = {
    setCategories: Proptypes.func.isRequired
}