const express = require('express');
const app = express();
const PORT = 8000;

app.get('/api', (req, res) => {
    res.json({message: 'Hello World'})
});

// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
    
app.get("/api/users", (req, res) => {
    res.json( users );
});


app.listen( PORT, () => console.log(`>>SERVER UP ON PORT: ${PORT}`));