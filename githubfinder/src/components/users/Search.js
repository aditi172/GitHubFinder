import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';


const Search =()=> {
    const githubContext=useContext(GithubContext);
    const alertContext= useContext(AlertContext);
    const [search, setSearch] =useState('');
    
    const handleChange=(e)=> {
        setSearch(e.target.value)
    }
    const handleSubmit=(e)=> {
        e.preventDefault();
        if(search==='') {
            alertContext.setAlert("Please enter a Name", 'light')
        }
        else {
            githubContext.searchUser(search);
            setSearch('');
            document.getElementById("form").reset();
        }
    }
        return (
            <div>
                <form id="form" onSubmit={handleSubmit}>
                    <input id="search" type="text" placeholder="Search Users here..." onChange={handleChange}></input>
                    <input type="submit" id="submit" className="btn btn-primary btn-block" value="Search"></input>
                </form>
                {githubContext.users.length>0 && 
                    <button className="btn btn-light btn-block" onClick={githubContext.clearUser}>Clear</button>
                }
            </div>
        )
    }

export default Search
