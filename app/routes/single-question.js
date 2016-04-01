import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    editQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
    deleteQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    sendAnswer(params) {
      console.log(params);
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('single-question');
    }
    // countAnswers(model) {
    //   var test1 = this.get('model');
    //
    //   var test = model.get('comments.length');
    // }
  }
});
