import regina from '../../assets/img/Regina 1.png'
import vg1 from '../../assets/img/Vantagens01.png'
import vg2 from '../../assets/img/Vantagens02.png'
import vg3 from '../../assets/img/Vantagens03.png'
import vg4 from '../../assets/img/Vantagens04.png'
import vg5 from '../../assets/img/Vantagens05.png'
import vg6 from '../../assets/img/Vantagens06.png'
import './style.css'

export default function SectionOne () {
  return (
    <>
      <div className='container-section'>
        <div className='container-regina'>
          <h2>
            A Conta Bemol é a conta digital que traz benefícios exclusivos para
            o cliente Bemol.
          </h2>

          <img id='regina' src={regina} alt='Dona Regina sorrindo' />
        </div>
        <div className='container-pontos'>
          <div>
            <div>
              <img src={vg1} alt='pontos acumulados' />
              <span>Acúmulo de pontos de bônus</span>
            </div>
            <div>
              <img src={vg2} alt='atendimento presencial' />
              <span>Atendimento nas Lojas</span>
            </div>
            <div>
              <img src={vg3} alt='pagamento parcelado' />
              <span>Pagamento de parcelas Bemol</span>
            </div>
          </div>

          <div>
            <div>
              <img src={vg4} alt='fazer depósito' />
              <span>Depósito nas Lojas Bemol e Bemol Farma</span>
            </div>
            <div>
              <img src={vg5} alt='anuidade zero' />
              <span>Zero anuidade</span>
            </div>
            <div>
              <img src={vg6} alt='transferia via pix' />
              <span>Transferência via PIX</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
