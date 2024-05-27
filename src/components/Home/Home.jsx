import whiteCake from "../../assets/whiteCake.png"
import "./home.css"
const Home = () => {
  return (
    <section id="home">
      <div className="shape"></div>
      <div id="cta">
          <h1 className="title">
         <span className="blessName">BlessCake</span> 
         <br></br>  Campina Grande
          </h1>
          <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus hendrerit mollis.
          </p>
          <div id="cta_buttons">
            <a href="#cardapio" className="btn-default">
              Veja nosso cardápio
            </a>
            <a href="tel:+558398675-1748" id="phone_button">
              <button className="btn-default">
                <i className="fa-solid fa-phone">
                </i>
              </button>
              (83)98675-1748
            </a>
          </div>

          <div className="social-media-buttons">
              <a href="">
              <i className="fa-brands fa-whatsapp">
                </i>
              </a>
              <a href="">
              <i className="fa-brands fa-instagram">
                </i>
              </a>
              <a href="">
              <i className="fa-brands fa-facebook">
                </i>
              </a>
          </div>
      </div>
      <div id="banner">
            <img className="blessCake" src={whiteCake}></img>
          </div>
    </section>
  )
}

export default Home