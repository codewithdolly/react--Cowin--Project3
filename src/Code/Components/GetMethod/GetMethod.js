import React, {useState, useEffect} from 'react'
import axios from 'axios';

const GetMethod=()=> {
    const CoWinURL= "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=581&date=23-10-2021";

    const a= 1;

    const [post, setPost] = useState(a);
    useEffect(()=>{
        axios.get(CoWinURL)
        .then((responce)=>{
            console.log(responce.data);
            console.log(responce.data.sessions);
            setPost(responce.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])

    return (
        <div>
            <h2>Hi</h2>
        </div>
    )
}

export default GetMethod;
