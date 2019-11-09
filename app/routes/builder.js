import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
  store: service(),

  model() {
    this.store.findAll('partListing');

    return RSVP.hash({
      flightControllers: this.store.findAll('flightController'),
      motors: this.store.findAll('motor'),
    });
  }
});
