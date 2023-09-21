/* eslint-disable react/prop-types */

function Job({ salary, position, company }) {
  return (
    <div>
      <h1>Job component:</h1>
      <p>Salary: {salary}</p>
      <p>Position: {position}</p>
      <p>Company: {company}</p>
    </div>
  );
}

export default Job;
