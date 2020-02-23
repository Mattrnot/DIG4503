import React from 'react';
import IdSearch from './components/IdSearch';
import NameSearch from './components/NameSearch';
import ReportingAreaSearch from './components/ReportingAreaSearch';

class App extends React.Component {
  render() {
    return(
      <div>
        <IdSearch />
        <NameSearch />
        <ReportingAreaSearch />
      </div>
    );
  }
}

export default App;
