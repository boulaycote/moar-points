Points = new Meteor.Collection("points", {
  transform: function (document) {
    return new Point(document);
  }
});
