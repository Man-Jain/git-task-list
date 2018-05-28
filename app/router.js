import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('issues', function() {
    this.route('issue', {path: "/post/:issue_id"});
  });
});

export default Router;
