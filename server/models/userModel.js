const { Client } = require('pg');

const myURI = 'postgres://ezdeklll:18APGpBneyZNjBp1u3qQhDb-6-2teYvk@bubble.db.elephantsql.com/ezdeklll' 

const client = new Client({
    connectionString: myURI
});

client.connect();

const userModel = {

}
//unfinished