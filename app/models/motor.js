import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  partNumber: DS.attr(),
  manufacturer: DS.attr(),
  shaftDiameter: DS.attr(),
  kv: DS.attr(),
  battery: DS.attr(),
  weight: DS.attr(),
  type: DS.attr(),
});
