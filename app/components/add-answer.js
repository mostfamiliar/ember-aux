import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAnswer() {
      var params = {
        username: this.get('username'),
        text: this.get('text'),
        question: this.get('question')
      };
      this.sendAction('sendAnswer', params);
      this.set('username', "");
      this.set('text', "");
    }
  }
});
