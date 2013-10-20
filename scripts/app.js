$(function() {
  App.currentUser = new App.Models.User();
  var loginView = new App.Views.Login({el: $('#loginView'), model: App.currentUser});

  var questions = new App.Collections.Questions();
  var newQuestionView = new App.Views.NewQuestion({el: $('#newQuestionView'), model: questions});
  var questionsView = new App.Views.Questions({el: $('#questions'), model: questions});
});