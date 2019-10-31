import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  part: DS.belongsTo('part'),
  shaftDiameter: DS.attr(),
  kv: DS.attr(),
  battery: DS.attr(),
  type: DS.attr(),
});
