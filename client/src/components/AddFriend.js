import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { Route, NavLink, Link, Routes } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { ADD_FRIEND } from '../utils/mutations';
import { GET_SPECIFIC_USER } from '../utils/queries';



const AddFriend = () => {
    const [myFriend, setMyfriend] = useState([])
    const { userId } = useParams();
    const { loading, userData } = useQuery(GET_SPECIFIC_USER, {
        variables: { userId: userId },
      })

        const user = userData?.user || []
         console.log(userData)
    
    console.log(userData)
    const [addFriend, { error, data }] = useMutation(ADD_FRIEND, {
        variables: { ...userData},
    });

    const handleFriend = async (event) => {
        event.preventDefault();
        
        try {
          await addFriend({
            variables: { ...userData },
          });
          console.log("Result added successfully");
        } catch (err) {
          console.error(err);
        }
      };

    return (
        <button onClick={handleFriend} type="button" class="btn btn-outline-warning">
        Add Friend+
        </button>
    )
}

export default AddFriend;