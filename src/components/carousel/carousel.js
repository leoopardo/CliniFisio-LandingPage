import { Carousel } from "react-bootstrap";
import "./style-modules.css"
import seuCorpo from "../../img/seuCorpo.png"
import pilates from "../../img/pilates.png"
import cuidando from "../../img/Cuidando.png"
export function SecCarousel() {
    return ( 
        <Carousel>
                <Carousel.Item >
                    <img
                    id="carouselImg"
                    className="d-flex justify-content-center"
                    src={cuidando}  
                    
                    alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    id="carouselImg"
                    className="d-flex justify-content-center"
                    src={seuCorpo}
                    alt="Second slide"
                    />

                    <Carousel.Caption>           
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    id="carouselImg"
                    className="d-flex justify-content-center"
                    src={pilates}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
     );
}
