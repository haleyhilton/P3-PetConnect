import React, { useState } from 'react';
import { QUERY_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import SocialCard from './components/SocialCard';
import "./style.css";
import Auth from '../../utils/auth';

function Social() {
    const [firstRender, setFirstRender] = useState(true);
    const [petsState, setPetsState] = useState([]);
    let users = [];
    let pets = [];

    function extractPets(arr) {
        let petArr = [];
        for (let i = 0; i < arr.length; i++) {
            const pets = (arr[i].pet ? arr[i].pet : []);
            for (let j = 0; j < pets.length; j++) {
                const currentPet = {...pets[j]};
                currentPet.ownerId = arr[i]._id;
                currentPet.ownerName = (arr[i].first_name + " " + arr[i].last_name);
                petArr.push(currentPet);
            };
        };
        return petArr;
    };

    const {loading, data} = useQuery(QUERY_USER, {
        onCompleted: newData => {
            if (firstRender) {
                users = newData.user;
                pets = extractPets(users);
                setPetsState(pets);
                setFirstRender(false);
                console.log(Auth.getUser().data);
            }
        }
    });
    

    return (
        <div>
        <div className='centerfold'>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='gridcontainer'>
                    {petsState.map((pet) => {
                        return (
                        <SocialCard pet={pet} />
                        )
                    })}
                    </div>
                
            )}
        </div>
        </div>
    )
};

export default Social;