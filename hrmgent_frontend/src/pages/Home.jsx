function Home() {
  return (
    <div className="container mt-4">
      <h1>Home page called</h1>

      <div id="carouselExample" className="carousel slide mt-3" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://picsum.photos/800/300?random=1" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/800/300?random=2" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/800/300?random=3" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;