import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  partNumber: DS.attr(),
  manufacturer: DS.attr(),
  weight: DS.attr(),
  flightController: DS.hasMany('flight-controller'),
  motor: DS.hasMany('motor'),
});
