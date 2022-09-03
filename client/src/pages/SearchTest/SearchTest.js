import React, { useState } from 'react'
import './style.css'

import { useQuery, useLazyQuery } from '@apollo/client';

import { QUERY_PET_SEARCH } from '../../utils/queries';


export default function SearchTest() {

    async function handleFormSubmit(event) {
        event.preventDefault();
    
        await setSearchFilterValsActual(() => {
            const updatedData = { ...searchFilterVals };
            if (updatedData.age === "all") {updatedData.age = null;};
            if (updatedData.breed === "all") {updatedData.breed = null;};
            if (updatedData.size === "all") {updatedData.size = null;};
            if (updatedData.sex === "all") {updatedData.sex = null;};
            if (updatedData.color === "all") {updatedData.color = null;};
            if (updatedData.forSale === "all") {updatedData.forSale = null;};
            console.log("ssfv updated to:");
            console.log(JSON.parse(JSON.stringify(updatedData)));

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
                <select id="breed-filter" name="breed" onChange={(e) => setSearchFilterVals(current => {
                    const updatedData = { ...current };
                    console.log("Breed updated:");
                    console.log(e.target.value);
                    updatedData.breed = e.target.value;
                    return updatedData;
                })}>
                    <option value="all">All</option>
                    <option value="Chihuahua">Chihuahua</option>
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
                        console.log(pet._id),
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