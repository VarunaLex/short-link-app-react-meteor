import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import SimpleSchema from 'simpl-schema';

Meteor.startup(() => {
  // code to run on server at startup
  Accounts.validateNewUser((user) => {
    const email = user.emails[0].address;

    try {
      new SimpleSchema({
        email: {
          type: String,
          regEx: SimpleSchema.RegEx.Email,
          optional: true
        }
      }).validate({ email });
    } catch (error) {
      throw new Meteor.Error(400, error.message);
    }

    console.log('this user is', user);
    return true;
  });
});
