import instagram from '../../assets/img/instagram.svg'
import facebook from '../../assets/img/facebook.svg'
import youtube from '../../assets/img/youtube.svg'
import github from '../../assets/img/github.svg'
import logoFooter from '../../assets/img/conta-bemol-e-bemol 1.png'

export default function Footer() {
  return (
    <div>
      <div>
        <a href="" target="_new">
          {' '}
          <img src={instagram} alt="instagram logo" />
        </a>
        <a href="" target="_new">
          <img src={facebook} alt="facebook logo " />
        </a>
        <a href="" target="_new">
          <img src={youtube} alt="youtube logo" />
        </a>
        <a href="" target="_new">
          <img src={github} alt="github logo" />
        </a>
      </div>
      <div>
        <img src={logoFooter} alt="logo bemol" />
      </div>
      <div>
        <p>
          Copyright{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-c-circle"
            viewBox="0 0 16 16"
          >
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
          </svg>{' '}
          2022 - Desenvolvido por <a href="https://social-media-shortcuts-thmoreiracosta.vercel.app/" target="_new">Thiago Costa</a> - Evento Dev da Kenzie Academy  -  Todos os direitos reservados.
        </p>
      </div>
    </div>
  )
}
