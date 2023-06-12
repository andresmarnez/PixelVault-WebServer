"use client"

import loading from "public/loading.gif"
import React from 'react'
import Image from "next/image"
import not_found from "public/not_found.png"

class NFTLoader extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loading: true,
            nfts: [],
            address: props.search,
            n : 0,
        }
    }

    componentDidMount(){
        
        const url = "http://localhost:8443/smartcontracts/" + this.state.address


            fetch(url)
            .then(response => response.json())
            .then(data => {

            this.setState({
                loading: false,
                nfts: data,
                address: search,
                n : 0
              })
            })
    
            .catch((e) =>{
              console.log("Error fetching Smart Contracts.")
              console.log(e)
            })
    }

    render(){
        
        if(this.state.loading == true) {

            return(

                <div id="loading-container">
                    
                    <Image
                        class="search-icon"
                        src= {loading}
                        width={100}
                        height={100}
                        alt="Loading image."
                    />
                    <hr/>
                    <p> Loading... </p>
                </div>
            )
        }

        let nfts = this.state.nfts.map(nft =>{
            return(
                <div class="nft-card card">
                    <img class="card-img-top col" src={nft.imgUrl} alt="NFT identifier"/>
                    <div class="card-body d-flex flex-column text-center justify-content-around">
                            <h3 class="card-title">#{nft.nftId}</h3>
                            <a href={nft.imgUrl} class="btn btn-light">Metadata</a>
                    </div>
                </div>
            )
        })

        if(nfts == []) {

            return(
                <div id="loading-container">
                    <Image
                        class="search-icon"
                        src= {not_found}
                        width={200}
                        height={200}
                        alt="Not Found image"
                    />

                    <hr/>
                    <h2>No NFTs Found for address.</h2>
                </div>
            )
        }



        return (
            
            <div id="cards-container" class="container p-12">
                <h2 class="h2">{this.props.search}</h2>
                <div class="row nft-container">
                    {nfts}
                </div>
            </div>
        ) 
    }
}

export default NFTLoader