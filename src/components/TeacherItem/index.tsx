import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/61164438?s=460&u=adeab63e92596927174349d3227ed3613f40f1cd&v=4"
          alt="Rafael Vieira"
        />
        <div>
          <strong>Rafael Vieira</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Especialista em química avançada.
        <br />
        <br />
        Entusiasta dos elementos que compõem a cadeia estrutural da quḿica.
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
