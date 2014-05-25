
// Point manager

Template.point.selected = function () {
  var id = Session.get("selected_point_id");

  if (this._id == id)
    return {
      "stroke": "black",
      "stroke-dasharray": "4, 6",
      "stroke-width": 4
    };
}

Template.point.events({

  "click circle": function (event, template) {
    event.stopPropagation();
    event.preventDefault();
    Session.set("selected_point_id", this._id);

    Points.update(this._id, {
      "$set": {"r": this.r + 5}
    });

    if (this.vanish()) {
      Session.set("selected_point_id", null);
    }
  }

});
