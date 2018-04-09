const React = require('react');
const Link = require('react-router-dom').Link;


function Home() {
  return (
    <div className='home-container'>
      <h1>
        Github Battle: Batlle your challange your friends and find out who is the best developer once for all.
      </h1>

      <Link className='button' to='/battle'>
        Battle!
      </Link>
    </div>
  )
}

module.exports = Home;
