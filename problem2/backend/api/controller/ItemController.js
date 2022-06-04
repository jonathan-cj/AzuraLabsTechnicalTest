const logger = require('../../utils/Logger');
const ItemServices = require('../services/ItemServices');

module.exports = {
  getItems: async (req, res) => {
    try {
      const { name } = req.query;

      const items = await ItemServices.getItems(name);
      res.status(200).send(items);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  createNewItem: async (req, res) => {
    try {
      const { name, quantity, description } = req.body;

      const item = await ItemServices.createItem(name, quantity, description);
      res.status(200).send(item);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  updateItem: async (req, res) => {
    try {
      const { id, name, quantity, description } = req.body;

      const item = await ItemServices.updateItem(id, name, quantity, description);
      res.status(200).send(item);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  deleteItem: async (req, res) => {
    try {
      const { id } = req.body;

      var success = await ItemServices.deleteItem(id);
      success ? res.status(200).send({
        success: true,
        message: 'Item deleted successfully'
      }) : res.status(500).send({
        success: false,
        message: 'Failed to delete item'
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
