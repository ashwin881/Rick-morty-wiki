
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState,useEffect } from 'react'

import Card from "./components/Card/Card";

import Filter from "./components/Filter/Filter";


function App() {

 
  let [pgno,setpgno] = useState(1);
  let [fetcheddata,updatedata] = useState([]);
  let { info,results} = fetcheddata;
  let api = `https://rickandmortyapi.com/api/character/?page=${pgno}`;
  
  useEffect(()=>{
(async function (){
   let data = await fetch(api).then(res=>res.json());
   console.log(data);
   updatedata(data);
})()
  
  },[api])
  return (
    <div className="App">
      
      <h1 className="text-center ubuntu my-4">Rick & Morty <span className="text-danger">  Wiki</span></h1>
      <div className="container">
        <div className="row">
        <div className="col-3"><Filter/></div>
        <div className="col-8">
          <div className="row">
            
            <Card results={results} />
            
          </div>

        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
