
// Cloud Manager

Template.cloud.helpers({
  "points": function () {
    return Points.find();
  },

  "current": function () {
    return Session.get("selected_point_id");
  }
});

Template.cloud.events({
  "click svg": function (event, template) {
    var x = event.offsetX,
        y = event.offsetY;

    Points.insert({
      "x": x,
      "y": y,
      "r": 10
    });
  },

  "click #clear": function (event, template) {
    Meteor.call("clear", function (err, res) {
      console.log("Cleared");
    });
  },

  "click #remove": function (event, template) {
    var id = Session.get("selected_point_id");
    Points.remove(id, function (err, res) {
      if (err)
        console.log(err);
      else
        Session.set("selected_point_id", null);
    });
  }
});
