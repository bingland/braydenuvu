import React, { Component } from 'react'
import './App.css';

import Title from './components/Title'
import Search from './components/Search'
import Definition from './components/Definition'

export class App extends Component {

  state = {
    query: '',
    data: {},
    definition: {
      word: '',
      desc: ''
    }
  }

  // Get JSON data dynamically
  componentDidMount = () => {
    console.log('component did mount')
    fetch('/json/dictionary.json', {mode: 'no-cors'})
      .then(response => response.json())
      .then(data => {
        console.log(data['fun'])
        this.setState({data: data})
      })
      .catch(error => console.error(error))
  }

  searchDic = (e) => {
    e.preventDefault()
    console.log('Search dictionary... ')
    this.setState({
      definition: {
        word: this.state.query.toLowerCase(),
        desc: 'DESC HERE'
      }
    })
  }

  changeHandler = (e) => {
    console.log('Changed the value!')
    this.setState({
      query: e.target.value
    })
  }

  render() {

    // check to see if there is a query
    let definition = null
    if ((this.state.data[this.state.definition.word] !== undefined)) {
      console.log('GETTING THAT DEFINITION BOI!!!!!')
      definition = (
        <Definition word={this.state.definition.word} desc={this.state.data[this.state.definition.word]}/>
      )
    }

    return (
      <div className="App">
        <Title />
        <Search 
          submit={this.searchDic} 
          changed={this.changeHandler} 
          value={this.state.query} />
        { definition }
      </div>
    )
  }
}

export default App

