import React, { useState } from 'react';
import { QUERY_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import SocialCard from './components/SocialCard';
import "./style.css";

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
            }
        }
    });
    

    return (
        <div className='centerfold'>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='grid-container'>
                    {petsState.map((pet) => {
                        return (
                        <SocialCard pet={pet} />
                        )
                    })}
                </div>
            )}
        </div>
    )
};

export default Social;