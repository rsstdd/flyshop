/* eslint-disable camelcase, max-len */

exports.seed = function(knex) {
  return knex('order_items').del()
    .then(() => {
      return knex('order_items').insert([{
        id: 1,
        order_id: 1,
        products_id: 1,
        quantity: 1,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('order_items_id_seq', (SELECT MAX(id) FROM order_items));"
      );
    });
};
