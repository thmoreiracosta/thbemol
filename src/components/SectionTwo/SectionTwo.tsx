import star from '../../assets/img/Estrela 1.svg'
import starPontos from '../../assets/img/PontosBonus 1.svg'
import grafic from '../../assets/img/GifJornada 1.svg'
import smart from '../../assets/img/TelaPontosBonus 1.svg'

export default function SectionTwo() {
  return (
    <div>
      <div>
        <div>
          <img src={star} alt="Estrelinha bemol pontos" />
          <p>
            Acumular muitos <span>pontos de bônus</span> é oportunidade
          </p>
        </div>

        <div>
          <div>
            <p>
              Com saldo em conta, você aculuma pontos de bônus Bemol todos os
              dias.
            </p>
          </div>
          <div>
            <p>
              Ao depositar seus primeiros <span>R$ 20</span> você acumula{' '}
              <span>1 ponto</span> de bônus após 24h.
            </p>
            <p>
              Com <span>R$ 60</span> você acumula <span>2 pontos</span> de bônus
              após 24h.
            </p>
            <p>
              Com <span>R$ 100</span> você acumula <span>3 pontos</span> de
              bônus após 24h.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <p>
              Ganhe uma pontuação extra ao finalizar o cadastro, fazer o
              primeiro depósito e realizando pagamentos de parcelas Bemol pelo
              aplicativo.
            </p>
            <img src={grafic} alt="" />
          </div>
          <div>
            <div>
              <img src={starPontos} alt="estrelinha pontuação" />
              <strong>1.000</strong>
              <span>pontos</span>
              <span>Finalizando o cadastro</span>
            </div>
            <div>
              <img src={starPontos} alt="estrelinha pontuação" />
              <strong>500</strong>
              <span>pontos</span>
              <span>Primeiro depósito</span>
            </div>
            <div>
              <img src={starPontos} alt="estrelinha pontuação" />
              <strong>30</strong>
              <span>pontos</span>
              <span>Pagando parcelas</span>
            </div>
          </div>
        </div>
        <div>
          <img src={smart} alt="" />
        </div>
      </div>
    </div>
  )
}
