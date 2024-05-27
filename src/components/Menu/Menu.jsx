import bless1 from "../../assets/ blessCake1.jpeg"
import "../Menu/menu.css"
const Menu = () => {
  return (
    <section id="menu">
      <h2 className="section-title">

        Cardapio
      </h2>
      <h3 className="section-subtitle">
        Um pouco do nosso trabalho!
      </h3>
      <div id="dishes">
        <div className="dish">
          <div className="dish-cake">
          <i className="fa-solid fa-cake-candles"></i>
          </div>
          <img className="dish-image" src={bless1} alt=""></img>
          <h3 className="dish-title">Lorem ipsum</h3>
          <span className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          <div className="dish-buy">
            <button className="btn-default">
             <i className="fa-solid fa-basket-shopping"></i>
            </button>
          </div>
        </div>
        <div className="dish">
          <div className="dish-cake">
          <i className="fa-solid fa-cake-candles"></i>
          </div>
          <img className="dish-image" src={bless1} alt=""></img>
          <h3 className="dish-title">Lorem ipsum</h3>
          <span className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          <div className="dish-buy">
            <button className="btn-default">
             <i className="fa-solid fa-basket-shopping"></i> 
            </button>
          </div>
        </div>
        <div className="dish">
          <div className="dish-cake">
          <i className="fa-solid fa-cake-candles"></i>
          </div>
          <img className="dish-image" src={bless1} alt=""></img>
          <h3 className="dish-title">Lorem ipsum</h3>
          <span className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          <div className="dish-buy">
            <button className="btn-default">
             <i className="fa-solid fa-basket-shopping"></i>
            </button>
          </div>
        </div>
        <div className="dish">
          <div className="dish-cake">
          <i className="fa-solid fa-cake-candles"></i>
          </div>
          <img className="dish-image" src={bless1} alt=""></img>
          <h3 className="dish-title">Lorem ipsum</h3>
          <span className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          <div className="dish-buy">
            <button className="btn-default">
             <i className="fa-solid fa-basket-shopping"></i></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu