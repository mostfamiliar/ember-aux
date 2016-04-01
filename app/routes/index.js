import Ember from 'ember';

//
// var test = [{
//     username: "DLynch",
//     title: "How do I implement parallel compression?",
//     notes: "Using ProTools"
//     }, {
//     username: "THaynes",
//     title: "What compressor should I buy?",
//     notes: "None"
//     }, {
//       username: "WWenders",
//       title: "What gear did Mac Demarco use on Salad Days?",
//       notes: "Specifically, mics??"
//     }];

export default Ember.Route.extend({
  model(){
    return this.store.findAll('question');
  },
  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    deleteQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    editQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    }
  }
});
