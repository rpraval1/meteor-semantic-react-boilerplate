import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check'

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.methods({
    'users.validate': function(user){
      //console.log(user)
      const { username, email} = user

      var userNameChk = Meteor.users.findOne({ "username": username });

      if (userNameChk){
        throw new Meteor.Error(403, "Username already exists");
      }

      var userEmail = Meteor.users.findOne({ "emails.address": email });

      if (userEmail){
        throw new Meteor.Error(403, "Email already exists");
      }

    }
  })
});
