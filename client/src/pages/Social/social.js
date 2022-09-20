import React, { useState } from 'react';
import { QUERY_USER, QUERY_ONE_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import SocialCard from './components/SocialCard';
import "./style.css";
import Auth from '../../utils/auth';

function Social() {
    const [firstRender, setFirstRender] = useState(true);
    const [petsState, setPetsState] = useState([]);
    const [likes, setLikes] = useState([]);
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
                for (let l = 0; l < likes.length; l++) {
                    if (currentPet._id === likes[l]._id) {
                        currentPet.liked = true;
                    };
                };
                if (!currentPet.liked) {currentPet.liked = false};
                petArr.push(currentPet);
            };
        };
        return petArr;
    };

    const { } = useQuery(QUERY_ONE_USER, {
        variables: {
            profileId: Auth.getUser().data._id
        },
        onCompleted: newData => {
            if (!(likes === newData.oneUser.likes)) {
                setLikes(newData.oneUser.likes);
            }
        }
    });

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