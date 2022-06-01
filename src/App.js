import React from "react";
import ListBlog from "./components/ListBlog/index.jsx";
import Search from "./components/Search/index.jsx";

function App() {
  return (
    <div className="App pt-100">
      <header className="App-header">
      </header>
      <div className="container">
        <div className="row">
          <div className="col">
          </div>
          <div className="col-6">
            <Search/>
          </div>
          <div className="col">
            <ListBlog/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
