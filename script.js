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
  for (i = 0; rest.players.sample.length > i; i++) {
    if(i >= rest.players.sample.length) break;
    pl = pl + "<p class='head' style='object-fit: none;margin:0;'><img class='head' src='https://crafatar.com/renders/head/"+ rest.players.sample[i].id + "?scale=2'></img> "+rest.players.sample[i].name+"</p>";
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
