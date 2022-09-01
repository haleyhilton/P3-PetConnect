import React from 'react'
import './style.css'

import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';


export default function Search() {
    const { loading, data } = useQuery(GET_ME);

    return (
    <div>
        <div>
            <form class="flexy">
                <label for="age-filter">Age: </label>
                <select id="age-filter" name="age">
                    <option value="all">All</option>
                    <option value="3">3</option>
                </select>

                <label for="breed-filter">Breed: </label>
                <select id="breed-filter" name="breed">
                    <option value="all">All</option>
                    <option value="chihuahua">Chihuahua</option>
                </select>

                <label for="size-filter">Size: </label>
                <select id="size-filter" name="size">
                    <option value="all">All</option>
                    <option value="small">Small</option>
                </select>

                <label for="sex-filter">Sex: </label>
                <select id="sex-filter" name="sex">
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                
                <label for="color-filter">Color: </label>
                <select id="color-filter" name="color">
                    <option value="all">All</option>
                    <option value="white">White</option>
                </select>
                <input id="filter-submit" type="submit" value="Apply"/>
            </form>
        </div>
    </div>


    )
};
