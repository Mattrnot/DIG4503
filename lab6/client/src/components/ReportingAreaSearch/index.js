import React from 'react';

class ReportingAreaSearch extends React.Component {
    ReadReportingArea(){

    let reporting = document.querySelector("#reportingArea");

    if(processed.error) {
        reporting.innerHTML = processed.error;
    } else {
        reporting.innerHTML = "Secret!";
    }
}
    render() {
        return(
        <div>
            <hr />
            <h1>Reporting</h1>
            <div id="reportingArea"></div>
        </div>
        );
    }
}

export default ReportingAreaSearch;