'use strict';
import cid from './src/index';
import {expect} from 'chai';

describe('cid', function () {
  it('returns unique ids', function () {
    var firstId = cid(),
      secondId = cid();

    expect(firstId).to.not.equal(secondId);
  });
});
