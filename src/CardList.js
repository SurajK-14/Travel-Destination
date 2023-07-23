import React, { useState } from 'react';
import Card from './Card';

const CardList = ({destinations}) => {

  //function to expand cards
  const [expandedCards, setExpandedCards,selectedContinent, setSelectedContinent] = useState({});

  const handleCardClick = (cardId) => {
    setExpandedCards((prevExpanded) => ({
      ...prevExpanded,
      [cardId]: !prevExpanded[cardId],
    }));
  };
  // Function to handle continent filter button clicks
  const handleFilterClick = (continent) => {
    setSelectedContinent(continent);
  };

  // Continent filter buttons
  const continentButtons = [
    'Home', // Add a button to show all destinations
    'Africa',
    'Antarctica',
    'Asia',
    'Australia',
    'Europe',
    'North America',
    'South America',
  ];

  // Filter destinations based on the selected continent
  const filteredDestinations = destinations.filter((destination) => {
    return selectedContinent === 'Home' || destination.continent === selectedContinent;
  });

  const cardArray = destinations.map((user,i) =>{
    return <Card 
    key = {i} 
    id = {destinations[i].id} 
    name={destinations[i].name}
    continent= {destinations[i].continent}
    title= {destinations[i].title}
    description={destinations[i].description} 
    season={destinations[i].season} 
    flights={destinations[i].flights}
    isExpanded={expandedCards[destinations[i].id] || false}
    onClick={() => handleCardClick(destinations[i].id)}
    image={destinations[i].src}/>
  })
  return (
    <>
    {cardArray}
    </>
  );
}

export default CardList;