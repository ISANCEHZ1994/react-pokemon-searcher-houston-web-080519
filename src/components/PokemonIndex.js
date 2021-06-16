import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
// import PokemonCard from './PokemonCard'
import { Search } from 'semantic-ui-react'
// import _ from 'lodash'
// import { runInThisContext } from 'vm'

class PokemonPage extends React.Component {

  state={
    pokemons : [],
    filteredPokemon: [],

  }

  addPokemon = pokemon => {
    this.setState({
      pokemons: [ ...this.state.pokemons, pokemon]
    })
  }

componentDidMount(){
  fetch('http://localhost:3000/pokemon')
    .then( resp => resp.json() )
    .then(pokemons => {
      this.setState({
        pokemons:pokemons}) //pokemons.map(pokemon => {return {...pokemon, flip: false} })}) this is so you can create a new key: value pair so that you can keep state in the P.I.
    })
  }

searchPokemon = (str) => {
 let filteredArray = this.state.pokemons.filter(p => p.name.toLowerCase().includes(str.toLowerCase()))

 console.log('this is my new array', filteredArray)

 this.setState({
   filteredPokemon: filteredArray
 })
 
}

  // flipHandler = () => {
  //  this.setState({
  //    flipped: true
  //  })
  //  if(flipped === true){
  //    src={this.props.backSprite}
  //  }
  // }
  

  render() {
    // console.log(this.state.pokemons)

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br /> 
        <Search onSearchChange={(e)=>this.searchPokemon(e.target.value)} showNoResults={false} />
        <br />
       <PokemonCollection pokemons={this.state.filteredPokemon.length > 0 ? this.state.filteredPokemon : this.state.pokemons} />
        <br />
      </div>
    )
  }
}

export default PokemonPage
