import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';

if(Meteor.isServer){
  Accounts.config({
    forbidClientAccountCreation: true

  });

  Accounts.onEmailVerificationLink = function(token, done) {
   Accounts.urls.verifyEmail = (token) => {
     return Meteor.absoluteUrl("signin?token="+token);
   };
 };

  Meteor.methods({

    'users.create': function(user){
      //Account create on server...
      const { username, email, password } = user
      //Create account
      const userId = Accounts.createUser({
        username, email, password
      });

      //Send Account Verification....
      Accounts.sendVerificationEmail(userId);

    }
  })

}
