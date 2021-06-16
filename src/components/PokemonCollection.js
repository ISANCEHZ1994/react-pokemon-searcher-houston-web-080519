import React from 'react'
import PokemonCard from './PokemonCard'
// import PokemonIndex from './PokemonIndex'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemons.map(pokemon=>(
          <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          hp={pokemon.stats[5].value}
          frontSprite={pokemon.sprites.front}
          backSprite={pokemon.sprites.back} 
          />
        ))}
       
      </Card.Group>
    )
  }
}

export default PokemonCollection
