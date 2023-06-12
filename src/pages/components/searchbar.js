"use client"

import React from 'react'
import search from "../../icons/search.png"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from 'next/image'

const SearchBar = () =>{

    const [query, setSearchQuery] = useState("")
    const router = useRouter()

    const onSearch = (event) => {
        event.preventDefault()
        const encodedSearchQuery = encodeURI(query)
        router.push(`/contracts?search=${query}`)
    }

    return(
        <form autoComplete="off" onSubmit={onSearch} className="searchbar" role="search">
            <a className="searchbutton" onClick={onSearch}>
            <Image
                src={search}
                width={15}
                height={15}
                alt="Search Icon"
            />
                </a>
            <input type="search" onChange={(e) => setSearchQuery(e.target.value)} id="search" placeholder="0xeB7C91..."></input>
        </form>
    )
}

export default SearchBar