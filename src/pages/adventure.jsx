import React from 'react';
import './Adventure.css'
import AdventureCard from '../../Components/AdventureCard/AdventureCard';
import AdventureCardGroup from '../../Components/AdventureCardGroup/AdventureCardGroup';

const Adventure = () => {
  return (
    <div className='adventure_container'>
      <h1>Explore all adventures</h1>
      <h3>Here's a list of places that you can explore in city</h3>
      <hr></hr>
      <div className='adventure_filter'> 
        <div>Filters:</div>
    
        <div>
        <select>
            <option disabled>Filter by duration</option>
            <option value="0-2hours">0-2 Hours</option>
            <option value="2-6hours">2-6 Hours</option>
            <option value="6-12hours">6-12 Hours</option>
            <option value="12+hours">12+ Hours</option>
          </select>

          <span>Clear</span>
        </div>

        <div>
          <select>
            <option disabled>Add Category</option>
            <option value="cycling">Cycling</option>
            <option value="hill-side-gateway">Hill Side Gatway</option>
            <option value="serene-beaches">Serene Beaches</option>
            <option value="party-spot">Party Spot</option>
          </select>

          <span>Clear</span>
        </div>
      </div>

      <AdventureCardGroup/>
    </div>
  )
}

export default Adventure