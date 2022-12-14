import React, { useEffect, useState } from 'react'
import './style.css'
import { useQuery, useLazyQuery } from '@apollo/client';
import { QUERY_PET_SEARCH } from '../../utils/queries';
import SearchCard from './components/SearchCard';
import breedlist from '../../utils/breedlist';
import colorlist from '../../utils/colorlist';
import {createMastText} from '../../utils/helpers'
import Masthead from '../../components/Masthead'
// import Auth from "../../utils/auth";

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

    const [text,setText] = useState();
    
    useEffect(() => {
        const data = createMastText();

        setText(data);

        console.log("*****",data);
    },[]);


    return (
    <div>
                    <Masthead {...createMastText()}/>

        <div className='row flexy'>
            
            <form className="col-3 text-center flexy3" onSubmit={handleFormSubmit}>
                <label htmlFor="search-filter">Search </label>
                <input id="search-filter" name="search" ref={searchRef}></input>
                <label htmlFor="age-filter">Age: </label>
                <select id="age-filter" name="age" ref={ageRef}>
                    <option value="all">All</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                </select>

                <label htmlFor="breed-filter">Breed </label>
                <select id="breed-filter" name="breed" ref={breedRef}>
                    <option value="all">All</option>
                    {breedlist.map((breed) => {
                        return <option value={breed}>{breed}</option>
                    })}
                </select>

                <label htmlFor="size-filter">Size </label>
                <select id="size-filter" name="size" ref={sizeRef}>
                    <option value="all">All</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>

                <label htmlFor="sex-filter">Sex </label>
                <select id="sex-filter" name="sex" ref={sexRef}>
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                
                <label htmlFor="color-filter">Color </label>
                <select id="color-filter" name="color" ref={colorRef}>
                    <option value="all">All</option>
                    {colorlist.map((color) => [
                        <option value={color.toLowerCase()}>{color}</option>
                    ])}
                </select>

                <label htmlFor="forsale-filter">For Sale </label>
                <select id="forsale-filter" name="forsale" ref={forSaleRef}>
                    <option value="all">All</option>
                    <option value="true">For sale</option>
                    <option value="false">Not for sale</option>
                </select>
                <input id="filter-submit" type="submit" value="Apply"/>
            </form>

        <div className=' col-9'>
            {loading ? (
                <div>Loading...</div>
                ) : (
                    (
                        <div className='container'>
                        <div className='row gy-4'>
                        {pets.length > 0 ? pets.map((pet) => {
                            return (
                                <SearchCard pet={pet} />
                                )
                            }) :
                            <div>No pets matched your search</div>
                        }
    </div>

                    </div>
                )
                )}
                </div>
        </div>
    </div>
    
    )
};
