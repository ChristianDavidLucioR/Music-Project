/*
  2ND DAY OF MY PERSONAL CHALLENGE
  START TIME: 5:25 PM
  END TIME: 7:03 PM
  BASED ON:
  https://www.materialup.com/posts/daily-ui-009-music-player
*/
$(document).ready(function() {
    $('#range-val').on("change mousemove", function() {
      //Lets change it in time mode
      var original_time = $(this).val();
      var new_time = formatSeconds(original_time);
      $("#time p").text(new_time);
    });
    /*
    ANOTHER GREAT WORK BY SOMEONE...
    http://jsfiddle.net/CYSeY/4/
    i just modify it
    */
    var r = document.getElementById('range-val');
    var max = r.getAttribute('max');
    var min = r.getAttribute('min');
    var w = r.clientWidth;
    //w += r.offsetLeft;
    var isDragging = false;
  
    var moveTip = (function(e) {
      if (isDragging) {
        var posPerc = (r.value / max) * 100;
        var pixPos = (posPerc / 100) * w - 40;
        /* pixPos += r.offsetLeft;*/
  
        document.getElementById('tip').style.display = 'block';
        document.getElementById('tip').style.left = pixPos + 'px';
      }
    });
  
    $("#range-val").mousemove(function() {
      isDragging = true;
      var range_val = document.getElementById("range-val").value;
      document.getElementById('tip').innerHTML = formatSeconds(range_val);
      r.addEventListener('mousemove', moveTip, false);
    });
  
    $("body").mouseup(function(e) {
      isDragging = false;
      r.removeEventListener('mousemove', moveTip);
      document.getElementById('tip').style.display = 'none';
    });
  });
  /*
  FUNCTIONS (I just modify it)
  http://stackoverflow.com/a/17781037
  */
  function formatSeconds(seconds) {
    var date = new Date(1970, 0, 1);
    date.setSeconds(seconds);
    return date.toTimeString().replace(/.*(\d{2}:\d{2}).*/, "$1");
  }