import React, { useEffect, useState } from 'react';
import * as Styled from './styled';
import { useHistory } from 'react-router-dom';
 
export default function Repositories() {
	const [ repositories, setRepositories ] = useState([]);
	const history = useHistory();

	useEffect(() => {
		let repositoriesName = localStorage.getItem('repositoriesName');
		if (repositoriesName !== null) {
			repositoriesName = JSON.parse(repositoriesName);
			setRepositories(repositoriesName);
			localStorage.clear();
		} else {
			history.push('/');
		}
	}, []);


	return (
		<Styled.Container>
			<Styled.Title>Repósitorios</Styled.Title>
			<Styled.List>
				{ repositories.map((repository) => {
					return (
						<Styled.ListItem>Repósitorio: { repository }</Styled.ListItem>
					)}) 
				}
			</Styled.List>

			<Styled.LinkHome to='/'>Voltar</Styled.LinkHome>
		</Styled.Container>
	);
}
