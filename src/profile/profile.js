export class Profile {
  configureRouter(config, router) {
    config.map([
      { route: '', redirect: 'account' },
      { route: 'account', name: 'account', moduleId: 'profile/account/account', nav: true, title: 'Account' },
      { route: 'emails', name: 'emails', moduleId: 'profile/emails/emails', nav: true, title: 'Emails' },
      { route: 'notifications', name: 'notifications', moduleId: 'profile/notifications/notifications', nav: true, title: 'Notifications' }
    ]);
    this.router = router;
  }
}
