import { useState } from 'react';
import './Search.css';

const Search = () => {

    const [search, setSearch] = useState('');

    return (
        <div   className=''>
             <form>
                <input type="search" placeholder='Search' id='searchBarElement'/>
            </form>
        </div>
    );
}

export default Search;