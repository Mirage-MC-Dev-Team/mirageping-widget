//based on a pen by @robinselmer
// includes a script from https://github.com/FoxInFlame/MinecraftColorCodes
var url = "https://api.minetools.eu/ping/play.miragefactions.com";
$(document).ready(function(){
$.getJSON(url, function (r) {
  //data is the JSON string
  if (r.error) {
    $("#rest").html("Server Offline");
    return false;
  }
  var pl = "";
  var motd = r.description.replace("").replaceColorCodes();
  for (i = 0; 5 > i; i++) {
    pl = pl + "<br>" + r.players.sample[i].name;
  }
  $("#rest").html(
    
      motd +
      "<br><b>Players Online:</b> " +
      r.players.online +
      pl
  );
  $("#favicon").attr("src", r.favicon);
});
});
