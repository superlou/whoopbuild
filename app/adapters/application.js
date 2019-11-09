import DS from 'ember-data';
import RSVP from 'rsvp';

let options = {
  key: 'https://docs.google.com/spreadsheets/d/1txZa7Q75F9cMv6kyKsnI86pYaJwErGxt6uFNaCrYsqY/edit?usp=sharing',
  simpleSheet: true,
  parseNumbers: true,
}

function rowToJsonApi(row, model) {
  let item = {
    type: model.modelName,
    id: row.id.toString(),
    attributes: {},
    relationships: {},
  };

  model.eachAttribute((name, meta) => {
    item.attributes[name.dasherize()] = row[name.underscore()]
  });

  model.eachRelationship((name, descriptor) => {
    if (descriptor.kind === 'belongsTo') {
      item.relationships[name] = {
        data: {
          type: descriptor.type,
          id: row[name.underscore() + '_id'].toString(),
        }
      }
    }
  });

  return item;
}

export default DS.JSONAPIAdapter.extend({
  findAll(store, type) {
    return new RSVP.Promise(function(resolve, reject) {
      Tabletop.init({
        wanted: [ type.modelName], ...options
      }).then(function(data, tabletop) {
        let response = {};

        response.data = data.map(row => {
          return rowToJsonApi(row, type);
        });

        resolve(response);
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

        let response = {};
        response.data = rowToJsonApi(match, type);
        resolve(response);
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

        let response = {};
        response.data = match.map(row => {
          return rowToJsonApi(row, type);
        });
        resolve(response);
      });
    });
  }
});
