import React, { useState } from 'react'
import './style.css'
import { useQuery, useLazyQuery } from '@apollo/client';
import { QUERY_PET_SEARCH } from '../../utils/queries';
import SearchCard from './components/SearchCard';


export default function Search() {
    const [pets, setPets] = useState([]);
    const [firstRender, setFirstRender] = useState(true);

    let searchRef = React.useRef();
    let ageRef = React.useRef();
    let breedRef = React.useRef();
    let sizeRef = React.useRef();
    let sexRef = React.useRef();
    let colorRef = React.useRef();
    let forSaleRef = React.useRef();

    const { loading, error } = useQuery(QUERY_PET_SEARCH, {
        variables: {search: null, age: null, breed: null, size: null, sex: null, color: null, for_sale: null},
        onCompleted: newData => {
            if (firstRender) {
                setPets(newData.petSearch);
                setFirstRender(false);
            }
        }
    });
    if (error) console.log(JSON.parse(JSON.stringify(error)));


    const [newSearch] = useLazyQuery(QUERY_PET_SEARCH, {
        variables: {
            search: (searchRef.current ? (searchRef.current.value.replace(/^\s+|\s+$/gm,'') === "" ? null : searchRef.current.value.trim()) : null),
            age: (ageRef.current ? (ageRef.current.value === "all" ? null : parseInt(ageRef.current.value)) : null),
            breed: (breedRef.current ? (breedRef.current.value === "all" ? null : breedRef.current.value) : null),
            size: (sizeRef.current ? (sizeRef.current.value === "all" ? null : sizeRef.current.value) : null),
            sex: (sexRef.current ? (sexRef.current.value === "all" ? null : sexRef.current.value) : null),
            color: (colorRef.current ? (colorRef.current.value === "all" ? null : colorRef.current.value) : null),
            for_sale: (forSaleRef.current ? (forSaleRef.current.value === "all" ? null : (forSaleRef.current.value === "true" ? true : false)) : null)
        }
    })

    async function handleFormSubmit(event) {
        event.preventDefault();
        let results = await newSearch();
        if(results) {
            setPets(results.data.petSearch)
        }
    }

    

    return (
    <div>
        <div>
            <form className="flexy" onSubmit={handleFormSubmit}>
                <label htmlFor="search-filter">Search: </label>
                <input id="search-filter" name="search" ref={searchRef}></input>
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

        <div className='flexy'>
            {loading ? (
                <div>Loading...</div>
            ) : (
                pets.map((pet) => {
                    return <SearchCard pet={pet} />
                })
            )}
        </div>
    </div>
    )
};
