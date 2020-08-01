import React, { Component } from 'react'

export class Search extends Component {

    state={
        search:''
    }
    handleChange=(e)=> {
        this.setState({[e.target.id]: e.target.value})
    }
    handleSubmit=(e)=> {
        e.preventDefault();
        if(this.state.search==='') {
            this.props.setAlert("Please enter a Name", 'light')
        }
        else {
            this.props.searchUser(this.state.search);
            this.setState({search: ''});
            document.getElementById("form").reset();
        }
    }
    render() {
        return (
            <div>
                <form id="form" onSubmit={this.handleSubmit}>
                    <input id="search" type="text" placeholder="Search Users here..." onChange={this.handleChange}></input>
                    <input type="submit" id="submit" className="btn btn-primary btn-block" value="Search"></input>
                </form>
                {this.props.showClear && 
                    <button className="btn btn-light btn-block" onClick={this.props.clearUser}>Clear</button>
                }
            </div>
        )
    }
}

export default Search
