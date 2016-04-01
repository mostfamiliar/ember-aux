import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upVote(question){
      console.log('works')
      question.incrementProperty('votes');
    },
    downVote(question){
      question.decrementProperty('votes');
    }
  }
});
