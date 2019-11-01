import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  part: DS.belongsTo('part'),
  listing: DS.belongsTo('listing'),
  quantity: DS.attr(),
});
