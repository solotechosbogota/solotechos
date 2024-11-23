import React from 'react';
import './styles/contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container-contact grilla">
        <h2 className="subtitulo">Envíanos un email</h2>

        <form
          action="https://formsubmit.co/solotechosbogota@gmail.com"
          method="POST"
        >
          <input name="Nombre" type="text" placeholder="Nombre" required />
          <input
            name="Número"
            type="text"
            placeholder="Número de contácto"
            required
          />
          <input name="Motivo" type="text" placeholder="Motivo" required />
          <textarea
            name="Texto"
            placeholder="Dejános un mensaje"
            cols="30"
            rows="7"
          ></textarea>
          <button>Envíar</button>

          <input
            type="hidden"
            name="_next"
            value="https://solotechosbogota.com/"
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
      </div>
    </section>
  );
};

export default Contact;
