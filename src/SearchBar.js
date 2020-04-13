import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    console.log("Rekha", this.state.term);
    return (
      <div className="ui-segment">
        <div className="uiform">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
          <button onClick={this.onFormSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}
export default SearchBar;
