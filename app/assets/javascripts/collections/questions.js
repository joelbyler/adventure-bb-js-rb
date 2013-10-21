/* localStorage: new Backbone.LocalStorage("cyOverflow:questions") */
App.Collections.Questions = Backbone.Collection.extend({
  model: App.Models.Question,
  url: "/questions"
});
