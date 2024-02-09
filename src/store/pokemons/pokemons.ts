import { SimplePokemon } from '@/pokemons';
import { createSlice } from '@reduxjs/toolkit'


interface PokemonsState {
    [key: string]: SimplePokemon
}

const initialState : PokemonsState = {
    '1': { id: '1', name: 'bulbasaur' },
    '3': { id: '3', name: 'asas' },
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {}
});

export const {  } = pokemonsSlice.actions

export default pokemonsSlice.reducer