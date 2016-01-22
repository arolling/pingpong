describe("createNumberList", function () {
  it("will take a user input integer and generate a list of 1-x", function() {
    expect(createNumberList(15)).to.eql([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
  });
});

describe("findMultiples", function () {
  it("will find multiples of 15 in a list of 1-x", function() {
    expect(findMultiples(30)).to.eql([15,30]);
  });

  it("will find multiples of 5 in a list of 1-x", function() {
    expect(findMultiples(14)).to.eql([5,10]);
  });

  it("will find multiples of 3 in a list of 1-x", function() {
    expect(findMultiples(10)).to.eql([3,6,9]);
  });

});
//
// describe("pingpong", function () {
//
// });
