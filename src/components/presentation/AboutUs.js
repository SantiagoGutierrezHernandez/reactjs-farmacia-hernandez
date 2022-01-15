import ButtonLink from "./ButtonLink"
import Subtitle from "./Subtitle"

const AboutUs = ()=>{
    return (
        <section className="content-box light-background d-flex flex-column align-items-center justify-content-center">
            <Subtitle text={"Sobre nosotros"}/>
            <div className="row flex-lg-nowrap align-items-center">
                <p className="description col-12 col-lg-7">
                    Somos Farmacia Hernandez, una farmacia y cosmética en la localidad de Burzaco. Abrimos de lunes a viernes de
                    9:00 a 13:00 a la mañana y de 16:00 a 19:00 a la tarde y los sábados de 9:00 a 13:00. Para detalles sobre envíos a domicilio por favor contáctanos a nuestras redes sociales
                    o a nuestro teléfono de línea dentro de las horas de trabajo.
                    En nuestra farmacia te podemos ofrecer productos de medicina, cosmética y perfumería. Debajo te presentamos una lista
                    con algunos de nuestros productos que te podrían interesar. Para consultar sobre precios, por favor envíanos un mensaje
                    a nuestras redes sociales o llámanos por teléfono.
                </p>
                <div id="carouselSlidesOnly" className="carousel slide h-100 col-12 col-lg-5" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/midermus-crema-ord.jpg" className="d-block w-100" alt="Carrusel 1: Midermus crema de ordeñe" loading="lazy"/>
                    </div>
                    <div className="carousel-item">
                        <img src="images/tortulan-leche-desmaquillante.jpg" className="d-block w-100 " alt="Carrusel 2: Tortulan leche desmaquillante" loading="lazy"/>
                    </div>
                    </div>
                </div>
            </div>
            <ButtonLink goTo={"/"} light={false} text={"Ir a la sección de productos"}/>
        </section>)
}

export default AboutUs