import { Link } from 'react-router-dom'

// Página principal em português com perfil, habilidades e galeria de projetos.
const HomePt = () => (
  <>
    <div id="header-container">
      <header id="hd-container">
        <a href="https://github.com/JohnSilva98" target="_blank" rel="noreferrer">
          <h1>
            Jonathan Silva <span className="role">Desenvolvedor Front-End</span>
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
          {/* Área de contato e habilidades. */}
          <div id="contato">
            <img src="/img/prof_photo.jpg" alt="profile" />
            <p>Contato</p>
            <a href="mailto:bsilva.jonathan@outlook.com" id="email">
              <i className="fa-solid fa-envelope"></i>
              bsilva.jonathan@outlook.com
            </a>
          </div>
          <div id="habilidades">
            <p id="hab">Habilidades</p>
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
            <Link to="/en" id="English" className="switch">
              English Version
            </Link>
          </div>
        </aside>
      </div>
      <div id="content-container">
        <h2>Bem-Vindo ao meu Portfólio</h2>
        <br />
        <p className="description">
          Muito prazer! Me chamo Jonathan Silva, sou um
          <span className="highlight">Desenvolvedor Front-End</span>, me formei em Análise e
          Desenvolvimento de Sistemas em 2021 pela FMU e no momento estou estudando
          <span className="highlight">HTML, CSS, Javascript e React, </span>e ficarei muito feliz
          de mostrar alguns dos meus projetos! Todos são funcionais, basta clicar na
          miniatura para abrir em uma nova guia.
        </p>
        <br />
        <h3>Confira abaixo alguns dos meus projetos 😁</h3>
        <br />
        {/* Lista de projetos do portfólio com links para os mini-sites originais. */}
        <section className="projects-gallery">
          <div className="project">
            <a href="/Projetos/Gerador QR_Code/index.html" target="_blank" rel="noreferrer">
              <img src="/Portfólio/assets/QRCode.png" alt="Gerador de QR_Code" />
            </a>
            <p className="projectDescription">
              Um projeto simples o qual recebe um link qualquer e através de uma API gera um
              qrcode para acessar o link desejado, pode ser usado para gerar códigos de
              pagamento, pesquisa de satisfação, acessar perfil, conectar a redes Wi-Fi etc.. a
              api utilizada foi a QR Code Generator:{' '}
              <a href="https://goqr.me/api/" target="_blank" className="link" rel="noreferrer">
                Acesse o site oficial da API aqui
              </a>
            </p>
          </div>
          <div className="project">
            <a href="/Projetos/Gerador de senhas/index.html" target="_blank" rel="noreferrer">
              <img
                src="/Portfólio/assets/geradorDeSenha.png"
                width="100px"
                alt="gerador de senha"
              />
            </a>
            <p className="projectDescription">
              Cria senhas seguras e personalizadas com letras, números e símbolos, ajudando a
              proteger suas contas online. Permite o usuario definir o tamanho da senha e a sua
              força, selecionando se a senha terá letras, números e símbolos
            </p>
          </div>
          <div className="project">
            <a href="/Projetos/Dev Notes/index.html" target="_blank" rel="noreferrer">
              <img src="/Portfólio/assets/DevNotes.png" alt="Formulario" />
            </a>
            <p className="projectDescription">
              Um aplicativo simples de anotações para desenvolvedores, que permite criar,
              visualizar e excluir notas diretamente no navegador. Também permite fixar e
              desafixar notas, tudo é armazenado e controlado via LocalStorage
            </p>
          </div>
          <div className="project">
            <a href="/Projetos/Pagina_instagram/homeInsta.html" target="_blank" rel="noreferrer">
              <img src="/Portfólio/assets/Clone_Insta.png" alt="Clone instagram" />
            </a>
            <p className="projectDescription">
              Uma réplica da interface principal do Instagram, desenvolvida com HTML e CSS para
              praticar layout responsivo e estilização moderna. Conta com links para páginas
              como, logar com facebook, esqueceu sua senha, acesse a loja para baixar o app
              entre outras.
            </p>
          </div>
          <div className="project">
            <a href="/Projetos/calculadoraIMC/index.html" target="_blank" rel="noreferrer">
              <img src="/Portfólio/assets/calcIMC.png" alt="calculadoraIMC" />
            </a>
            <p className="projectDescription">
              Calculadora de Índice de Massa Corporal (IMC) que exibe o resultado e a
              classificação de forma dinâmica com base nos valores inseridos. o Calculo de IMC
              é: peso / (altura x altura).
            </p>
          </div>
          <div className="project">
            <a href="/Projetos/Gerador box-shadow/index.html" target="_blank" rel="noreferrer">
              <img src="/Portfólio/assets/geradorBoxShadow.png" alt="Host HDC" />
            </a>
            <p className="projectDescription">
              Ferramenta interativa para criar sombras CSS personalizadas em tempo real,
              permitindo copiar o código pronto para seus projetos. ou erro. Muito util para
              agilizar na criação de sombras
            </p>
          </div>
          <div className="project">
            <a href="/Projetos/Guess the number/index.html" target="_blank" rel="noreferrer">
              <img src="/Portfólio/assets/GuessTheNumber.png" alt="Guess the number" />
            </a>
            <p className="projectDescription">
              Jogo interativo onde o usuário tenta adivinhar o número secreto gerado
              aleatoriamente pelo sistema, com feedback visual de acerto
            </p>
          </div>
          <div className="project">
            <a href="/Projetos/RandomUser_Generator/index.html" target="_blank" rel="noreferrer">
              <img src="/Portfólio/assets/randoUserGenerator.png" alt="Random user generator" />
            </a>
            <p className="projectDescription">
              Gera perfis aleatórios de usuários (nome, foto, e-mail etc.) usando uma API
              pública, ótimo para testar layouts,simular dados reais e praticar o consumo de
              dados de API.
              <a
                href="https://randomuser.me/"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Acesse a documentação da API aqui
              </a>
            </p>
          </div>
          <div className="project">
            <a href="/Projetos/Tip-Calculator/index.html" target="_blank" rel="noreferrer">
              <img src="/Portfólio/assets/TipCalculator.png" alt="Tip Calculator" />
            </a>
            <p className="projectDescription">
              Calcula automaticamente o valor da gorjeta e o total da conta com base no
              percentual escolhido e número de pessoas.
            </p>
          </div>
        </section>
      </div>
    </main>
  </>
)

export default HomePt
