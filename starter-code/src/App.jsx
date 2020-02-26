import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import FilterableProducTable from "./components/FilterableProductTable";
export default class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>IronStore</h1>
      <FilterableProducTable/>
      </div>
    );
  }
}