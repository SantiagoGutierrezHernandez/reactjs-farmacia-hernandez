import Subtitle from "./Subtitle"
const Footer = () =>{
    return (
        <footer id="contacto" className="content-box p-5 d-flex flex-column justify-content-center medium-background">
            <Subtitle text={"Contáctanos"}/>
            <ul className="d-flex flex-column align-items-center justify-content-center">
                <li className="d-flex flex-wrap justify-content-evenly">
                    <a className="m-3 animation-logo" href="https://www.instagram.com/cosmeticafarmahernandez/"><img className="social-logo" src={process.env.PUBLIC_URL +"../images/instagram.svg"} alt="Instagram link" loading="lazy"/></a>
                    <a className="m-3 animation-logo" href="https://www.facebook.com/farmaciahernandezburzaco/"><img className="social-logo" src={process.env.PUBLIC_URL +"../images/facebook.svg"} alt="Facebook link" loading="lazy"/></a>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-center text-center">
                    <p>Ubicación: Gral. Miguel Soler 1013, esquina Molina Campos</p>
                    <iframe title="Ubicación desde Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409.43571227111886!2d-58.3990671490298!3d-34.81887887168915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd3611a9580db%3A0x411dc07fa7feaf3e!2sFarmacia%20Hernandez!5e0!3m2!1ses-419!2sar!4v1620427545333!5m2!1ses-419!2sar" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </li>
                <li className="icon-text">
                    <img className="social-logo" src={process.env.PUBLIC_URL +"/images/phone.png"} alt="Número de teléfono de linea" loading="lazy"/> 
                    <p>7511-0372</p>
                </li>
                <li className="icon-text">
                    <img className="social-logo" src={process.env.PUBLIC_URL +"/images/whatsapp.svg"} alt="Número de teléfono celular" loading="lazy"/>
                    <p>+54 9 11 6815-3147</p>
                </li>
            </ul>
        </footer>
    )
}
export default Footer