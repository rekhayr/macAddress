import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
//import ImageList from "./ImageList";
import "./styles.css";

class App extends React.Component {
  state = { image: "" };
  onSearchSubmit = async term => {
    console.log("entered");
    const response = await axios.get("https://api.macaddress.io/v1", {
      params: {
        apiKey: `at_WCWmBt1RHDOvnHLQPZlbo3mqsZb5D`,
        output: `json`,
        search: term
      }
    });
    console.log(response);
    this.setState({ image: response.data.vendorDetails.companyName });
    console.log("RE", response.data.vendorDetails.companyName);
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div> {this.state.image}</div>
        {/* <ImageList images={this.state.image} /> */}
      </div>
    );
  }
}
export default App;
