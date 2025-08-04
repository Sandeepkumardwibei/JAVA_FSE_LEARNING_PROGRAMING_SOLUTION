// src/CohortDetails.js
import React from 'react';

function CohortDetails(props) {
  if (!props.cohort) return <h3>No cohort data</h3>;

  return (
    <div>
      <h3>
        {props.cohort.cohortCode} - <span>{props.cohort.technology}</span>
      </h3>
      <dl>
        <dt>Start Date:</dt>
        <dd>{props.cohort.startDate}</dd>
        <dt>End Date:</dt>
        <dd>{props.cohort.endDate}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
