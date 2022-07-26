import logo from '../../assets/img/ContaBemol-b 1.png';
import celular from '../../assets/img/Phone-Spotlight-Desktop 1.png';

export default function Header() {
  return (
    <div>
      <header>
        <img src={logo} alt="logo Bemol cabeçalho" />
      </header>
      <main>
        <div>
          <h1>Chegou a conta digital da Bemol</h1>
          <p>
            Pague parcelas Bemol pelo celular, deposite nas Lojas Bemol, Bemol
            Farma, Mercado Bemol e acumule muitos pontos de bônus!
          </p>
          <a href="https://www.bemol.com.br/contabemol" target="_new">Abra sua conta Bemol</a>
        </div>
        <div>
          <img src={celular} alt="smartphone" />
        </div>
      </main>
    </div>
  )
}
