import { SecCarousel } from "../../components/carousel/carousel";
import "./style-modules.css"

export function Home() {
    return ( 
        <>
          <section className="d-flex justify-content-center" id="carouselSection" >
              <SecCarousel/>
    
          </section>  
        </>
     );
}
