const TitleCarousel = ()=>{
    return (
      <main id="inicio" className="gradient-dark p-0 min-w">
        <div id="carouselExampleIndicators" className="carousel slide w-100" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={process.env.PUBLIC_URL +"../images/1.png"} className="d-block w-100" alt="Imagen de fondo 1"/>
              </div>
              <div className="carousel-item">
                <img src={process.env.PUBLIC_URL +"../images/2.png"} className="d-block w-100" alt="Imagen dNamee fondo 2"/>
              </div>
              <div className="carousel-item">
                <img src={process.env.PUBLIC_URL +"../images/3.png"} className="d-block w-100" alt="Imagen de fondo 3"/>
              </div>
            </div>
            <div className="h-100 w-100 position-absolute gradient-dark top-left"></div>
        </div>
      </main>)
}
export default TitleCarousel