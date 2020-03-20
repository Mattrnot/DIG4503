import React from 'react';

class NameSearch extends React.Component {

    nameSearchFormSubmit = () => {


        let name = document.querySelector('#nameSearch').value;

        
        if(year.length === 0) {
            name = "0";
        }

        fetch("http://localhost:80/api/pokemon/name/" + name)
        .then((res) => { return res.json() })
        .then((processed) => {
            
            this.props.callback(processed);
        });

    }

    render() {
        return(
            <div>
                <h2>Search for pokemon by name:</h2>
                <input 
                    type="text" 
                    id="nameSearch" 
                    onKeyUp={this.NameSearchFormSubmit} 
                />
            </div>
        );
    }

}

export default NameSearch;