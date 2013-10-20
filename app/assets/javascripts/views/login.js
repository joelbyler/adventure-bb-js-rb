App.Views.Login = Backbone.View.extend({
    events: {
       "click #logIn": "login"
    },
    initialize: function() {
        this.model.on("change", this.render, this);
    },
    render: function() {
        this.hideIfLoggedIn();
        return this;
    },
    login: function() {
        this.model.logIn(this.$("#userName").val());
    },
    hideIfLoggedIn: function() {
      this.$el.toggleClass("hidden", this.model.isLoggedIn());
    }
});