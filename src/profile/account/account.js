export class Account {
  configureRouter(config, router) {
    config.map([
      { route: '', redirect: 'username' },
      { route: 'username', name: 'username', moduleId: 'profile/account/username/username', nav: true, title: 'Username' },
      { route: 'password', name: 'password', moduleId: 'profile/account/password/password', nav: true, title: 'Password' }
    ]);
    this.router = router;
  }
}
