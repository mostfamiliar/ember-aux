import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  title: DS.attr(),
  notes: DS.attr()
});
