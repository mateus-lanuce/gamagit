import React, { useState } from 'react';
import * as Styled from './styled';
import axios from 'axios';

export default function Home() {
  const [ usuario, setUsuario ] = useState('');

  async function handlePesquisa() {
    const response = await axios.get(`https://api.github.com/users/${ usuario }/repos`);
    console.log(response.data);
  }

  return (
    <Styled.Container>
      <Styled.Input className="usuarioInput" placeholder="Usúario" value={ usuario } onChange={ event => setUsuario(event.target.value) } /> 
      <Styled.Button type="button" onClick={ handlePesquisa }>Pesquisar</Styled.Button>
    </Styled.Container>
  );
}

