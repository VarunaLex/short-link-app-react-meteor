import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from 'simpl-schema';
import shortid from "shortid";

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
      _id: shortid.generate(),
      url,
      userId: this.userId,
      visible: true,
      visitedCount: 0,
      lastVisitedAt: null,
    })
  },
  'links.setVisibility'(_id, visible){
    if(!this.userId){
      throw new Meteor.Error('Un-Autherrized-User');
    }
    new SimpleSchema({
      _id: {
        type: String,
        min: 6
      },
      visible: Boolean
    }).validate({ _id, visible});

    Links.update(
      { _id, userId: Meteor.userId },
      { $set: { visible } }
    )
  },
  'links.tackVisits'(_id) {
    new SimpleSchema({
      _id: {
        type: String,
        min: 6
      }
    }).validate({ _id });

    Links.update(
      { _id },{
        $set: { 
          lastVisitedAt: (new Date).getTime(),
        },
        $inc: {
          visitedCount: 1, 
        }
      }
    )
  }
});