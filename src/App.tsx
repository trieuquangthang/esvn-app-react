import React, { useEffect, useState } from "react";
import { Modal, Input, Button, Table, Popconfirm } from "antd";
import TableComponent from "./component/TableComponent";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./App.css";
import Demo from "./component/Demo";

function App (){
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/about">Về chúng tôi</Link>
              </li>
            </ul>
          </nav>
  
          <hr />
  
          {/* <Route exact path="/" component={TableComponent} />
          <Route exact path="/about" component={Demo} /> */}
        </div>
      </Router>
    );
}

export default App;
