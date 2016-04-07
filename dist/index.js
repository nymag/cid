'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  counter += 1; // Increment
  return base + counter;
};

var base = 'cid-' + Math.floor(Math.random() * 100) + new Date().getTime(); // Pretty unique base
var counter = 0;