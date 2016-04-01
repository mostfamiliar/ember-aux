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
        };
      this.set('addNewQuestion', false);
      console.log(params);
      this.sendAction('saveQuestion', params);
    }
  }
});
