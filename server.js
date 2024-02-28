const express = require("express");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

const houses = require("./houses");

app.get("/houses", (req, res) => {
  const { name } = req.query;
  if (name) {
    const filteredHouses = houses.filter((house) =>
      house.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(filteredHouses);
  } else {
    res.json(houses);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
