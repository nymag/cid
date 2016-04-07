'use strict';

const base = 'cid-' + Math.floor(Math.random() * 100) + (new Date()).getTime(); // Pretty unique base
let counter = 0;

export default function () {
  counter += 1; // Increment
  return base + counter;
}
