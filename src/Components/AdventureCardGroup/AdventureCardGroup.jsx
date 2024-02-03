import React, { useEffect, useState } from 'react'
import AdventureCard from '../AdventureCard/AdventureCard';
import './AdventureCardGroup.css';
import { useParams } from 'react-router-dom';

const AdventureCardGroup = () => {

    const [adventureData, setAdventureData] = useState([]);

    let {city} = useParams()

    const fetchData = async() => {
        let response=await fetch(`https://makemytrip-backend-w2d2.onrender.com/adventures?city=${city}`);
        response=await response.json();
        setAdventureData(response)
    }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className='adventure_card_group_container'>
        {console.log(adventureData)}
        {
            adventureData.map((data)=> <div key={data.id}><AdventureCard {...data}/></div>)
        }
    </div>
  )
}

export default AdventureCardGroup