import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PokemonLisInterface, listPokemons } from '../pokemon/services/listsPokemons';
import { getPokemonDetails } from '../pokemon/services/getPokemonDetails';
import { Welcome } from '../pokemon/interfaces/PokemonDetail';

interface PokedexProps {

}

const Pokedex: React.FC<PokedexProps> = () => {

    /* Variaveis */
    const [pokemons,setPokemons] = useState<PokemonLisInterface[]>([]);
    const [selectedPokemon, setselectedPokemon] = useState<PokemonLisInterface | undefined >(undefined);
    const [selectedPokemonDetails, setselectedPokemonDetails] = useState<Welcome | undefined >(undefined);


    /* Requisições */
    useEffect(() => {
        listPokemons().then(( response ) => setPokemons(response.results))
    },[]);

    useEffect(() => {
        if(!selectedPokemon) return;

        getPokemonDetails(selectedPokemon.name).then(( response ) => setselectedPokemonDetails(response))
    },[selectedPokemon]);


    
    return (
        <div>
            <h1>
                pokedex
            </h1>
            Pokemons: 
            {pokemons.map((pokemon) => <button onClick={() => setselectedPokemon(pokemon)}>{pokemon.name}</button>)}
   
            
            <h2>Pokemon selecionado: {selectedPokemon?.name || "Nenhum Pokemon selecionado"}</h2>
            {JSON.stringify(selectedPokemonDetails, undefined, 2)}

        </div>

    );
};

export default Pokedex;