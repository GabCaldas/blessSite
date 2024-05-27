import wave from "../../assets/wave (1).svg"
import "../Footer/footer.css"
const Footer = () => {
  return (
   <footer>
    <img src={wave}></img>
    <div id="footer_items">
      <span id="copyright">
        &copy; 2024 Gabriel Caldas
      </span>
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
   </footer>
  )
}

export default Footer