import React from 'react'

interface Props {
    id: string;
    name: string;
    is: boolean;
    allergenics?: any;
}

const Products = ({id, name, is, allergenics}: Props) => {
    
    //const names = [
    //    {"id": "Soja, Crustáceos, Pescado, Huevos, Gluten, Sésamo, Moluscos"},
    //    {"id": "Soja, Crustáceos, Pescado, Gluten, Sésamo, Moluscos"},
    //    {"id": "Gluten"},
    //    {"id": "Mostaza, Soja, Lácteos, Pescado, Gluten"},
    //    {"id": "Pescado, Huevos, Gluten"},
    //    {"id": "Sulfitos, Lácteos, Huevos, Gluten"},
    //    {"id": "Sulfitos"},
    //    {"id": "Soja, Lácteos"},
    //    {"id": "Soja, Lácteos, Huevos"},
    //]

    return(
        <div>
            { is === false ?
                <div>
                    <h2>{id}</h2>
                    <h2>{name}</h2>
                </div>
                :
                <div>
                    <h2>{id}</h2>
                    <h2>{name}</h2>
                </div>
            }
            
        </div>
        
    )
}  

export default Products