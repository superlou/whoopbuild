import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  part: DS.belongsTo('part'),
  dimensions: DS.attr(),
  onboardRx: DS.attr(),
  battery: DS.attr(),
  escCurrent: DS.attr(),
  escType: DS.attr(),
});
