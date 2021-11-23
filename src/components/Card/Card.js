import React from 'react'
import style from "./Card.module.css"
const Card = ({results}) => {
    let display ;

    if(results)
    {
    
        
    display = results.map(function(x){
        let {id,name,image,location,status} = x
        return (<div key={id} className="col-4 position-relative" >
            <div className={style.Card}>
                <img src={image} className="img-fluid" alt=""/>
                <div  className={`${style.pad} content`}>
                   <div className="fs-5 mb-2 mt-2" >{name}</div>
                   <div className="">
                       <div className="fs-6 ">Last Location</div>
                       <div className="fs-5">{location.name}</div>
                   </div>
                </div>
                   </div>
                   <div className={`${style.badge } position-absolute badge bg-danger`}>{status}</div>
                   </div>
                   )
    })
    
    }
    else{
        display = "search not found :("
        
    }
    return (<>{display}</>)

}

export default Card
