import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  partNumber: DS.attr(),
  manufacturer: DS.attr(),
  dimensions: DS.attr(),
  onboardRx: DS.attr(),
  battery: DS.attr(),
  weight: DS.attr(),
  escCurrent: DS.attr(),
  escType: DS.attr(),
});
