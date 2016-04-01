import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(answer, question) {
      console.log(answer);
      this.sendAction('deleteAnswerOnQuestion', answer, question);
    }
  }
});
