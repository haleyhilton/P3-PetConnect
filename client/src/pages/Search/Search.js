import React, { useRef, useState } from 'react'
import './style.css'

import { useQuery, useLazyQuery } from '@apollo/client';

import { QUERY_PET_SEARCH } from '../../utils/queries';


export default function Search() {
    const [pets, setPets] = useState([]);
    const [firstRender, setFirstRender] = useState(true);

    const ageRef = useRef();
    const breedRef = useRef();
    const sizeRef = useRef();
    const sexRef = useRef();
    const colorRef = useRef();
    const forSaleRef = useRef();

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


    const [newSearch] = useLazyQuery(QUERY_PET_SEARCH, {
        variables: {
            search: null,
            age: (ageRef.current.value === "all" ? null : ageRef.current.value),
            breed: (breedRef.current.value === "all" ? null : breedRef.current.value),
            size: (sizeRef.current.value === "all" ? null : sizeRef.current.value),
            sex: (sexRef.current.value === "all" ? null : sexRef.current.value),
            color: (colorRef.current.value === "all" ? null : colorRef.current.value),
            for_sale: (forSaleRef.current.value === "all" ? null : forSaleRef.current.value)
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
                <select id="age-filter" name="age" ref={ageRef}>
                    <option value="all">All</option>
                    <option value="3">3</option>
                </select>

                <label htmlFor="breed-filter">Breed: </label>
                <select id="breed-filter" name="breed" ref={breedRef}>
                    <option value="all">All</option>
                    <option value="Chihuahua">Chihuahua</option>
                </select>

                <label htmlFor="size-filter">Size: </label>
                <select id="size-filter" name="size" ref={sizeRef}>
                    <option value="all">All</option>
                    <option value="small">Small</option>
                </select>

                <label htmlFor="sex-filter">Sex: </label>
                <select id="sex-filter" name="sex" ref={sexRef}>
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                
                <label htmlFor="color-filter">Color: </label>
                <select id="color-filter" name="color" ref={colorRef}>
                    <option value="all">All</option>
                    <option value="white">White</option>
                </select>

                <label htmlFor="forsale-filter">For Sale?: </label>
                <select id="forsale-filter" name="forsale" ref={forSaleRef}>
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
