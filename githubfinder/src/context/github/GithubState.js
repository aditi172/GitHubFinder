import React, {useReducer} from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import {
    SET_LOADING,
    SEARCH_USER,
    CLEAR_USER,
    GET_REPOS,
    GET_USER
} from '../types';
const GithubState=(props)=> {
    const initialState={
        users: [],
        repos: [],
        user: {},
        loading: false
    }
const [state, dispatch] =useReducer(githubReducer, initialState);

//search users
const searchUser=async (search)=> {
    setLoading();
    const res= await axios.get(`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&sclient_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({ type: SEARCH_USER, payload: res.data.items});
}
const clearUser=()=> {
    dispatch({ type: CLEAR_USER });
}
const setLoading=()=> {
    dispatch({type: SET_LOADING})
}
const getUser=async (username)=> {
    setLoading();
    const res= await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&sclient_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(res.data);
    dispatch({
        type: GET_USER,
        payload: res.data
    })
}
const getUserRepos= async (username)=> {
    setLoading();
    const res= await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&sclient_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(res.data);
    dispatch({
        type: GET_REPOS,
        payload: res.data
    })
  }

return(
        <githubContext.Provider value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUser,
            clearUser,
            getUser,
            getUserRepos
        }}>
            {props.children}
        </githubContext.Provider>
    )
}
export default GithubState;