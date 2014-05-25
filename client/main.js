Meteor.startup(function() {
  Deps.autorun(function() {
    console.log("Il y à " + Points.find().count() + " points.");
  });
});
