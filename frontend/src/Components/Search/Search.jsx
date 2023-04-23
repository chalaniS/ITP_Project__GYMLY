import { useState } from 'react';
import './Search.css';
import * as Icons from 'react-bootstrap-icons';


const Search = () => {

    const [search, setSearch] = useState('');
    

    return (
        <div   className=''>
             <form>
            <Icons.Search id='searchIcon' /> <input type="search" placeholder='Search' id='searchBarElement' value={search} onChange={(e) => setSearch(e.target.value)} />
            </form>
        </div>
    );
}

export default Search;