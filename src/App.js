import React from 'react';

function App() {
  return (
    <>
   <div style={{backgroundColor:'azure'}}>
<nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">MENU</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">MENU</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link" href="/rigister">RIGISTER</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/login">LOGIN</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/data">DATA</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
</nav>


<h1 style={{textAlign:'center'}}><b>DATA</b></h1><br/><br/>

      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/5/0/950321c11d_50173256_data-science-1.jpg" className="d-block w-100" alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://www.bryangarnier.com/wp-content/uploads/2019/09/AdobeStock_175854516.jpeg" className="d-block w-100" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://www.poweradmin.com/blog/wp-content/uploads/2020/06/2-5-scaled.jpg" className="d-block w-100" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <footer style={{ textAlign: 'center', marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
    &copy; 2024 Secure Your Data. All rights reserved.
</footer>

      </div>
    </>
  );
}

export default App;
