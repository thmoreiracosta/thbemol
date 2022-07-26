import pstar from '../../assets/img/PontosBonus 1.svg'
import pstars from '../../assets/img/Estrelas.png'

export default function SectionThree() {
  return (
    <div>
      <h2>Simulador de Bônus Bemol</h2>
      <div>
        <div>
          <label>Valor</label>
          <span>R$</span>
          <input type="text" placeholder="0,00"></input>
          <span>A cada R$ 40,00 você ganha 1 ponto de Bônus Bemol</span>
        </div>
        <div>
          <label>Tempo</label>
          <span>0 meses</span>
          <input type="range" min="0" max="12"></input>
        </div>
      </div>

      <div>
        <div>
          <span>Você vai ganhar por dia:</span>
          <div>
            <img src={pstar} alt="estrelinha" />
            <span>0</span>
          </div>
        </div>

        <div>
          <span>Pontos de bônus Bemol em meses</span>
          <div>
            <img src={pstars} alt="3 estrelinhas" />
            <span>0</span>
          </div>
          <span>pontos de bônus Bemol</span>
        </div>
      </div>

      <div>
        <h3>Descubra como é fácil simplificar sua vida financeira.</h3>
        <div>
          <a href="https://www.bemol.com.br/contabemol" target="_new">
            Abra sua conta Bemol
          </a>
          <a href="https://www.bemol.com.br/faq-contabemol" target="_new">
            Perguntas Frequentes
          </a>
        </div>
      </div>
    </div>
  )
}
