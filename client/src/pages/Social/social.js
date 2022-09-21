import React, { useState } from 'react';
import { QUERY_USER, QUERY_ONE_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import SocialCard from './components/SocialCard';
import "./style.css";
import Auth from '../../utils/auth';

function Social() {
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [petsState, setPetsState] = useState([]);
    let users = [];
    let pets = [];
    let likes = [];

    //This extracts all pets from the array of all users and modifies them to add whether they've been liked by the user and who their owner is
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

    const { loading: loadingLikes, data: likesData } = useQuery(QUERY_ONE_USER, {
        variables: {
            profileId: Auth.getUser().data._id
        },
        fetchPolicy: 'cache-and-network',
    });

    const {loading, data} = useQuery(QUERY_USER, {
    });

    if (!loading && !loadingLikes) {
        likes = likesData.oneUser.likes;
        pets = extractPets(data.user);
        if (isFirstRender) {
            setPetsState(pets);
            setIsFirstRender(false);
        }
    }

    
    return (
        <div>
        <div className='centerfold'>
            {loading || loadingLikes ? (
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