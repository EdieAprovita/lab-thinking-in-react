import React, { Component } from "react";
import SearchBar from "./SearchBar";

class FilterableProductTable extends Component {
    state = {
        products: this.props.products,
        searchText:""
    };

    updateSearchText = text => {
        this.setState({
            searchText: text
        });
    };

    render() {
        return(
            <div>
                <SearchBar/>
                
            </div>
        )
    }
}

export default FilterableProductTable;