const {Before} = require('cucumber');
const {start} = require('../../index')

Before(function() {
        start()
})    
