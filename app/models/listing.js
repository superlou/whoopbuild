import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  purchase_url: DS.attr(),
  price: DS.attr(),
});
