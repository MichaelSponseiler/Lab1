var port = "3000"
var superagent = require("superagent");
var expect = require("expect.js");

var assert = require('assert');
describe("homepage", () => {
    it("H1 is:<h1>This is my development page</h1>", done => {
        superagent.get("http://localhost:" + port).end((err, res) => {
            expect(res.text).contain("<h1>This is my development page</h1>");
            done();
        });
    });
});