Point = function (document) {
  this.x = document.x;
  this.y = document.y;
  this.r = document.r;
}

// Seulement sur le client
if (Meteor.isClient) {
  _.extend(Point.prototype, {
    _red: function () {
      return Math.floor(this.x / 800 * 255);
    },

    _green: function () {
      return Math.floor(this.y / 600 * 255);
    },

    _blue: function () {
      return this.r * 2;
    },

    color: function () {
      var rgb = [this._red(), this._green(), this._blue()],
          canvas = document.createElement("canvas"),
          ctx = canvas.getContext('2d');
      ctx.fillStyle = "rgb(" + rgb.join(",") + ")";

      return ctx.fillStyle;
    },

    vanish: function () {
      var chance = Math.floor((this.r / 1000) * 100),
          rand   = Math.floor((Math.random() * 100) + 1);

      if (chance >= rand) {
        return Points.remove(this._id);
      }
    }
  });
}
