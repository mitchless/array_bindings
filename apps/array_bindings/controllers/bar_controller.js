// ==========================================================================
// Project:   ArrayBindings.barController
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals ArrayBindings */

sc_require('foos_controller');

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
ArrayBindings.barController = SC.ObjectController.create(
/** @scope ArrayBindings.barController.prototype */ {

    hasFoosBinding: SC.Binding.transform(function(value, binding) {
      var has = NO;

      if (!SC.none(value) && value > 0) {
        has = YES;
      }

      return has;
    }).from('ArrayBindings.foosController.length'),
    foosBinding: 'ArraysBindings.foosController.arrangedObjects'


}) ;
