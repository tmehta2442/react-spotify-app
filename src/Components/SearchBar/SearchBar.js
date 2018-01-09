import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: ''
    };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.enterSearch = this.enterSearch.bind(this);
  }
  search() {
    this.props.onSearch(this.state.searchWord);
  }
  enterSearch(e) {
    if (e.key === 'Enter') {
      this.search();
    } 
  }
  handleTermChange(e) {
    this.setState({searchWord: e.target.value});
  }
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}
          onKeyPress={this.enterSearch}/>
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;