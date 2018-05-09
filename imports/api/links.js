import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from 'simpl-schema';

export const Links = new Mongo.Collection('links');

if(Meteor.isServer) {
  Meteor.publish('links', function() {
    return Links.find({userId: this.userId});
  })
}


/* resource.action naming convention
    can not use . from a fuction name so put it inside '' **/
Meteor.methods({
  'links.insert'(url){
    if(!this.userId) {
      throw new Meteor.Error('Un-Autherized-User');
    }
    new SimpleSchema({
      url: {
        type: String,
        label: 'Your Link',
        regEx: SimpleSchema.RegEx.Url,
        optional: true
      }
    }).validate({ url });

    Links.insert({
      url,
      userId: this.userId
    })
  }
});