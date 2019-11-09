import DS from 'ember-data';
import RSVP from 'rsvp';

let options = {
  key: 'https://docs.google.com/spreadsheets/d/1txZa7Q75F9cMv6kyKsnI86pYaJwErGxt6uFNaCrYsqY/edit?usp=sharing',
  simpleSheet: true,
  parseNumbers: true,
}

export default DS.Adapter.extend({
  findAll(store, type) {
    return new RSVP.Promise(function(resolve, reject) {
      Tabletop.init({
        wanted: [type.modelName], ...options
      }).then(function(data, tabletop) {
        // console.log(type);
        //
        // let response = {};
        // response.data = data.map(row => {
        //   return Object.assign({}, row, {type: type.modelName});
        // });
        //
        // console.log(response);

        resolve(data);
      });
    });
  },

  findRecord(store, type, id) {
    return new RSVP.Promise(function(resolve, reject) {
      Tabletop.init({
        wanted: [type.modelName], ...options
      }).then(function(data, tabletop) {
        let match = data.find(function(row) {
          return row.id.toString() == id;
        });
        resolve(match);
      });
    });
  },

  findMany(store, type, ids) {
    return new RSVP.Promise(function(resolve, reject) {
      Tabletop.init({
        wanted: [type.modelName], ...options
      }).then(function(data, tabletop) {
        let match = data.filter(function(row) {
          return ids.includes(row.id.toString());
        });
        resolve(match);
      });
    });
  }
});
