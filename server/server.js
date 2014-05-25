
// Server only.

// Pubs

Meteor.publish("points", function () {
  return Points.find();
});
Meteor.publish("fat-points", function() {
  return Points.find({
    "r": {"$gt": 20}
  });
});

Meteor.methods({
  "clear": function () {
    return Points.remove({});
  }
});
