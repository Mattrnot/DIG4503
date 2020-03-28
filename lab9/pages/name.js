import Head from 'next/head';
import Link from 'next/link';
import LabComponent from '../components/LabComponent';

class Name extends React.Component {
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

}
const name = () => {
  return (
    <div>
      <Head>
        <title>Search by Name</title>
      </Head>
      <div>
        <div>
            <LabComponent />
        </div>
        <Link href="/type.js">
          <a>Type</a>
        </Link>
        <div>
            <input type="text" id="nameInput" />
            <button onClick={() => { this.getName() } }>SUBMIT</button>
            <div id="results"></div>
        </div>
      </div>
    </div>
  );
}

export default Name;
