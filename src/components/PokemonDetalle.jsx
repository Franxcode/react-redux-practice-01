import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {unPokeDetalleAccion} from '../redux/pokeDucks';

const PokemonDetalle = () => {

    const dispatch = useDispatch()

    React.useEffect(()=>{
        const fetchData = () => {
            dispatch(unPokeDetalleAccion())
        }
        fetchData()
    }, [dispatch])

    const pokemon = useSelector(store => store.pokemones.unPokemon);


    return pokemon ? (
        <div className="card mt-4 text-center">
            <div className="card-body">
                <img src={pokemon.foto} alt="Imagen Pokemon" className="img-fluid" />
                <div className="card-title text-uppercase">{pokemon.nombre}</div>
                <p className="card-text">Alto: {pokemon.alto} | Peso: {pokemon.peso}</p>
            </div>
        </div>
    ) : null
}

export default PokemonDetalle
