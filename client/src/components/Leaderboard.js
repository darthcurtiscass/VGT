import React from 'react';
import '../index.css';

import { GET_ALL_USERS } from '../utils/queries';
import { useQuery }  from '@apollo/client';

const Leaderboard = () => {
    const { loading, data } = useQuery(GET_ALL_USERS);
    const users = data?.users || []

    console.log(data)

    

    if (!data) return <div>Loading...</div>;
    return (
        <table class="table table-dark table-striped">
            {users.map((user) => (
            <div>
                
            </div>
            ))}
        </table>
    )


}






export default Leaderboard;
