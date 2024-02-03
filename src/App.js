import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  const fetchData = async () => {
    let response = await fetch(
      "https://makemytrip-backend-w2d2.onrender.com/cities"
    );
    response = await response.json();
    setOriginalData(response);
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/adventure" component={Adventure}></Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
