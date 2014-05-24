Meteor.methods({
  "clear": function () {
    return Points.remove({});
  }
});
