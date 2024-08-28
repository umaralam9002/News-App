import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }

  handleSearch = (newQuery) => {
    console.log("Search Query:", newQuery);
    this.setState({ query: newQuery });
  };

  render() {
    return (
      <div>
        <Router>
          <NavbarWrapper onSearch={this.handleSearch} />
          <Routes>
            <Route path="/" exact element={<News pageSize={10} content={this.state.query} />} />
            <Route exact path="/business" element={<News pageSize={10} content="business" />} />
            <Route exact path="/entertainment" element={<News pageSize={10} content="entertainment" />} />
            <Route exact path="/sports" element={<News pageSize={10} content="sports" />} />
            <Route exact path="/technology" element={<News pageSize={10} content="technology" />} />
            <Route exact path="/health" element={<News pageSize={10} content="health" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

// Wrapper component to pass location
const NavbarWrapper = (props) => {
  const location = useLocation(); // Get the location object from the router
  return <Navbar {...props} location={location} />; // Pass location as a prop
};

export default App;


