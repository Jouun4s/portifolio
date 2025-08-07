import './Hero.css';
import suaFoto from '../assets/Foto_capa.png'; // Substitua com o nome real

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-greeting">Ola</div>
      <h1 className="hero-title">
        Eu sou <span className="highlight">João Victor</span>,<br />
        Designer de produtos
      </h1>
      
      <div className="hero-img-wrapper">
        <img src={suaFoto} alt="Sua foto" className="hero-img" />
      </div>

      <div className="hero-review">
        <p>"Seu design excepcional garante o sucesso do nosso site. Altamente recomendado!"</p>
      </div>

      <div className="hero-experience">
        <div className="stars">★★★★★</div>
        <p><strong>5 Anos</strong><br /> de Experiencia</p>
      </div>

      <div className="hero-buttons">
        <button className="btn primary">Portfolio ↗</button>
        <button className="btn secondary">Venha me conheçer</button>
      </div>
    </section>
  );
}