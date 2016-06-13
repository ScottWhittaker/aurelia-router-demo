export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      {route: ['', 'home'], name: 'home', moduleId: 'home/home', nav: true, title: 'Home'},
      {route: 'profile', name: 'profile', moduleId: 'profile/profile', nav: true, title: 'Profile'},
      {route: 'settings', name: 'settings', moduleId: 'settings/settings', nav: true, title: 'Settings'}
    ]);
    this.router = router;
  }
}
