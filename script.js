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
  for (i = 0; 5 >= i; i++) {
    pl = pl + "<br>" + rest.players.sample[i].name;
  }
  $("#rest").html(
    rest.description.replaceColorCodes().textContent +
      "<br><b>Players Online:</b> " +
      rest.players.online +
      pl
  );
  $("#favicon").attr("src", rest.favicon);
});
});
