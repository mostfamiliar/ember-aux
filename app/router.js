import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('single-question', {path: '/single-question/:question_id'});
  this.route('about');
});

export default Router;
