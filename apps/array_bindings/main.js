// ==========================================================================
// Project:   ArrayBindings
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals ArrayBindings */

ArrayBindings.FOOS_QUERY = SC.Query.local(ArrayBindings.Foo);

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
ArrayBindings.main = function main() {

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  ArrayBindings.getPath('mainPage.mainPane').append() ;

  // Step 2. Set the content property on your primary controller.
  // This will make your app come alive!

  // TODO: Set the content property on your primary controller
  // ex: ArrayBindings.contactsController.set('content',ArrayBindings.contacts);

  ArrayBindings.foosController.set('content', ArrayBindings.store.find(ArrayBindings.FOOS_QUERY));

} ;

function main() { ArrayBindings.main(); }
