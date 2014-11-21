describe("Test universe", function() {
    var universe;

    beforeEach(function() {
        module("GameOfLife");
        inject(createUniverse);
    });

    function createUniverse(Universe) {
        universe = new Universe(4, 4);
    }

    describe("neighbor", function() {
        describe("top left", function() {
            it("should has 0 live neighbor", function() {
                expect(universe.getTotalLiveNeighbor(0, 0)).toEqual(0);
            });
        });
    });
});