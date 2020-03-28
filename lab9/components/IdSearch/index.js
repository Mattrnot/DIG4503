import React from 'react';

class IdSearch extends React.Component {

    idSearchFormSubmit = () => {


        let id = document.querySelector('#idSearch').value;

        
        if(id.length === 0) {
            id = "0";
        }

        fetch("http://localhost:80/api/pokemon/id/" + id)
        .then((res) => { return res.json() })
        .then((processed) => {
            
            this.props.callback(processed);
        });

    }

    render() {
        return(
            <div>
                <h2>Search for pokemon by id:</h2>
                <input 
                    type="text" 
                    id="idSearch" 
                    onKeyUp={this.IdSearchFormSubmit} 
                />
            </div>
        );
    }

}

export default IdSearch;