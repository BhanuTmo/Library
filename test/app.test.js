const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

const { expect } = chai;
chai.use(chaiHttp);

describe("Additional Routes", () => {
  it("provides a response to the health endpoint", (done) => {
    chai
      .request(app)
      .post("/api/books")
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
});


describe("Additional Routes", () => {
  it("provides a response to the health endpoint", (done) => {
    chai
      .request(app)
      .get("/api/books")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});


describe.only("Additional Routes", () => {
  it("provides a response to the health endpoint", (done) => {
    chai
      .request(app)
      .delete("/api/books")
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
  });
});

