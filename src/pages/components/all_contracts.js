'use client'

import loading from "public/loading.gif"
import React from 'react'
import Image from "next/image"
import SearchBar from "./searchbar"


class NFTLoader extends React.Component{

    constructor(){
        super()
        this.state = {
            loading: true,
            smartContracts: [],
            n : 0,
        }
    }

    componentDidMount(){

            fetch("http://localhost:8443/")
            .then(response => response.json())
            .then(data => {
              this.setState({
                loading: false,
                smartContracts: data,
                n : 0
              })
            })
    
            .catch(() =>{
              console.log("Error fetching Smart Contracts.")
            })
    }


    render(){
        
        if(this.state.loading == true) {

            return(

                <div id="loading-container">
                    <Image
                        className="search-icon"
                        src= {loading}
                        width={100}
                        height={100}
                        alt="PixelVaul's logo"
                    />
                    <br/>
                    <p> Loading... </p>
                </div>
            )
            
        }

        let smartContracts = this.state.smartContracts.map(contract =>{

            this.state.n = 0

            return (
                    <div id="cards-container" className="container p-12">

                        <a href={"/contracts?search=" + contract.address}>
                            <h2 className="contract h2">{contract.address}</h2>
                        </a>
                        <div className="row nft-container">

                            {contract.nfts.map((item) => {
                                
                                this.state.n = this.state.n + 1

                                if(this.state.n > 5) {return}
                                return(
                                    <div className="nft-card card">
                                        <img className="card-img-top col" src={item.imgUrl} alt="NFT identifier"/>
                                        <div className="card-body d-flex flex-column text-center justify-content-around">
                                                <h3 className="card-title">#{item.nftId}</h3>
                                                <a href={item.imgUrl} className="btn btn-light">Metadata</a>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                        
                        <a href={"/contracts?search=" + contract.address} className="btn btn-secondary browse">Browse all NFTs</a>
                        
                    </div>
                )
        })

        return (
            
            <div>

                {smartContracts}
            </div>
        ) 
    }
}

export default NFTLoader