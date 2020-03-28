import Head from 'next/head';
import Link from 'next/link';
import LabComponent from '../components/LabComponent';

class Id extends React.Component {
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

}
const id = () => {
  return (
    <div>
      <Head>
        <title>Search by ID</title>
      </Head>
      <div>
        <div>
            <LabComponent />
        </div>
        <Link href="/name.js">
          <a>Name</a>
        </Link>
        <div>
            <input type="text" id="idInput" />
            <button onClick={() => { this.getId() } }>SUBMIT</button>
            <div id="results"></div>
        </div>
      </div>
    </div>
  );
}

export default Id;
