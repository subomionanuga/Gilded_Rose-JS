var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    var gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });
});

describe("Normal Items", function() {
  var items;
  var gildedRose;

  beforeEach(function() {
    gildedRose = new Shop([ new Item("My goodies", 10, 50) ]);
    items = gildedRose.updateQuality();
  });

  it("Checks that the name of the item is stored", function() {
    expect(items[0].name).toEqual("My goodies")
  })

  it("Sell by date reduces by 1 each day", function() {
    expect(items[0].sellIn).toEqual(9)
  })

  it("Quality reduces by 1 each day", function() {
    expect(items[0].quality).toEqual(49)
  })
})
