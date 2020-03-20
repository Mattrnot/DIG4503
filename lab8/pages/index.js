class Home extends React.Component {

    getName() {
      let name = document.querySelector("#nameInput");

      fetch("/api/pokemon/name/" + name.value)
      .then((res) => { return res.json(); } )
      .then((processed) => {
        
        
        let resultElement = document.querySelector("#results");
  
        
        if(processed.error) {
          
          resultElement.innerHTML = "Could not find!";
        } else {

          resultElement.innerHTML = "Its ID is " + processed.id;
        }
  
      });
    }
    getId() {
        let id = document.querySelector("#idInput");
  
        fetch("/api/pokemon/id/" + id.value)
        .then((res) => { return res.json(); } )
        .then((processed) => {
          
          
          let resultElement = document.querySelector("#results");
    
          
          if(processed.error) {
            
            resultElement.innerHTML = "Could not find!";
          } else {
  
            resultElement.innerHTML = "Its ID is " + processed.id;
          }
    
        });
      }
    
  
    render() {
      return (
        <div>
          <input type="text" id="nameInput" />
          <input type="text" id="idInput" />
          <button onClick={() => { this.getName() } }>SUBMIT</button>
          <button onClick={() => { this.getId() } }>SUBMIT</button>
          <div id="results"></div>
        </div>
      );
    }
  
  }
  
  export default Home;
