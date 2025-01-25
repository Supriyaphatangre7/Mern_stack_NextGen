import { useState } from "react"

export const Component4=()=>{
     const[weight,setweight]=useState();
     const[height,setheight]=useState();
     const[res,setres]=useState();
     const[imgs,setimg]=useState();

     const calculate=()=>{
     var BMI=weight/height**2;

      if(BMI<18.5)
    {
      setres("underweight")
      setimg('w1.jpg');
    }
    else if(BMI>18.5 && BMI<24.9)
    {
       setres("normal weight");
       setimg('w2.jpg');
    }

    else if( BMI>25 && BMI<29.9)
   {
      setres("over weight");
      setimg('over.jpg');
   }
  else
    {
      setres("obese");
      setimg('w3.jpg');
   }



}

    return (
        <>
           <h2>BMI CALCULATOR</h2>

           <form >
            <input type="number" placeholder="enter your weight" onChange={(e)=>setweight(e.target.value)}/>&nbsp;&nbsp;
            <input type="number" placeholder="enter your height" onChange={(e)=>setheight(e.target.value)} />&nbsp;&nbsp;

            <button type="button" class="btn btn-primary" onClick={calculate}>Calculate</button><br/>
            <h2>Result:{res}</h2>

         <img src={imgs} style={{height:'200px'}} />
           </form>
        </>
    )
}