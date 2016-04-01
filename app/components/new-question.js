import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
      questionFormShow() {
        this.set('addNewQuestion', true);
      },
      saveQuestion(){
        var params = {
        username: this.get('username'),
        title: this.get('title'),
        notes: this.get('notes'),
        answers: []
        };
      this.sendAction('saveQuestion', params);
      this.set('addNewQuestion', false);
    }
  }
});
