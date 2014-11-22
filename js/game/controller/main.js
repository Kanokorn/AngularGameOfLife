var params = [
    "Universe",
    GameController
];
angular.module("GameOfLife").controller("GameController", params);

function GameController(Universe) {
    "use strict";
    this.init = function() {
        this.universe = new Universe(5, 5);
    }

    this.setLiveCell = function(x, y) {
        this.universe.setLiveCell(x, y);
    };

    this.init();
}