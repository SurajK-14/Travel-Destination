import React, { useState } from 'react';
import './Navbar.css';
import SearchBox from './SearchBox';
import { destinations } from './destination';
import CardList from './CardList';


class Navbar extends React.Component{

  constructor(){
      super()
      this.state={
        destinations: destinations,
        searchfield: '',
        selectedContinent: ''
      }
    }

    onSearchChange= (event)=> {
      this.setState({searchfield: event.target.value})
    }

    handleFilterClick = (continent)=> {
      this.setState({selectedContinent: continent})
    }

    render(){
      const {searchfield, selectedContinent} = this.state

      const filteredDestinations = this.state.destinations.filter(destinations=> {
        return(
          destinations.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) &&
          (selectedContinent === '' || destinations.continent === selectedContinent)
        )
      })
    
       return (
      <div>
        <nav classname='questionbox'>
          <ul className="descrip">
            <p> Welcome to our travel destination website, your ultimate guide to exploring the world's most captivating locations! Whether you're an adventure seeker, a culture enthusiast, or simply in need of a relaxing getaway, we've got you covered. Discover breathtaking landscapes, immerse yourself in vibrant cultures, and create unforgettable memories. From the sun-kissed beaches of Bali to the historical wonders of Rome, our curated list of destinations offers something for every traveler. Find the best season to visit, book your flights hassle-free, and embark on the journey of a lifetime. Let your wanderlust take flight with us!</p>
          </ul>
        </nav>
        <div className='question'>
          <h1>Where to next?</h1>
        </div>
          <nav className="navbar">
              <ul className="navbar-links">
                  <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 home'>
                  <a href="/">Home</a>
                  </li>
                  <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 africa'
                  onClick={() => this.handleFilterClick('Africa')}>
                  <a href="/">Africa</a>
                  </li>
                  <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 antarctica'
                  onClick={() => this.handleFilterClick('Antarctica')}>
                  <a href="/">Antarctica</a>
                  </li>
                  <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 asia'
                  onClick={() => this.handleFilterClick('Asia')}>
                  <a href="/">Asia</a>
                  </li>
                  <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 australia'
                  onClick={() => this.handleFilterClick('Australia')}>
                  <a href="/">Australia</a>
                  </li>
                  <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 europe'
                  onClick={() => this.handleFilterClick('Europe')}>
                  <a href="/">Europe</a>
                  </li>
                  <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 north america'
                  onClick={() => this.handleFilterClick('North America')}>
                  <a href="/">North America</a>
                  </li>
                  <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 south-america'
                  onClick={() => this.handleFilterClick('South America')}>
                  <a href="/">South America</a>
                  </li>
              </ul>
          </nav>
          <nav className='searchbox'>
                  <SearchBox searchChange={this.onSearchChange}/>
          </nav>
          <CardList destinations = {filteredDestinations}/> 
      </div>
  );
}
}

export default Navbar;





// import React, { useState } from 'react';
// import './Navbar.css';
// import SearchBox from './SearchBox';
// import { destinations } from './destination';
// import CardList from './CardList';


// class Navbar extends React.Component{

//   constructor(){
//       super()
//       this.state={
//         destinations: destinations,
//         searchfield: ''
//       }
//     }

//     onSearchChange= (event)=> {
//       this.setState({searchfield: event.target.value})
//     }

//     render(){
//       const filteredDestinations = this.state.destinations.filter(destinations=> {
//         return destinations.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
//       })
    
// // const [selectedContinent, setSelectedContinent] = useState("");
// //       //   // Functsion to handle continent filter button clicks
// //   const handleFilterClick = (continent) => {
// //     setSelectedContinent(continent);
// //   };

// // //   // Filter destinations based on the selected continent
// //   const filteredContinent = destinations.filter((destination) => {
// //     return selectedContinent === 'Home' || destination.continent === selectedContinent;
// //   });

//        return (
//       <><div className="navbar-descrip">
//            <p> Welcome to our travel destination website, your ultimate guide to exploring the world's most captivating locations! Whether you're an adventure seeker, a culture enthusiast, or simply in need of a relaxing getaway, we've got you covered. Discover breathtaking landscapes, immerse yourself in vibrant cultures, and create unforgettable memories. From the sun-kissed beaches of Bali to the historical wonders of Rome, our curated list of destinations offers something for every traveler. Find the best season to visit, book your flights hassle-free, and embark on the journey of a lifetime. Let your wanderlust take flight with us!</p>
//          </div><div>
//              <nav className="navbar">
//                <ul className="navbar-links">
//                  <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 home'>
//                    <a href="/">Home</a>
//                  </li>
//                  <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 africa'>
//                    <a href="/">Africa</a>
//                  </li>
//                  <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 antarctica'>
//                    <a href="/">Antarctica</a>
//                  </li>
//                  <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 asia'>
//                    <a href="/">Asia</a>
//                  </li>
//                  <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 australia'>
//                    <a href="/">Australia</a>
//                  </li>
//                  <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 europe'>
//                    <a href="/">Europe</a>
//                  </li>
//                  <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 north america'>
//                    <a href="/">North America</a>
//                  </li>
//                  <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 south-america'>
//                    <a href="/">South America</a>
//                  </li>
//                </ul>
//              </nav>
//              <nav className='searchbox'>
//                <SearchBox searchChange={this.onSearchChange} />
//              </nav>
//              <CardList destinations={filteredDestinations} />
//            </div></>
//   );
// }
// }

// export default Navbar;

// //              <div className="navbar-logo">
// //<img alt='Compass Compass' src='../images/cc-logo.png'/>
// //</div>














// `
// const Navbar = () => {
//   const [selectedContinent, setSelectedContinent] = useState('Home'); // State to track the selected continent
//   const [searchfield, setSearchfield] = useState('');

//   const onSearchChange = (event) => {
//     setSearchfield(event.target.value);
//   };

// //onSearchChange = (event)=> {
// //  this.setState({searchfield:event.target.value})
// //  }


//   // Function to handle continent filter button clicks
//   const handleFilterClick = (continent) => {
//     setSelectedContinent(continent);
//   };

//   // Filter destinations based on the selected continent
//   const filteredDestinations = destinations.filter((destination) => {
//     return selectedContinent === 'Home' || destination.continent === selectedContinent;
//   });

//   return (
//     <div>
//       <nav className="navbar">
//         {/* Continent filter buttons */}
//         <ul className="navbar-links"> 

//           <li className="tc grow br3 pa3 ma1 dib bw2 shadow-5 custom-color">
//             <button onClick={() => handleFilterClick('Africa')}>Africa</button>
//           </li>
//           <li className="tc grow br3 pa3 ma1 bw2 shadow-5 sublease">
//             <button onClick={() => handleFilterClick('Antarctica')}>Antarctica</button>
//           </li>
//           <li className="tc grow br3 pa3 ma1 dib bw2 shadow-5 home">
//             <button onClick={() => handleFilterClick('Asia')}>Asia</button>
//           </li>
//           <li className="tc grow br3 pa3 ma1 dib bw2 shadow-5 home">
//             <button onClick={() => handleFilterClick('Australia')}>Australia</button>
//           </li>
//           <li className="tc grow br3 pa3 ma1 dib bw2 shadow-5 home">
//             <button onClick={() => handleFilterClick('Europe')}>Europe</button>
//           </li>
//           <li className="tc grow br3 pa3 ma1 dib bw2 shadow-5 home">
//             <button onClick={() => handleFilterClick('North America')}>North America</button>
//           </li>
//           <li className="tc grow br3 pa3 ma1 dib bw2 shadow-5 home">
//             <button onClick={() => handleFilterClick('South America')}>South America</button>
//           </li>
//           <li className="tc grow br3 pa3 ma1 dib bw2 shadow-5 home">
//             <button onClick={() => handleFilterClick('Home')}>Home</button>
//           </li>
//         </ul>
//       </nav>
//       <nav className="searchbox">
//         <SearchBox searchChange={this.onSearchChange} />
//       </nav>
//       <CardList destinations={filteredDestinations} />
//     </div>
//   );
// };

// export default Navbar;


// `