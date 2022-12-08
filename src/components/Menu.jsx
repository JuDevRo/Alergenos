import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import Products from './Products';
import axios from 'axios'
import Buttons from './Buttons';

const Menu = () => {
    

    const api = axios.create({
        baseURL: 'http://ts.colet.es:51508'
      })
    
    const [menu, setMenu] = useState([])
    const [allerg, setAllerg] = useState([])
    
    async function getAll () {
        const {data} = await api(`/api/MenuType/GetMenuList/esp/52`)
        const res = data["MENÚ SUCCULENT"]
        console.log()
        setMenu(res)
        console.log(menu)
    }

    let info = [
        
    ]
    const ids = ["p02120","p02123","p02100","p02150","p02200","p02205","p02366","p53267","p03025"]

    async function getAllerg (id) {
        const {data} = await api(`/api/Allergenic/GetAllergenic/52/${id}`)
        //const {data} = await api(`/api/Allergenic/GetAllergenic/52/p02120`)
        //console.log(data)
        //console.log(data[`${id} alergens`])
        info.push(data[`${id} alergens`])
        //console.log(data)
        //console.log(info)
        //console.log(info[0][0].name)
        //console.log(info[0].flat(4))
        setAllerg(info)
        //const res = data["P02120 alergens"]
        //info.push(data)
        //console.log(res[0].name)
        //console.log(info)
        //setAllerg(res)
        //console.log(allerg)
    }
    console.log(allerg)

    useEffect(() => {
        getAll()
        getAllerg("P02120")
        getAllerg("P02123")
        getAllerg("P02100")
        getAllerg("P02150")
        getAllerg("P02200")
        getAllerg("P02205")
        getAllerg("P02366")
        getAllerg("P53267")
        getAllerg("P03025")
    }, [])

    const alle = useSelector((state) => state.alle)
    console.log(alle)

    console.log(menu)
   
    

    return(
        <div>
            <Buttons />
            <div>
                { alle === true ? 
                 <div> <h2>Con Alergenos</h2>
                    {menu.map((m) => (
                    <Products id={m.idProduct} name={m.productDescription} key={m.idProduct} is={alle} />
                    ))}
                 </div> : 
                 <div> <h2>Sin Alergenos</h2>
                    {menu.map((m) => (
                    <Products id={m.idProduct} name={m.productDescription} key={m.idProduct} is={alle} />
                    ))}
                </div>
                }
            </div>
        </div>
    )
}

export default Menu