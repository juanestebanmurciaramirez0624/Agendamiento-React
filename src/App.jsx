import './App.css'
import logo from './assets/img/logo.png'

function App() {
  return (
    <>
      <section className="header" id="home">
        <nav>
          <a className='logo'>
            <img src={logo} alt="Logo"></img>
            TD<span className='logoText'>Online</span>
          </a>
          {/*
                    <div className="nav-links" id="navLinks">
            <ul>
              <li>
                <a href="#home">Inicio</a>
              </li>
              <li>
                <a href="#home">Inicio</a>
              </li>
              <li>
                <a href="#about">Sobre Nosotros</a>
              </li>
              <li>
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
          */}
        </nav>
        <div className="text-box">
          <h1>Tu Doctor Online</h1>
          <p>
          En nuestra plataforma de educación en línea, nos dedicamos a formar docentes 
          de manera virtual. Buscamos la excelencia educativa y valores éticos sólidos 
          en nuestros estudiantes. Creemos que la educación en línea trasciende las aulas 
          físicas y tiene un impacto transformador en la sociedad. Nuestra misión es 
          proporcionar una educación de calidad en línea, accesible desde cualquier 
          lugar y en cualquier momento, contribuyendo así al desarrollo continuo de la 
          sociedad
          </p>
          <button href="" className="hero-btn" id="openLogin">
            Login
          </button>
        </div>
      </section>
    </>
  )
}


export default App
