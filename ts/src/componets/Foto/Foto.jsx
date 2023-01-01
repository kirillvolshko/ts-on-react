import React, { useEffect, useState} from 'react'
import "./Foto.css"
function Foto({activeZoom,setZoom, Data}) {
 
    const handleClick =() =>{
        setZoom(false)
        
    }
 console.log(Data)
  return (
       
   <div className={activeZoom?"foto-page active":'foto-page'} onClick={()=>setZoom(false)}>
   
    
            {Data.map((foto) => (
                <div className='card'
                key={foto.id} onClick={e=>e.stopPropagation()}>
                  
                  <img onClick={handleClick} className="full-foto" src={`${foto.urls.regular}`} alt="foto"/>
                
                </div>
            ))}
 
    
    </div> 
    
  )
}

export default Foto