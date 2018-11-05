import * as React from 'react';

const IssuesQuad = (props: any) => {
  let issuesDisplay;

  if (!props.company.issues) {
    issuesDisplay = (
      <React.Fragment>
        <p>Click a company to see their scores</p>
      </React.Fragment>
    );
  } else {
    const {
      civilRightsScore,
      economyScore,
      environmentScore,
      immigrationScore,
      philanthropyScore,
      salaryGapScore
    } = props.company.issues;

    issuesDisplay = (
      <React.Fragment>
        <li>Civil Rights: {civilRightsScore}</li>
        <li>Economy: {economyScore}</li>
        <li>Environment: {environmentScore}</li>
        <li>Immigration: {immigrationScore}</li>
        <li>Philanthropy: {philanthropyScore}</li>
        <li>Salary Gap: {salaryGapScore}</li>
      </React.Fragment>
    );
  }
  return (
    <div className="quad" id="issues-quad">
      <div className="quad-box">
        <h1>IssuesQuad</h1>
        {issuesDisplay}
      </div>
    </div>
  );
}
export default IssuesQuad;
