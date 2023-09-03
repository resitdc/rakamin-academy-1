import React from "react";

const Dashboard = ({ handleLogout }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eaque veritatis fuga explicabo repellendus obcaecati impedit dolorem pariatur laboriosam et ipsa omnis dolor animi, neque placeat odit. Repellendus, numquam commodi.</p>
      <button type="button" onClick={handleLogout}> LOGOUT </button>
    </div>

  )
}

export default Dashboard;