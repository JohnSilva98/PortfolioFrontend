import { Link } from 'react-router-dom'

// English landing page with profile intro, skills sidebar, and project gallery.
const HomeEn = () => (
  <>
    <div id="header-container">
      <header id="hd-container">
        <a href="https://github.'com'/JohnSilva98" target="_blank" rel="noreferrer">
          <h1>
            Jonathan Silva <span className="role">Front-End Developer</span>
          </h1>
        </a>
        <div id="social-media">
          <a
            href="https://www.facebook.com/johnjohnsons2/"
            className="logo"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook" id="fb"></i>
          </a>
          <a
            href="https://www.instagram.com/silvajohnyes/"
            className="logo"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jonathansilva98"
            className="logo"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/johnsilva98"
            className="logo"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </header>
    </div>
    <main id="main-container">
      <div id="aside-content">
        <aside>
          {/* Contact card and skill levels. */}
          <div id="contato">
            <img src="/img/prof_photo.jpg" alt="profile" />
            <p>Contact</p>
            <a href="mailto:bsilva.jonathan@outlook.com" id="email">
              <i className="fa-solid fa-envelope"></i>
              bsilva.jonathan@outlook.com
            </a>
          </div>
          <div id="habilidades">
            <p id="hab">Skills</p>
            <ul id="Skills">
              <p id="reactNative" className="title">
                React native
              </p>
              <li id="rn"></li>
              <p id="reactjs" className="title">
                React JS
              </p>
              <li id="rjs"></li>
              <p id="ht" className="title">
                HTML
              </p>
              <li id="html"></li>
              <p id="css3" className="title">
                CSS
              </p>
              <li id="css"></li>
              <p id="javaScript" className="title">
                Javascript
              </p>
              <li id="js"></li>
              <p id="py" className="title">
                NextJS
              </p>
              <li id="NextJS"></li>
              <p id="win" className="title">
                Windows
              </p>
              <li id="windows"></li>
              <p id="macOS" className="title">
                MacOS
              </p>
              <li id="mac"></li>
            </ul>
            <Link to="/" id="portugues" className="switch">
              Switch to Portuguese
            </Link>
          </div>
        </aside>
      </div>
      <div id="content-container">
        <h2>Welcome to my Portfolio</h2>
        <br />
        <p className="description">
          Hi there! 👋 I’m <span className="highlight">Jonathan Silva</span>, a passionate{' '}
          <span className="highlight">Front-End Developer</span> with a degree in Systems
          Analysis and Development (2021). I’m currently focused on improving my skills in{' '}
          <span className="highlight">HTML, CSS, and JavaScript</span>, and I’m excited to share
          some of my favorite projects with you. All of them are{' '}
          <strong>fully functional</strong> — just click on a thumbnail to open and explore it in
          a new tab!
        </p>
        <br />
        <h3>Check out some of my projects 😁</h3>
        <br />
        {/* Project gallery linking to each static project. */}
        <section className="projects-gallery">
          <div className="project">
            <a href="/Projetos/Gerador QR_Code/index.html" target="_blank" rel="noreferrer">
              <img src="/Portfólio/assets/QRCode.png" alt="QR Code Generator" />
            </a>
            <p className="projectDescription">
              A simple project that receives any link and, through an API, generates a QR code
              to access the desired URL. It can be used to create payment codes, satisfaction
              surveys, profile links, Wi-Fi access, and more. The API used was{' '}
              <strong>QR Code Generator</strong>:{' '}
              <a href="https://goqr.me/api/" target="_blank" className="link" rel="noreferrer">
                Access the official API website here
              </a>
              .
            </p>
          </div>

          <div className="project">
            <a href="/Projetos/Gerador de senhas/index.html" target="_blank" rel="noreferrer">
              <img
                src="/Portfólio/assets/geradorDeSenha.png"
                width="100px"
                alt="Password Generator"
              />
            </a>
            <p className="projectDescription">
              Creates secure and customizable passwords with letters, numbers, and symbols to
              help protect your online accounts. The user can define the password length and
              strength by selecting which character types to include.
            </p>
          </div>

          <div className="project">
            <a href="/Projetos/Dev Notes/index.html" target="_blank" rel="noreferrer">
              <img src="/Portfólio/assets/DevNotes.png" alt="Dev Notes App" />
            </a>
            <p className="projectDescription">
              A simple note-taking app for developers that allows creating, viewing, and
              deleting notes directly in the browser. It also lets you pin and unpin notes —
              everything is stored and managed via <strong>LocalStorage</strong>.
            </p>
          </div>

          <div className="project">
            <a href="/Projetos/Pagina_instagram/homeInsta.html" target="_blank" rel="noreferrer">
              <img src="/Portfólio/assets/Clone_Insta.png" alt="Instagram Clone" />
            </a>
            <p className="projectDescription">
              A replica of Instagram’s main interface, built with HTML and CSS to practice
              responsive layouts and modern styling. Includes links such as “Login with
              Facebook”, “Forgot password?”, and “Download the app”.
            </p>
          </div>

          <div className="project">
            <a href="/Projetos/calculadoraIMC/index.html" target="_blank" rel="noreferrer">
              <img src="/Portfólio/assets/calcIMC.png" alt="BMI Calculator" />
            </a>
            <p className="projectDescription">
              A Body Mass Index (BMI) calculator that dynamically displays the result and
              classification based on user input. The BMI formula used is:{' '}
              <strong>weight / (height × height)</strong>.
            </p>
          </div>

          <div className="project">
            <a href="/Projetos/Gerador box-shadow/index.html" target="_blank" rel="noreferrer">
              <img src="/Portfólio/assets/geradorBoxShadow.png" alt="Box Shadow Generator" />
            </a>
            <p className="projectDescription">
              An interactive tool to create custom CSS box shadows in real time, allowing users
              to copy the ready-to-use code. Very useful for speeding up UI styling and design
              consistency.
            </p>
          </div>

          <div className="project">
            <a href="/Projetos/Guess the number/index.html" target="_blank" rel="noreferrer">
              <img src="/Portfólio/assets/GuessTheNumber.png" alt="Guess the Number Game" />
            </a>
            <p className="projectDescription">
              An interactive game where the user tries to guess a secret number randomly
              generated by the system, with visual feedback on success.
            </p>
          </div>

          <div className="project">
            <a href="/Projetos/RandomUser_Generator/index.html" target="_blank" rel="noreferrer">
              <img
                src="/Portfólio/assets/randoUserGenerator.png"
                alt="Random User Generator"
              />
            </a>
            <p className="projectDescription">
              Generates random user profiles (name, photo, email, etc.) using a public API —
              perfect for testing layouts, simulating real data, and practicing API integration.
              <a
                href="https://randomuser.me/"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Access the API documentation here
              </a>
              .
            </p>
          </div>

          <div className="project">
            <a href="/Projetos/Tip-Calculator/index.html" target="_blank" rel="noreferrer">
              <img src="/Portfólio/assets/TipCalculator.png" alt="Tip Calculator" />
            </a>
            <p className="projectDescription">
              Automatically calculates the tip amount and total bill based on the selected
              percentage and number of people. Helps users easily split the bill and determine
              how much each person should pay.
            </p>
          </div>
        </section>
      </div>
    </main>
  </>
)

export default HomeEn
