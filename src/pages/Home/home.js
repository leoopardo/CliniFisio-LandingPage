import { Card } from "../../components/cards/cards";
import { SecCarousel } from "../../components/carousel/carousel";
import "./style-modules.css"
import tratamentos from "../../img/tratamentos.png"
import profissionais from "../../img/profissionais.png"
import clinica from "../../img/clinica.png"
import contato from "../../img/chat.png"
export function Home() {
    return ( 
        <>
          <section className="d-flex justify-content-center" id="carouselSection" >
              <SecCarousel/>
          </section>  
          <div className="cards">
          <Card 
            CardImg={tratamentos} 
            CardName="Tratamentos"
          />
          <Card 
            CardImg={profissionais} 
            CardName="Profissionais"
          />
          <Card 
            CardImg={clinica} 
            CardName="Clínica"
          />
          <Card 
            CardImg={contato} 
            CardName="Contato"
          />
          </div>
        
        </>
     );
}
