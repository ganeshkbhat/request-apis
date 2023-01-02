/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i request-apis --save
 * Github: https://github.com/ganeshkbhat/apis-request
 * npmjs Link: https://www.npmjs.com/package/request-apis
 * File: test-.js
 * Test for File: index.js
 * File Description: 
 * 
*/

'use strict';

const request = require("../index.js");

describe('test-.mjs::request-apis: Test Suite for request-apis Files', function () {
    describe('test-.js::request-apis: [Test A] Test Suite for request-apis in main repo directory', function () {
        it('[Test A] Test for ', function (done) {

            // console.log(request._getRequest("https://api.github.com/repos/ganeshkbhat/cgi-js"));
            console.log(fetch("https://api.github.com/repos/cgi-js/cgi-js/").then(async (data) => { console.log(await data.json()) }));

            expect(100).to.equal(100);
            done();
        });
    });
});
