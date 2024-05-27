import graciCake from "../../assets/graciCake.png"
import "../About/about.css"

const About = () => {
  return (
    <section id="about">
      <div className="us_content">
        <h1 className="section-title">Sobre Nós</h1>
        <img src={graciCake} alt="Graci Cake" className="us_image"/>
      </div>
      <div className="us_description_content">
        <p className="us_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velit ipsum, luctus at convallis eget, dictum a sapien. 
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus in euismod ligula, luctus posuere diam. 
          Praesent imperdiet et nisl in tristique. Maecenas mattis elit augue, sit amet aliquam elit ornare sed. 
          Maecenas facilisis massa et diam dictum sollicitudin. Praesent ipsum diam, elementum a consequat vel, fermentum at tortor.
        </p>
      </div>
    </section>
  )
}

export default About
