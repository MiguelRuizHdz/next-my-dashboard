import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';


interface PokemonsState {
    [key: string]: SimplePokemon
}

const getInitialState = (): PokemonsState  => {
  const favorites = JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}' );
  return favorites;
}

const initialState : PokemonsState = {
  ...getInitialState(),
    // '1': { id: '1', name: 'bulbasaur' },
    // '3': { id: '3', name: 'Venusaur' },
    // '5': { id: '5', name: 'Charmeleon' },
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite( state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if ( !!state[id] ) {
        delete state[id];
        // return;
      } else {
        state[id] = pokemon;
      }

      // TODO: No se debe de hacer en Redux
      localStorage.setItem('favorite-pokemons', JSON.stringify( state ) );

    }
  }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer