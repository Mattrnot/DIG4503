import React from 'react';

class IdSearch extends React.Component {
ReadId(){
    event.preventDefault();
    let element = document.querySelector("pokemonId");
    fetch("/api/" + element.value).then((res) => {
        return res.json();
})

}
    render() {
        return(
        <div>
            <h1>ID:</h1>
            <form onSubmit={this.ReadId}>
                <input id="pokemonId" type="text"/>
                <button>Submit</button>
            </form>
        </div>
        );
    }
}

export default IdSearch;