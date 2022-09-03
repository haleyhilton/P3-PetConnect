import React, { useState } from 'react'
import './style.css'

import { useQuery, useLazyQuery } from '@apollo/client';

import { QUERY_PET_SEARCH } from '../../utils/queries';


export default function Search() {
    const [pets, setPets] = useState([]);
    const [firstRender, setFirstRender] = useState(true);

    const { loading, error } = useQuery(QUERY_PET_SEARCH, {
        variables: {search: null, age: null, breed: null, size: null, sex: null, color: null, for_sale: null},
        onCompleted: newData => {
            if (firstRender) {
                setPets(newData.petSearch);
                console.log("setPets via useQuery");
                setFirstRender(false);
            }
        }
    });
    if (error) console.log(JSON.parse(JSON.stringify(error)));


    //TODO: convert query selectors to react refs!!!!
    const [newSearch] = useLazyQuery(QUERY_PET_SEARCH, {
        variables: {
            search: null,
            age: (document.querySelector('#age-filter').value === "all" ? null : document.querySelector('#age-filter').value),
            breed: (document.querySelector('#breed-filter').value === "all" ? null : document.querySelector('#breed-filter').value),
            size: (document.querySelector('#size-filter').value === "all" ? null : document.querySelector('#size-filter').value),
            sex: (document.querySelector('#sex-filter').value === "all" ? null : document.querySelector('#sex-filter').value),
            color: (document.querySelector('#color-filter').value === "all" ? null : document.querySelector('#color-filter').value),
            for_sale: (document.querySelector('#forsale-filter').value === "all" ? null : document.querySelector('#forsale-filter').value)
        },
        onCompleted: newData => {
            setPets(newData.petSearch);
            console.log("setPets via useLazyQuery");
        }
    })

    async function handleFormSubmit(event) {
        event.preventDefault();

        newSearch();
    }

    

    return (
    <div>
        <div>
            <form className="flexy" onSubmit={handleFormSubmit}>
                <label htmlFor="age-filter">Age: </label>
                <select id="age-filter" name="age">
                    <option value="all">All</option>
                    <option value="3">3</option>
                </select>

                <label htmlFor="breed-filter">Breed: </label>
                <select id="breed-filter" name="breed">
                    <option value="all">All</option>
                    <option value="Chihuahua">Chihuahua</option>
                </select>

                <label htmlFor="size-filter">Size: </label>
                <select id="size-filter" name="size">
                    <option value="all">All</option>
                    <option value="small">Small</option>
                </select>

                <label htmlFor="sex-filter">Sex: </label>
                <select id="sex-filter" name="sex">
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                
                <label htmlFor="color-filter">Color: </label>
                <select id="color-filter" name="color">
                    <option value="all">All</option>
                    <option value="white">White</option>
                </select>

                <label htmlFor="forsale-filter">For Sale?: </label>
                <select id="forsale-filter" name="color">
                    <option value="all">All</option>
                    <option value="true">For sale</option>
                    <option value="false">Not for sale</option>
                </select>
                <input id="filter-submit" type="submit" value="Apply"/>
            </form>
        </div>

        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                console.log("Pets: "+ JSON.stringify(pets)),
                pets.map((pet) => {
                    return (
                        <div key={pet._id} >
                            Dog: {pet.name}
                        </div>
                    )
                })
            )}
        </div>
    </div>
    )
};
