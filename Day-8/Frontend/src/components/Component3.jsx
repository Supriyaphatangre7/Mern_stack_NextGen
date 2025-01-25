import { useState } from "react";

export const Component3=()=>{

    const[unit,setunit]=useState();
    const[res,setres]=useState();

    
    const calculate=()=>{
        var bill=0
       if(unit<=100)
       {
         bill=0;

       }
     else if(unit >=100 && unit<200)
     {
       bill=(unit-100)*5;
     }
     else if(unit >=200)
     {
       bill=100*5+(unit -200)*10;
     }

     setres(bill);
    }

    return (
        <>
            <h2>Bill calculation</h2><br/>
            <form >
                  <input type="number" value={unit} placeholder="enter the units" onChange={(e)=>setunit(e.target.value)} />&nbsp;&nbsp;
                  <button type="button" class="btn btn-primary" onClick={calculate}>Calculate</button>

                 <h2>Result:{res}</h2><br/><br/><br/>
            </form>
        </>
    )
};

