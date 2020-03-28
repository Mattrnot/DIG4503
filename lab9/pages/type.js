import Head from 'next/head';
import Link from 'next/link';
import LabComponent from '../components/LabComponent';

class Type extends React.Component {
    getType() {
        let type = document.querySelector("#typeInput");
  
        fetch("/api/pokemon/type/" + type.value)
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
const type = () => {
  return (
    <div>
      <Head>
        <title>Search by Type</title>
      </Head>
      <div>
        <div>
            <LabComponent />
        </div>
        <Link href="/id.js">
          <a>Id</a>
        </Link>
        <div>
            <input type="text" id="typeInput" />
            <button onClick={() => { this.getType() } }>SUBMIT</button>
            <div id="results"></div>
        </div>
      </div>
    </div>
  );
}

export default Type;
