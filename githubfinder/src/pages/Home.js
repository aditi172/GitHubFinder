import React, { Fragment } from 'react'
import Users from '../components/users/Users';
import Search from '../components/users/Search';
import Alert from '../components/layout/Alert';

const Home = () => {
    return (
        <Fragment>
            <Alert></Alert>
            <Search></Search>
            <Users></Users>
        </Fragment>
    )
}
export default Home;
