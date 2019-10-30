import DS from 'ember-data';
import RSVP from 'rsvp';

export default DS.Adapter.extend({
  findAll(store, type) {
    return new RSVP.Promise(function(resolve, reject) {
      Tabletop.init({
        key: 'https://docs.google.com/spreadsheets/d/1txZa7Q75F9cMv6kyKsnI86pYaJwErGxt6uFNaCrYsqY/edit?usp=sharing',
        simpleSheet: true,
        parseNumbers: true,
        wanted: [type.modelName],
      }).then(function(data, tabletop) {
        resolve(data);
      });
    });
  }
});
