module.exports = {
  getHouses: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_all_houses()
      .then(houses => {
        res.status(200).json(houses);
      })
      .catch(() => {
        res.status(500).json();
      });
  },

  addHouse: (req, res) => {
    const dbInstance = req.app.get("db");
    const { name, address, city, state, zip } = req.body;

    dbInstance
      .add_house([name, address, city, state, zip])
      .then(() => {
        res.status(200).json();
      })
      .catch(() => {
        res.status(500).json();
      });
  },
  deleteHouse: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .delete_house([id])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => res.status(500).json());
  }
};
