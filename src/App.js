import React, { Component } from 'react';
import './App.css';

// components
import Title from './components/title/title.component';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters:[],
      searchField:''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({searchField:e.target.value});
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());  
    });

    return (
      <div className="App">
        <Title text="Monsters Rolodex" />
        <SearchBox placeholder="Search by monster" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }

}

export default App;
