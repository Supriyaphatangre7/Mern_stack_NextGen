import { useState } from "react";
export const Component1=()=>{

    const[num1,setnum1]=useState();
    const [num2,setnum2]=useState();
    const[result,setresult]=useState();
    

   const add=()=>{
     setresult(Number(num1)+Number(num2));
   }

   const sub=()=>{
    setresult(Number(num1)-Number(num2));
  }

  const mul=()=>{
    setresult(Number(num1)*Number(num2));
  }

  const div=()=>{
    setresult(Number(num1)/Number(num2));
  }

    return (
           
        <>
         <h2>Calcaulator</h2><br/>

         <form >
            <input type="number" value={num1}  placeholder="enter first number" onChange={(e)=>setnum1(e.target.value)} />&nbsp;&nbsp;
            <input type="number" value={num2} placeholder="enter second number" onChange={(e)=>setnum2(e.target.value)}/>&nbsp;&nbsp;

            <button type="button" class="btn btn-primary" onClick={add}>ADD</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-primary" onClick={sub}>SUB</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-primary" onClick={mul}>MUL</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-primary" onClick={div}>DIV</button>&nbsp;&nbsp;

            <h2 >Result: {result}</h2><br/><br/><br/>
         </form>
        </>
    )
};

