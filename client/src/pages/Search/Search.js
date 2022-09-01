import React, { useState } from 'react'
import './style.css'

import { useQuery } from '@apollo/client';
import { QUERY_PET_SEARCH } from '../../utils/queries';


export default function Search() {
    const [petSearch] = useQuery(QUERY_PET_SEARCH);
    let { loading, data } = petSearch(null, null, null, null, null, null, null);
    const pet = data?[0] : [];

    

    return (
    <div>
        <div>
            <form className="flexy">
                <label htmlFor="age-filter">Age: </label>
                <select id="age-filter" name="age">
                    <option value="all">All</option>
                    <option value="3">3</option>
                </select>

                <label htmlFor="breed-filter">Breed: </label>
                <select id="breed-filter" name="breed">
                    <option value="all">All</option>
                    <option value="chihuahua">Chihuahua</option>
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
                <input id="filter-submit" type="submit" value="Apply"/>
            </form>
        </div>

        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>The data: {pet}</div>
            )}
        </div>
    </div>
    )
};
