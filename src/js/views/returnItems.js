import React from 'react';
import { Link } from 'react-router-dom';


const ReturnItems = ({ items, type, addToFavorites, getDetails }) => (
 <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' , overflow: 'auto' }}>
  {items.map((item) => (
    <div key={item.uid}>
      <div className="card" style={{width: '18rem;'}}>
        <img src="https://cdn-m-net.dstv.com/images/WidgetBilboard/2020/07/17/788137/14/1594982049-34_Star_Wars__The_Rise_of_Skywalker_Showpage_Billboard_1600_x_800.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.details && item.details.properties && (<p key={item.uid}>{getDetails(item)}</p>)}</p>
          <Link to={`/information/${type}/${item.uid}`}><button className="informationButton">More details</button></Link>
          <button className="rocketButton" onClick={() => addToFavorites(item)} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-star-fill" >
            <path stroke="black" stroke-width="1" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg></button>
        </div>
      </div>
    </div> 
  ))}
 </div> 
);

export default ReturnItems;