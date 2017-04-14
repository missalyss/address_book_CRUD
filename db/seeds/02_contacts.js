exports.seed = function(knex, Promise) {
  return knex('contacts').del()
  .then(function() {
    return knex('contacts').insert([{
      id: 1,
      first_name: 'Jean Luc',
      last_name: 'Picard',
      phone_number: '111-222-3333',
      email_address: 'captainjeanlucpicard@enterprise.com',
      img_url: 'http://www.chaostrophic.com/wp-content/uploads/2017/03/47ba21ca9b5cf73389f4398f382638211.jpg',
      address_id: 1
    },
    {
      id: 2,
      first_name: 'Geordi',
      last_name: 'La Forge',
      phone_number: '111-222-3333',
      email_address: 'ltcmdgeordilaforge@enterprise.com',
      img_url: 'http://4.bp.blogspot.com/-I_iT09LtkTQ/T_WI51nV6BI/AAAAAAAAG5M/9dhDZejkMZI/s1600/Lt-Commander-Geordi-La-Forge-star-trek-the-next-generation-9406844-1659-2560.jpg',
      address_id: 2
    },
    {
      id: 3,
      first_name: 'Will',
      last_name: 'Riker',
      phone_number: '111-222-3333',
      email_address: 'cmdwilliamtriker@enterprise.com',
      img_url: 'https://s-media-cache-ak0.pinimg.com/originals/7a/48/59/7a485940e0f928b25b6cc0cb35c251c3.jpg',
      address_id: 3
    },
    {
      id: 4,
      first_name: 'Deanna',
      last_name: 'Troi',
      phone_number: '111-222-3333',
      email_address: 'counselordeannatroi@enterprise.com',
      img_url: 'http://68.media.tumblr.com/13cffc3e897162a3cc0b072a21f78928/tumblr_mpvdh4jgX41rss116o4_r1_1280.jpg',
      address_id: 3
    },
    {
      id: 5,
      first_name: 'Data',
      last_name: 'Sung',
      phone_number: '111-222-3333',
      email_address: 'ltcmddata@enterprise.com',
      img_url: 'https://s-media-cache-ak0.pinimg.com/originals/52/d5/55/52d555dd6c662933751f155898c477fe.jpg',
      address_id: 4
    }
    ])
  }).then(function () {
      return knex.raw(
        "SELECT setval('contacts_id_seq', (SELECT MAX (id) FROM contacts))"
      )
    }).catch(function (error) {
      console.error("Red Alert! ", error);
    })
}
