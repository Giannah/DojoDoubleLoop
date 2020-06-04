const axios = require('axios');
const { Given, When, Then } = require("cucumber");  
const { expect } = require("chai");
let response;

When("my server is reached", async function() {
  await axios.get('http://localhost:3000')
  .then(result => {
    response = result.data;
  })
  .catch(error => {
    console.log(error);
  });
  });
  
  Then("my server says \"Coucou\"", function() {
    expect(response).to.eql("Coucou");
  });