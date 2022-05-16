import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p className="footer">
          <a href="https://github.com/CaioImbroisi" target="_blank" rel="noreferrer">Caio Imbroisi</a>
          {' -  Estudante da '}
          <a href="http://betrybe.com" target="_blank" rel="noreferrer">Trybe</a>
          {' - Turma 20-B '}

        </p>
      </footer>
    );
  }
}

export default Footer;
