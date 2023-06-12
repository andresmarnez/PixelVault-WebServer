'use client'

import { useSearchParams } from "next/navigation"
import NavBar from '../../pages/components/navbar'
import SearchBar from '../../pages/components/searchbar'
import NFTLoader from "./component/nfts"

const SearchContract = () => {

    const search = useSearchParams();
    const searchElement = search ? search?.get("search") : null
    const searchQuery = encodeURI(searchElement || "")
    return (
        <div>
            <NFTLoader search={searchQuery}/>
        </div>
    )
}

export default SearchContract