import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';

export class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }

    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            company,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        }=this.props.user;

        const { loading, repos }=this.props;

        // const { repos }= this.props.repos;

        if(loading) {
            return(<Spinner></Spinner>)
        }
        else {
            return (
                <div>
                    <Link to="/" className="btn btn-light">Back to Search</Link>
                    Up for Hiring: {" "}
                    {hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}
                    <div className="card grid-2">
                        <div className="all-center">
                            <img
                                src={avatar_url}
                                alt=''
                                className="round-img"
                                style={{width: '150px'}}
                            />
                            <h1>{name}</h1>
                            <p>Location: {location}</p>
                        </div>
                        <div>
                            {bio && 
                            <Fragment>
                                <h3>Bio:</h3> 
                                {bio}    
                            </Fragment>}
                            <div>
                                <a href={html_url} className="btn btn-success my-1">Visit GitHub Profile</a>
                            </div>
                            <ul>
                                <li>
                                    {login && <Fragment>
                                    <strong>Username:</strong>{" "+login}</Fragment>}
                                </li>
                                <li>
                                    {company && <Fragment>
                                    <strong>Company:</strong>{" "+company}</Fragment>}
                                </li>
                                <li>
                                    {blog && <Fragment>
                                    <strong>Website:</strong>{" "+blog}</Fragment>}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card text-center">
                        <div className="badge badge-primary">Followers: {followers}</div>
                        <div className="badge badge-success">Following: {following}</div>
                        <div className="badge badge-dark">Public repos: {public_repos}</div>
                        <div className="badge badge-light">Public Gists: {public_gists}</div>
                    </div>
                    <div>
                        <h1>Latest Repositories:</h1>
                        <Repos repos={repos}></Repos>
                    </div>
                </div>
            )
        }
    }
}

export default User
