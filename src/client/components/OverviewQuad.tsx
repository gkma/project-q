import * as React from 'react';

const OverviewQuad = (props: any) => {
  let overviewDisplay;
  // console.log(props.company.blurb);

  if (!props.company.id) {
    overviewDisplay = (
      <p>Click a company to see their overview</p>
    )
  } else {
    const { blurb, logo, id, name } = props.company;
    overviewDisplay = (
      <ul>
        <li key={id}>
          <h2>{name}</h2>
          <em>{logo}</em>
          <p>{blurb}</p>
        </li>
      </ul>
    );
  }

  return (
    <div className="quad" id="overview-quad">
      <div className="quad-box">
        <h1>OverviewQuad</h1>
        {overviewDisplay}
      </div>
    </div>
  );
}

export default OverviewQuad;