describe("createNumberList", function () {
  it("will take a user input integer and generate a list of 1-x", function() {
    expect(createNumberList(15)).to.eql([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
  });
});

// describe("findMultiples", function () {
//
// });
//
// describe("pingpong", function () {
//
// });
