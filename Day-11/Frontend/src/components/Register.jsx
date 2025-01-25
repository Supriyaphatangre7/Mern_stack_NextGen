import { useState } from "react"
import axios from 'axios'



export const Register=()=>{

    const[moviename,setmoviename]=useState();
    const[hero,setheroname]=useState();
    const[herione,setheroinename]=useState();
    const[year,setyear]=useState();
    const[rating,setrating]=useState();


    const postdata=async()=>{
        try{

           const jsondata=await axios.post("http://127.0.0.1:3000/addmovie",{moviename,heroname,heroinename,year,rating});
           alert("data send successfully");
           console.log(jsondata);
        }catch(error)
        {
              console.log(error);
        }
    }

    return (

       
        <>

          <div className="container text-center">
  <div className="row">
    <div className="col">
      <img className="register" src="f2.jpg"  />
    </div>

    
     <div className="col">
     <div className="custom-register-container" id="ss">
      <h2>Post Movie Data</h2>
      <form>
        <div className="custom-input-group">
          <label>Movie Name</label>
          <input type="text"  value={moviename} placeholder="Enter movie name" onChange={(e)=>setmoviename(e.target.value)} />
        </div>
        
        <div className="custom-input-group">
          <label>Hero Name</label>
          <input type="text" value={hero} placeholder="Enter Hero name" onChange={(e)=>setheroname(e.target.value)} />
        </div>
        
        <div className="custom-input-group">
          <label>Herione Name</label>
          <input type="text" value={herione} placeholder="Enter herione name" onChange={(e)=>setheroinename(e.target.value)} />
        </div>

        <div className="custom-input-group">
          <label>Release year</label>
          <input type="text" value={year} placeholder="Enter release year" onChange={(e)=>setyear(e.target.value)} />
        </div>
        
        <div className="custom-input-group">
          <label>Rating</label>
          <input type="text"  value={rating} placeholder="Enter your rating" onChange={(e)=>setrating(e.target.value)} />
        </div>
        
        <button type="submit" className="custom-submit-btn"  onClick={postdata}>Add movie data</button>
      </form>
    </div>

    </div>
  </div>
</div>
        </>
    )
}