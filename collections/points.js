
if (Meteor.isClient) {
  Meteor.subscribe("points");
  // Meteor.subscribe("fat-points")
}

Points = new Meteor.Collection("points", {
  transform: function (document) {
    return new Point(document);
  }
});

Points.allow({
  remove: function () {
    return true;
  },
  update: function () {
    return true;
  },
  insert: function () {
    return true;
  }
});
