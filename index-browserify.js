require("./d3");
module.exports = d3;

// dont leak global var
(function () { delete this.d3; })();
