import React from 'react';

const Home = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <h1>About me</h1>
        <p>
          My name is Piotr Majchrzyk
          and here is my <a href={'http://github.com/erisalke'}>Github</a>
        </p>
      </div>
    );
  }
});

export default Home;
