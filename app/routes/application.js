import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },
  actions: {
    searchIssues(query) {
      this.transitionTo('issues', { queryParams: { q: query} });
    }
  },
  model(params) {
    return params;
  },
  setupController(controller, model) {
    controller.set('organizations', [{
      name: 'Discourse',
      query: { q: 'is:open is:issue user:discourse' },
    }, {
      name: 'Wikimedia',
      query: { q: 'is:open is:issue user:wikimedia' },
    }, {
      name: 'openSUSE',
      query: { q: 'is:open is:issue user:opensuse' },
    }, {
      name: 'Elm',
      query: {q: 'is:open is:issue user:elm-lang'},
    }, {
      name: 'coala',
      query: { q: 'is:open is:issue user:coala label:difficulty/newcomer no:assignee' },
    }, {
      name: 'Cadasta',
      query: { q: 'is:open is:issue user:cadasta' },
    }, {
      name: 'Enketo',
      query: { q: 'is:open is:issue user:enketo' },
    }, {
      name: 'KoboToolBox',
      query: { q: 'is:open is:issue user:kobotoolbox' },
    }, {
      name: 'MovingBlocks',
      query: { q: 'is:open is:issue user:movingblocks' },
    }, {
      name: 'AboutCode',
      query: { q: 'is:open is:issue user:nexB' },
    }]);
    controller.set('searchParams', model.q)
    this._super(controller, model);
  }

});
