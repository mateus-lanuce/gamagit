import React, { useState } from 'react';
import * as Styled from './styled';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const [ usuario, setUsuario ] = useState('');
  const [ error, setError ] = useState(false);
  const history = useHistory();

  async function handlePesquisa() {
    try {

      const response = await axios.get(`https://api.github.com/users/${usuario}/repos`);
      const repositories = response.data;
      const repositoriesName = [];
      repositories.forEach((repository) => {
        repositoriesName.push(repository.name);
      });
  
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setError(false);
      history.push('/repositories');

    } catch (error) {
      setError(true);
    }
  }

  return (
    <Styled.HomeContainer>
      <Styled.Content>
        <Styled.Input className="usuarioInput" placeholder="Usúario" value={usuario} onChange={event => setUsuario(event.target.value)} />
        <Styled.Button type="button" onClick={handlePesquisa}>Pesquisar</Styled.Button>
      </Styled.Content>
        { error ? <Styled.ErrorMsg>Usuário não encontrado</Styled.ErrorMsg> : ''}
    </Styled.HomeContainer>
  );
}

