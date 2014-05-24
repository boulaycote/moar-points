
// Point manager

Template.point.helpers({

  color: function () {
    var rgb = [this.x, this.y, this.r],
        canvas = document.createElement("canvas"),
        ctx = canvas.getContext('2d');

    _.map(rgb, function (d) {

    });
    ctx.fillStyle = "rgb(" + rgb.join(",") + ")";

    return ctx.fillStyle;
  },

  fill: function () {
    var selected_id = Session.get("selected_point_id");

    if (this._id == selected_id) {
      return {"fill": "blue"};
    }
    return {"fill": "transparent"};
  }

});

Template.point.events({

  "click circle": function (event, template) {
    Session.set("selected_point_id", this._id);

    Points.upsert(this._id, {
      "$set": {"r": this.r + 1}
    });
  }

});
