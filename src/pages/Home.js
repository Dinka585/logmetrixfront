import React from 'react'

function Home() {

const isAuthorized = true;

if (!isAuthorized) {
  return <div>Unauthorized access</div>;
}

return (
  <div>
    <h1>Welcome to the Home page</h1>
  </div>
);
}

export default Home