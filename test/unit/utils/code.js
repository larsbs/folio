'use strict';

const expect = require('chai').expect;


module.exports = function (CodeUtils) {

  describe('@Code', function () {
    describe('#setAsBold(state)', function () {
      it('should put bold symbols in the cursor position if nothing is selected', function () {
        const initialState = {
          text: '# Hello\n\nThis is markdown. This should be a ',
          cursorPosition: {
            line: 2,
            ch: 35
          },
          somethingSelected: false,
          selections: []
        };
        const expectedState = {
          text: '# Hello\n\nThis is markdown. This should be a ****',
          cursorPosition: {
            line: 2,
            ch: 37
          }
        };
        const resultState = CodeUtils.setAsBold(initialState);
        console.log(resultState);
        console.log(expectedState);
        expect(resultState).to.deep.equal(expectedState);
      });
      it('should set the cursor position in the middle of inserted bold symbols');
      it('should put bold symbols around words if something is selected');
    });
    describe('#setAsItalic(state)', function () {
      it('should put italic symbols in the cursor position if nothing is selected');
      it('should set the cursor position in the middle of inserted italic symbols');
      it('should put italic symbols around words if some are selected');
    });
    describe('#createLink(state)', function () {
      it('should add a link symbol in the cursor position if nothing is selected');
      it('should set the cursor position between the brackets of the inserted link symbol');
      it('should put selected words between the brackets of the inserted link symbols');
    });
    describe('#createImageLink(state)', function () {
      it('should add an image link symbol in the cursor position if nothing is selected');
      it('should set the cursor position between the brackets of the inserted image link symbol');
      it('should put selected words between the brackets of the inserted image link symbols');
    });
  });

}(require('../../../app/utils/code'));
