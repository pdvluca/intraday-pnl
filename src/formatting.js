export default {
  backgroundClass: function(value) {
    var style = "";
    var intensity = 0;
    if (value > 0) {
      style = "green";
      if (value > 0.4) {
        intensity = 4;
      }
      else if (value > 0.3) {
        intensity = 3;
      }
      else if (value > 0.1) {
        intensity = 2;
      }
      else {
        intensity = 1;
      }
    }
    else {
      style = "red";
      if (value < -0.4) {
        intensity = 4;
      }
      else if (value < -0.3) {
        intensity = 3;
      }
      else if (value < -0.1) {
        intensity = 2;
      }
      else {
        intensity = 1;
      }
    }
    return style + " darken-" + intensity + " white-text text-darken-2 left-align";
  }
}
