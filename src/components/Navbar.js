import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
   

  handleSearch = (event) => {
  event.preventDefault(); // Prevents the default form submission behavior

  const queryInput = event.target.query; // Access the input field
  if (queryInput) {
    const query = queryInput.value.trim(); // Get the value and trim whitespace
    if (query) {
      this.props.onSearch(query); // Pass the query to the parent component
    }
    console.log(query); // Debugging: Check if the query is logged correctly
  } else {
    console.error('Query input not found');
  }
};

  render() {
      const {location} = this.props;
      const hideSearch = ['/business', '/entertainment', '/sports', '/technology', '/health'].includes(location.pathname);
      // const hideSearch = location.pathname === '/business'|| '/entertainment'|| '/sports'|| '/technology'|| '/health';

    return (
        <>
        <nav className="navbar navbar-expand-lg  bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">health</Link>
              </li>
            </ul>
            {!hideSearch&&
            <form className="d-flex" role="search" onSubmit={this.handleSearch}>
              <input className="form-control me-2" type="search" name="query" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            }
          </div>
        </div>
      </nav>
      <marquee className=" line mt-2"direction="right">Here You Get The Latest News of Cricket . Like India Won The WorldCup by Defeating SouthAfarica (Developer: M.Umar Alam) ...</marquee>

      </>
    )
  }
}

export default Navbar;
