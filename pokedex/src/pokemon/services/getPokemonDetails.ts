import axios from "axios";
import { Welcome } from "../interfaces/PokemonDetail"

export interface PokemonLisInterface{
    name: string;
    url: string;
}

interface GetPokemonDetailsInterface{
    cont: number;
    next: null | string;
    previous: null | string;
    results: PokemonLisInterface[];
}




/* SERVICES */

/* função assincrona */ 
export async function getPokemonDetails(name: string): Promise<Welcome>{
    const endpoint =`${process.env.REACT_APP_POKEAPI}/pokemon/${name}`;

    const response = await axios.get<Welcome>(endpoint);

    return response.data;
}

