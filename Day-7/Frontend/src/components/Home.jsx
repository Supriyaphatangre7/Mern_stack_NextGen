export const Home = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="c9.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="c1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="c6.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2 className="about">About Us</h2>

      <div className="container2 text-center ">
        <div className="row">
          <div className="col">
          <p className="about1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"  .</p>
          </div>
          <div className="col">
            <img className="img" src="d9.jpg"  />
          </div>
        </div>
      </div>

      {/* <h3 className="explore">Explore More</h3> */}


  <div class="container1 text-center">
   <div class="row">
    <div class="col">
    <div class="card w-51" >
  <img src="d1.jpg" class="card-img-top " style={{height:'400px'}} />
  <div class="card-body">
    <h5 class="card-title">Ruffled Button</h5>
    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>



    <div class="col">
    <div class="card w-51" >
  <img src="d4.jpg" class="card-img-top"  style={{height:'400px'}}/>
  <div class="card-body">
    <h5 class="card-title">Oversized Shirts</h5>
    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
    </div>
    </div>



    <div class="col">
    <div class="card w-51" >
  <img src="d6.jpg" class="card-img-top"  style={{height:'400px'}} />
  <div class="card-body">
    <h5 class="card-title">Office Outfits</h5>
    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
    </>
  );
};
