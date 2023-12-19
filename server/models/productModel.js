const { Client } = require('pg'); // Use 'Client' instead of 'DB'

// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI = 'postgres://ezdeklll:18APGpBneyZNjBp1u3qQhDb-6-2teYvk@bubble.db.elephantsql.com/ezdeklll';

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
// const URI = process.env.PG_URI || myURI;

const client = new Client({
    connectionString: myURI
  });
  
client.connect();

console.log("connected")
//   client.connect(myURI){
//   .then(() => console.log("connected to DB"));
//   .catch((err) => console.log(err))};

module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return client.query(text, params, callback);
    }
  };