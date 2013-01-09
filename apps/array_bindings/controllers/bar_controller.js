// ==========================================================================
// Project:   ArrayBindings.barController
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals ArrayBindings */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
ArrayBindings.barController = SC.ObjectController.create(
/** @scope ArrayBindings.barController.prototype */ {

    hasFoosBinding: SC.Binding.oneWay('ArrayBindings.foosController.length').bool(),
    foosBinding: SC.Binding.oneWay('ArraysBindings.foosController.arrangedObjects')


}) ;
