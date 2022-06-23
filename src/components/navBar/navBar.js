import Logo from "../../img/47396903_375105129902786_3881801462283501568_n.jpg"
import {Nav} from "react-bootstrap"
import { Link } from "react-router-dom"
import "./style-modules.css"
export function NavBar(){
  return(
    <>
      <div className="NavBar">
        <Link to="/"><img src={Logo} alt="LogoCliniFisio" className="logoCliniFisio"/></Link>
        <ul className="NavUl">
          <li className="li1">
            <h6>
              <Nav.Link style={{textdDcoration: "none", color: "#64978B", fontSize: "14px", fontWeight: "600", padding: "0"}} href="https://api.whatsapp.com/send?phone=554591451430&app=facebook&entry_point=page_cta&fbclid=IwAR0-jamJQIsFuAl3LMSuPjQSmvp3AVOWUyEfooZ730PB8JWe-euVQNwlHY8" className="link">
                WhatsApp
              </Nav.Link>
            </h6>
          </li>
          <li className="li2"><h6><Link to="/sobrenos" className="link">Sobre nós</Link></h6></li>
          <li><h6><Link to="/tratamentos" className="link">Tratamentos</Link></h6></li>
        </ul>
      </div>
    </>
  )
}
