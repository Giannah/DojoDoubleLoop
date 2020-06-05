const {BeforeAll, AfterAll} = require('cucumber');
const {start,stop} = require('../../index')

BeforeAll(function() {
        start()
})    

AfterAll(function() {
        stop()
})