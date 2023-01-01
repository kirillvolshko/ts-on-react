import React, { useEffect, useState } from 'react'
import { FOTO_API_KEY } from '../../services/api'
import "./CardsFoto.css"
function CardsFoto({ID,setZoom, Data}) {
    const [Foto, SetFoto] = useState([])
    const [CorrectData, SetCorrectData] = useState([])
    useEffect(()=> {
        const fetchFoto = async()=> {
        const request = await fetch(
            `https://api.unsplash.com/photos/?client_id=${FOTO_API_KEY}`
        )
        const FotoData = await request.json()
        SetFoto(FotoData)
        console.log(FotoData)
        }
        fetchFoto()
    },[])
    const handleClick =(id) =>{
        setZoom(true)
        const fetchID = async()=> {
          Data(Foto.filter((items)=>items.id===id))
        }
       fetchID()
       
       console.log(Data)
        
    }
  return (
    <div className='content'>
      
        <div className='fotos-content'>
            {Foto.map((foto) =>(
                <div className='cards'
                key={foto.id}>
                  
                  <img onClick={()=>handleClick(foto.id)} className="foto" src={`${foto.urls.small}`} alt="foto"/>
                  <p className={foto.alt_description ? 'description' : "description-none"}>{`${foto.alt_description}`}</p>
                  <p className="author">Аuthor: {foto.user.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CardsFoto