const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Item } = require('../../db/models');
const logger = require('../../utils/Logger');

module.exports = {
  getItems: async (name) => {
    var items = await Item.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name ? name : ''}%`,
        },
      }
    });

    return items;
  },

  createItem: async (name, qty, description) => {
    var item = await Item.create({
      name, qty, description
    });

    return item;
  },

  updateItem: async (id, name, qty, description) => {
    await Item.update({
      name, qty, description
    }, {
      where: {
        id: id
      }
    });

    var updatedItem = await Item.findOne({
      where: {
        id: id
      }
    });

    return updatedItem;
  },

  deleteItem: async (id) => {
    var updatedRow = await Item.destroy({
      where: {
        id: id
      }
    });

    return updatedRow > 0;
  }
};
