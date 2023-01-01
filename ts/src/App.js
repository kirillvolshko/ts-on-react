import React, {useState} from 'react';
import './App.css';
import CardsFoto from './componets/List/CardsFoto';
import Foto from './componets/Foto/Foto';
function App() {
  const [zoomFoto, SetZoomFoto] = useState(false);
  const [Data, SetData] = useState([]);


  return (
    <div className="App">
        <Foto Data={Data} activeZoom={zoomFoto} setZoom={SetZoomFoto}/>
        <CardsFoto  setZoom={SetZoomFoto} Data={SetData}/>
    </div>
  );
}

export default App;
