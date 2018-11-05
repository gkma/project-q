import * as React from 'react';
import { Link } from 'react-router-dom';

import '../assets/CompanyListQuad.css';

const CompanyListQuad = (props: any) => {
  const companyList = props.list
    .map((company: any, idx: string) =>
      <li key={company.id}>
        <Link id={idx} to='#' onClick={props.selectCompany}>
          {/* adjust how long company name length should be */}
          {company.name.substring(0, 12)}
          {/* each company and categories is its own list */}
        </Link>
        &nbsp; &nbsp;
        {company.ticker}
        {/* &nbsp; &nbsp; 
        <span>$TBD</span>
        &nbsp; &nbsp; 
        <span>100</span> */}
        &nbsp; &nbsp;
        {company.issues.civilRightsScore}
      </li>
    );

  //({company.ticker})
  const companyCategories = (
    <ul id='company-categories-list'>
      <li className='company-category' id='company-list-name' onClick={props.sortListBy}>
        <Link to='#' id='company-list-name'>[COMPANY]</Link>
      </li>
      <li className='company-category' id='company-list-ticker' onClick={props.sortListBy}>
        <Link to='#' id='company-list-ticker'>[TICKER]</Link>
      </li>
      {/* <li className='company-category' id='company-list-price' onClick={props.sortListBy}>
        <Link to='#' id='company-list-price'>[PRICE]</Link>
      </li>
      <li className='company-category' id='company-list-overall' onClick={props.sortListBy}>
        <Link to='#' id='company-list-overall'>[OVERALL]</Link>
      </li> */}
      <li className='company-category' id='company-list-issueone' onClick={props.sortListBy}>
        <Link to='#' id='company-issue-score'>[ISSUE ONE]</Link>
      </li>
      {/* <li className='company-category' id='company-list-issuetwo' onClick={props.sortListBy}>
        <Link to='#' id='company-list-issuetwo'>[ISSUE TWO]</Link>
      </li>
      <li className='company-category' id='company-list-issuethree' onClick={props.sortListBy}>
        <Link to='#' id='company-list-issuethree'>[ISSUE THREE]</Link>
      </li>
      <li className='company-category' id='company-list-issuefour' onClick={props.sortListBy}>
        <Link to='#' id='company-list-issuefour'>[ISSUE FOUR]</Link>
      </li>
      <li className='company-category' id='company-list-issuefive' onClick={props.sortListBy}>
        <Link to='#' id='company-list-issuefive'>[ISSUE FIVE]</Link>
      </li>
      <li className='company-category' id='company-list-issuesix' onClick={props.sortListBy}>
        <Link to='#' id='company-list-issuesix'>[ISSUE SIX]</Link>
      </li> */}
    </ul>
  );

  /* <ul>TICKER</ul>
  <ul>STOCK PRICE</ul>
  <ul>52 HIGH</ul>
  <ul>52 LOW</ul>
  <ul>OVERALL</ul>
  <ul>ISSUE 1</ul>
  <ul>ISSUE 2</ul>
  <ul>ISSUE 3</ul>
  <ul>ISSUE 4</ul>
  <ul>ISSUE 5</ul>
  <ul>ISSUE 6</ul> */

  return (
    <div className="quad" id="company-list-quad">
      <div className="quad-box" id="quad-box-cl">
        {companyCategories}
        <ul id="company-names-list">
          {/* <h1>CompanyListQuad</h1> */}
          {companyList}
        </ul>
      </div>
    </div>
  );
}

export default CompanyListQuad;
