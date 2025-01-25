import { useState } from "react"

export const Component2=()=>{
    const[deg,setval]=useState();
    const[res,setres]=useState();

    const storevalue=(e)=>{
      setval(e.target.value);
    }

    const convert=()=>{
        setres(deg*1.8+32);
    }

    return (

        <>
       
         <h2>Farenhite converter</h2><br/>

         <form >
            <input type="number" placeholder="enter the degree" onChange={storevalue} />&nbsp;&nbsp;
            <button type="button" class="btn btn-primary" onClick={convert}>Convert</button>

            <h2>Result:{res}</h2><br/><br/><br/>
         
         </form>
        </>
    )
};

