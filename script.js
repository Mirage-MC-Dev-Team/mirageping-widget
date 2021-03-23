//based on a pen by @robinselmer
// includes a script from https://github.com/FoxInFlame/MinecraftColorCodes
var url = "https://api.minetools.eu/ping/play.miragefactions.com";
$(document).ready(function(){
$.getJSON(url, function (rest) {
  //data is the JSON string
  if (rest.error) {
    $("#rest").html("Server Offline");
    return false;
  }
  var pl = "";
  var motd = rest.description.replace(/\u00a7(.+?)/gi, "");
  for (i = 0; 5 > i; i++) {
    if(i >= rest.players.sample.length) break;
    pl = pl + "<br>" + rest.players.sample[i].name;
  }
  $("#rest").html(
    motd +
      "<br><b>Players Online:</b> " +
      rest.players.online +
      pl
  );
  $("#favicon").attr("src", rest.favicon);
});
});
