
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random=()=>{

const [loading, setLoading] = useState(false);


const [gif, setGif] = useState('');

async function  fetchData(){
    setLoading(true)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=TN3lv3mG7P64p1dTSsJmTWo8STYbuvWg&tag=hero&rating=g`;
 const {data} =  await axios.get(url);
console.log(data);

const imageSource = data.data.images.downsized_large.url;
console.log(imageSource);   
setGif(imageSource);
setLoading(false)

 }


useEffect(()=>{
fetchData()

},[])


function clickHandler(){
fetchData();

}

    return(
<div>
<h1>Random Gif</h1>

{loading ? (<Spinner/>):(<img src={gif} width="450"/>)}


<button onClick={clickHandler}> 
    Generate
</button>

</div>

    );


}
export default Random