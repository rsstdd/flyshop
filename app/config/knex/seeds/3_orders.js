/* eslint-disable camelcase, max-len */

exports.seed = function(knex) {
  return knex('orders').del()
    .then(() => {
      return knex('orders').insert([{
        id: 1,
        user_id: 1,
        ordered_at: new Date('2016-06-26 14:26:16 UTC'),
        address1: '123 Main St',
        address2: '',
        city: 'Rockville',
        state: 'MD',
        zip: '20815',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('orders_id_seq', (SELECT MAX(id) FROM orders));"
      );
    });
};
