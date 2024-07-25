import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JsonServer = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3031/numbers')
      .then((res) => setMyData(res.data))
      .catch((error) => console.log(error.message));
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      <h2>Fetching data from db.json</h2>
      {myData.map((post, i) => {
        const { type, values } = post;
        return (
          <div key={i}>
            <h1>{type} - {values.join(', ')}</h1>
          </div>
        );
      })}

     <h2 style={{color:"green"}}>After typing the npm start, please use this command "json-server --watch db.json --port 3031" to fetch the data from db.json file</h2>
    </div>
  );
};

export default JsonServer;
