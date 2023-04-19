import { useState } from 'react';
import './Search.css';
import * as Icons from 'react-bootstrap-icons';


const Search = () => {

    const [search, setSearch] = useState('');

    return (
        <div   className=''>
             <form>
            <Icons.Search id='searchIcon' /> <input type="search" placeholder='Search' id='searchBarElement' /> 
            </form>
        </div>
    );
}

export default Search;