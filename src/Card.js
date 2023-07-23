import React from 'react';

const Card = ({name, continent, season, image, flights, title, description, isExpanded, onClick}) => {
  return (
    <div className='maxw tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5' onClick={onClick}>
      <img alt='Property' src={image}/>
      <div>
        <h2>{name}</h2>
        <p>{continent}</p>
        <p>{season}</p>
      </div>
      {isExpanded && (
        <div className = "card-content">
          <p>{flights}</p>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        )}
    </div>
  );
}

export default Card;