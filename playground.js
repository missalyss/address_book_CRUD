<div class="col-lg-9">
  <h2>{{contacts.first_name}} {{contacts.last_name}}</h2>
  <ul>
    <li>Phone: {{contacts.phone_number}}</li>
    <li>Email: {{contacts.email_address}}</li>

  </ul>
</div>


.innerJoin('addresses', 'addresses.id', 'contacts.address_id')
