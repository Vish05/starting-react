import React, {useState, useEffect} from "react";
import styled from '@emotion/styled'


import "./App.css";
import PokemonRows from "./components/PokemonRows";
import PokemonInfo from "./components/PokemonInfo";

const Title = styled.h1`
	text-align: center
`;
const TwoColumnLayout = styled.div`
	display:"grid";
	gridTemplateColumns:"70% 30%";
	gridColumnGap: "1rem";
`;

const Contaier = styled.div`
	margin: auto;
	width: 800px;
	paddingTop: 1rem;
`;

function App() {
	const [filter,setFilter] = useState("");
	const [pokemon, setPokemon] = useState([]);	
	const [selectedItem, setSelectedItem] = useState(null);	

	useEffect(() => {
		fetch('https://course-api.com/react-tours-project')
		.then(resp => resp.json())
		.then(data => setPokemon(data));
	}, [filter]) 
  	return (
		<Contaier>
			<Title>Pokemon Search</Title>
			<TwoColumnLayout>
				<div>
					<input value={filter} onChange={(e) => setFilter(e.target.value) }/>
				
					<table width="100%">
						<thead>
							<tr>
								<th>Name</th>
								<th>Type</th>
							</tr>

						</thead>
						<tbody>
							{pokemon.filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase())).slice(0,10).map((pokemon) => (
								<PokemonRows 
									pokemonrow={pokemon} 
									key={pokemon.id}
									onSelect={(pokemon) => setSelectedItem(pokemon) } />
							))}
						</tbody>
					</table>
				</div>
				{selectedItem && (
					<PokemonInfo {...selectedItem}/>
				)}
				
			</TwoColumnLayout>
		</Contaier>
  	);
}

export default App;