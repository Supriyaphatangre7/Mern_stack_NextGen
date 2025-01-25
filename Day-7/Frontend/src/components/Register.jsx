export const Register=()=>{
    return(
        <>
         <div class="container text-center">
  <div class="row">
    <div class="col">
      <img className="register" src="f1.jpg"  />
    </div>

    
     <div class="col">
     <div className="custom-register-container" id="ss">
      <h2>Create an Account</h2>
      <form>
        <div className="custom-input-group">
          <label>Username</label>
          <input type="text" placeholder="Enter your username" />
        </div>
        
        <div className="custom-input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        
        <div className="custom-input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        
        <div className="custom-input-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" />
        </div>
        
        <button type="submit" className="custom-submit-btn">Register</button>
      </form>
    </div>

    </div>
  </div>
</div>
        </>
    )
};