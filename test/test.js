/* globals describe, it, beforeEach, afterEach */

'use strict';

var expect = require('chai').expect;
var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var file = require('file-utils');
var easy = require('libxmljs-easy');
var svgMerge = require('../svg-merge');

var inputDir = path.join(__dirname, 'fixtures', 'arrow');
var outputDir = path.join(__dirname, '../tmp/arrow');
var outputFile = 'arrow-out.svg';
var outputPath = path.join(outputDir, outputFile);

describe('svgMerge()', function () {
  beforeEach(function () {
    rimraf.sync('tmp');
  });

  it('outputs an svg', function (done) {
    svgMerge(inputDir, outputDir, outputFile, function () {
      expect(file.exists(outputPath)).to.equal(true);
      done();
    });
  });
});