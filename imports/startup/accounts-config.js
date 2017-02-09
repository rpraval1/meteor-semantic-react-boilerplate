import { Accounts, STATES } from 'meteor/std:accounts-ui';

Accounts.config({
  forbidClientAccountCreation: false
});

Accounts.ui.config({

  passwordSignupFields: 'USERNAME_AND_EMAIL',
  loginPath: '/',
});

export {Accounts,STATES};
