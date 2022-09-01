import React, { useState } from 'react'
import './style.css'

import { useQuery, useLazyQuery } from '@apollo/client';

import { QUERY_PET_SEARCH } from '../../utils/queries';
import DogSearchCard from './components/DogSearchCard';


export default function Search() {
    const [searchFilterVals, setSearchFilterVals] = useState({ search: null, age: null, breed: null, size: null, sex: null, color: null, forSale: null });

    const [pets, setPets] = useState([]);

    const { loading, error } = useQuery(QUERY_PET_SEARCH, {
        variables: {search: searchFilterVals.search, age: searchFilterVals.age, breed: searchFilterVals.breed, size: searchFilterVals.size, sex: searchFilterVals.sex, color: searchFilterVals.color, for_sale: searchFilterVals.forSale},
        onCompleted: newData => {
            setPets(newData.petSearch);
        }
    });
    if (error) console.log(JSON.parse(JSON.stringify(error)));

    const [newSearch] = useLazyQuery(QUERY_PET_SEARCH, {
        variables: {search: searchFilterVals.search, age: searchFilterVals.age, breed: searchFilterVals.breed, size: searchFilterVals.size, sex: searchFilterVals.sex, color: searchFilterVals.color, for_sale: searchFilterVals.forSale},
        onCompleted: newData => {
            console.log("Complete!");
            console.log("newData: "+ JSON.stringify(newData));
            setPets(newData.petSearch);
        }
    })

    async function handleFormSubmit(event) {
        event.preventDefault();
    
        setSearchFilterVals(current => {
            const updatedData = { ...current };
            if (updatedData.age === "all") {updatedData.age = null;};
            if (updatedData.breed === "all") {updatedData.breed = null;};
            if (updatedData.size === "all") {updatedData.size = null;};
            if (updatedData.sex === "all") {updatedData.sex = null;};
            if (updatedData.color === "all") {updatedData.color = null;};
            if (updatedData.forSale === "all") {updatedData.forSale = null;};

            return updatedData;
        })

        newSearch();
        console.log("did newSearch()");
    }

    

    return (
    <div>
        <div>
            <form className="flexy" onSubmit={handleFormSubmit}>
                <label htmlFor="age-filter">Age: </label>
                <select id="age-filter" name="age" onSubmit={(e) => setSearchFilterVals(current => {
                    const updatedData = { ...current };
                    updatedData.age = e.target.value;
                    return updatedData;
                })}>
                    <option value="all">All</option>
                    <option value="3">3</option>
                </select>

                <label htmlFor="breed-filter">Breed: </label>
                <select id="breed-filter" name="breed" onSubmit={(e) => setSearchFilterVals(current => {
                    const updatedData = { ...current };
                    updatedData.breed = e.target.value;
                    return updatedData;
                })}>
                    <option value="all">All</option>
                    <option value="chihuahua">Chihuahua</option>
                </select>

                <label htmlFor="size-filter">Size: </label>
                <select id="size-filter" name="size" onSubmit={(e) => setSearchFilterVals(current => {
                    const updatedData = { ...current };
                    updatedData.size = e.target.value;
                    return updatedData;
                })}>
                    <option value="all">All</option>
                    <option value="small">Small</option>
                </select>

                <label htmlFor="sex-filter">Sex: </label>
                <select id="sex-filter" name="sex" onSubmit={(e) => setSearchFilterVals(current => {
                    const updatedData = { ...current };
                    updatedData.sex = e.target.value;
                    return updatedData;
                })}>
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                
                <label htmlFor="color-filter">Color: </label>
                <select id="color-filter" name="color" onSubmit={(e) => setSearchFilterVals(current => {
                    const updatedData = { ...current };
                    updatedData.color = e.target.value;
                    return updatedData;
                })}>
                    <option value="all">All</option>
                    <option value="white">White</option>
                </select>

                <label htmlFor="forsale-filter">For Sale?: </label>
                <select id="forsale-filter" name="color" onSubmit={(e) => setSearchFilterVals(current => {
                    const updatedData = { ...current };
                    updatedData.forSale = e.target.value;
                    return updatedData;
                })}>
                    <option value="">All</option>
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
                        <DogSearchCard pet={pet} key={pet.name.toString()} />
                    )
                })
            )}
        </div>
    </div>
    )
};
