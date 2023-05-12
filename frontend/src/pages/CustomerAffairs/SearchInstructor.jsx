import React,{useState} from "react";
import '../../Styles/CustomerAffairs/SearchInstructor.css'
import '../../App.css'
import pic from '../../images/CustomerAffairs/fitnessInstructor.jpg'
import {FcNext,FcPrevious} from "react-icons/fc";
import InstructorPieChart from "../../Components/CustomerAffairs/InstructorPieChart";
import { SearchBar } from "../../Components/CustomerAffairs/SearchBar.jsx";
import { SearchResultsList } from "../../Components/CustomerAffairs/SearchResultsList.jsx";
import '../../Components/CustomerAffairs/SearchResult.css'
import '../../Components/CustomerAffairs/SearchResultsList.css'

const SearchInstructor = () => {
    
    const [results, setResults] = useState([]);
    
    return(
        
        <body>
            <section>
           <h1 class="title">Our Fitness Instructors</h1>
           <div class="search-bar-container">
                <SearchBar setResults={setResults} />
                {results && results.length > 0 && <SearchResultsList results={results} />}
           </div>
           <div class="instructor-container">
            <FcPrevious class="nav-style"/>
                <div class="instructor-card">
                    <div class="imgBx">
                        <a href="#">
                            <img src={pic}></img>
                        </a>
                        <h2>Leanne Graham</h2>
                        <p>Experience : 3 Yrs<br/>Ratings : Excellent</p>
                    </div>
                </div>
                <div class="instructor-card">
                    <div class="imgBx">
                        <a href="#">
                            <img src={pic}></img>
                        </a>
                        <h2>Ervin Howell</h2>
                        <p>Experience : 5 Yrs<br/>Ratings : Excellent</p>
                    </div>
                </div>

                <div class="instructor-card">
                    <div class="imgBx">
                        <a href="#">
                            <img src={pic}></img>
                        </a>
                        <h2>Kurtis Weissnat</h2>
                        <p>Experience : 2 Yrs<br/>Ratings : Good</p>
                    </div>
                </div>
                <div class="instructor-card">
                    <div class="imgBx">
                        <a href="#">
                            <img src={pic}></img>
                        </a>
                        <h2>Glenna Reichert</h2>
                        <p>Experience : 1 Yrs<br/>Ratings : Good</p>
                    </div>
                </div>
            <FcNext class="nav-style"/>
           </div>
           <h1 class="title">Instructor Analysis Based On Ratings</h1>
           <InstructorPieChart/>
           </section>
        </body>
        
    )
}

export default SearchInstructor;