$(function() {
  App.pusher = new Pusher("3b0287f4d7ef29bdf1fa");
  App.currentUser = new App.Models.User();
  var loginView = new App.Views.Login({el: $('#loginView'), model: App.currentUser});

  var questions = new App.Collections.Questions();
  var newQuestionView = new App.Views.NewQuestion({el: $('#newQuestionView'), model: questions});
  var questionsView = new App.Views.Questions({el: $('#questions'), model: questions});
  new Backpusher(App.pusher.subscribe("question-channel"), questions);
  questions.fetch();
});