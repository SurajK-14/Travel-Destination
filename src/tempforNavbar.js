
import React, {useState} from'react';
import './Navbar.css';
import SearchBox from './SearchBox';
import { destinations } from './destination';
import CardList from './CardList';


class Navbar extends React.Component{

    constructor(){
        super()
        this.state={
          destinations: destinations,
          searchfield: ''
        }
      }

      onSearchChange= (event)=> {
        this.setState({searchfield: event.target.value})
      }

      //Button code might need to change
      handleFilterClick = (continent) => {
      this.setState({ selectedContinent: continent });
      };
//button code ends


      render(){
        const filteredDestinations = this.state.destinations.filter(destinations=> {
          return destinations.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

         return (
        <div>
            <nav className="navbar">
                
                <ul className="navbar-links">

                    <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 home'>
                    <button onClick={() => handleFilterClick('Africa')}>Africa</button>
                    </li>
                    <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 sublease'>
                    <a href="/">Antartica</a>
                    </li>
                    <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 home'>
                    <a href="/">Asia</a>
                    </li>
                    <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 home'>
                    <a href="/">Australia</a>
                    </li>
                    <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 home'>
                    <a href="/">Europe</a>
                    </li>
                    <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 home'>
                    <a href="/">North America</a>
                    </li>
                    <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 home'>
                    <a href="/">South America</a>
                    </li>
                    <li className='tc grow  br3 pa3 ma1 dib bw2 shadow-5 home'>
                    <a href="/">Home</a>
                    </li>
                </ul>
            </nav>
            <nav className='searchbox'>
                    <SearchBox searchChange={this.onSearchChange}/>
            </nav>
            <CardList destinations = {destinations}/> 
        </div>
    );
}
}

export default Navbar;

//THis is the name on the right with the logo
//<div className="navbar-logo">
//<img alt='Compass Compass' src='../images/cc-logo.png'/>
//</div>


//                    <CardList destinations={filteredDestinations} />


