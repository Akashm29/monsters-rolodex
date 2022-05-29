import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
      loading: true,
    };
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((monsters) => {
        this.setState({
          monsters,
          loading: false,
        });
      });
  };

  handleSearch = (e) => {
    let searchField = e.target.value.toLocaleLowerCase();
    this.setState({
      searchField,
    });
  };

  render() {
    const { monsters, searchField, loading } = this.state;
    let filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div>
        <h1 className="app-title">Monster Rolodex</h1>
        {loading ? (
          <h1 className="loader-text">Loading...</h1>
        ) : (
          <>
            <SearchBox
              className={"monster-search-box"}
              searchField={searchField}
              placeholder="Enter to search"
              onChangeHandler={this.handleSearch}
            />
            <CardList monsters={filteredMonsters} />
          </>
        )}
      </div>
    );
  }
}

export default App;
