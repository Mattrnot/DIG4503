import React from 'react';

class NameSearch extends React.Component {
    ReadName(){
        event.preventDefault();
        let element = document.querySelector("pokemonId");
        fetch("/api/" + element.value).then((res) => {
            return res.json();
    })
    
    }
    render() {
        return(
        <div>
            <h1>Name:</h1>
            <form onSubmit={this.ReadName}>
                <input id="pokemonName" type="text"/>
                <button>Submit</button>
            </form>
        </div>
        );
    }
}

export default NameSearch;