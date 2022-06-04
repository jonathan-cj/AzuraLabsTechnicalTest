'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('items', [
      {
        name: 'Item 1',
        quantity: 10,
        description: 'Item 1 description',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Item 2',
        quantity: 5,
        description: 'Item 2 description',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Item 3',
        quantity: 6,
        description: 'Item 3 description',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('items', null, {});
  }
};
