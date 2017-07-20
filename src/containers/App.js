import React from 'react'
import Header from '../components/Header'
import PokemonList from '../components/PokemonList'
import ListControl from '../components/ListControl'
import Settings from '../components/Settings'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <PokemonList/>
        <ListControl/>
        <Settings/>
      </div>
    )
  }
}

export default App
