import axios from "axios";

export interface PokemonLisInterface{
    name: string;
    url: string;
}

interface listPokemonsInterface{
    cont: number;
    next: null | string;
    previous: null | string;
    results: PokemonLisInterface[];
}


/* SERVICES */

/* função assincrona */ 
export async function listPokemons(): Promise<listPokemonsInterface>{
    const endpoint =`${process.env.REACT_APP_POKEAPI}/pokemon`;

    const response = await axios.get<listPokemonsInterface>(endpoint);

    return response.data;
}