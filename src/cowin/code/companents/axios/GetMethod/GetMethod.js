import React,{useEffect,useState} from "react";
import axios from "axios";



const GetMethod=()=>{

    const [post, setPost] = useState([]);



   useEffect(() => {
       axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=581&date=23-10-2021')
       .then((res)=>{
           console.log(res.data);
           
           setPost(res.data.sessions);
       })
       .catch((error)=>{
           console.log()

       });

   },[]);
   return <div>{post.map((obj)=>{
       return(<div> <p>{obj.name}---- {obj.address} </p>
       <h2>{obj.fee_type}</h2>
       

       
       </div>)
   }) }</div>
};
export default GetMethod;