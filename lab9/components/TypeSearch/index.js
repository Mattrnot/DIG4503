import React from 'react';

class TypeSearch extends React.Component {

    typeSearchFormSubmit = () => {


        let type = document.querySelector('#typeSearch').value;

        
        if(type.length === 0) {
            type = "0";
        }

        fetch("http://localhost:80/api/pokemon/type/" + type)
        .then((res) => { return res.json() })
        .then((processed) => {
            
            this.props.callback(processed);
        });

    }

    render() {
        return(
            <div>
                <h2>Search for pokemon by type:</h2>
                <input 
                    type="text" 
                    id="typeSearch" 
                    onKeyUp={this.TypeSearchFormSubmit} 
                />
            </div>
        );
    }

}

export default TypeSearch;