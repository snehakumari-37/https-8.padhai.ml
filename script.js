console.log("https://www.youtube.com/channel/UCeYbR_IwQJpEx-0d-ZB54Ng/search?query=comics"); // Comics
console.log("https://www.youtube.com/channel/UCb0yQ6RJCoy8_W9hLrRebYg/videos"); // Greninja AMV
var badRequest = false;
if (!window.location.search) { badRequest = true }
if(!badRequest){
var q = document.location.search.split('?')[1].split('.');
var base = "https://ncert.nic.in/textbook/pdf/";
var subCode; var end = q[1]; var sub = q[0]; var oneZero = "10";

var bharaj_Ki_Khoj_Code = "h2";     var bharaj_Ki_Khoj = "hhbk";
var vasant_3_Code = "h1";           var vasant_3 = "hhvs";
var honeydew_Code = "e1";           var honeydew = "hehd";
var it_So_Happened_Code = "e2";     var it_So_Happened = "heih";
var mahts_Code = "m";               var maths = "hemh";
var science_Code = "s";             var science = "hesc";
var his_Code = "h";                 var sst = "hess";
var civics_Code = "c";
var geo_Code = "g"; 

if (sub == bharaj_Ki_Khoj_Code)         { var subCode = bharaj_Ki_Khoj; }
else if (sub == vasant_3_Code)          { var subCode = vasant_3; }
else if (sub == honeydew_Code)          { var subCode = honeydew; }
else if (sub == it_So_Happened_Code)    { var subCode = it_So_Happened; }
else if (sub == mahts_Code)             { var subCode = maths; }
else if (sub == science_Code)           { var subCode = science; }
else if (sub == his_Code)               { var subCode = sst; oneZero = "20" }
else if (sub == civics_Code)            { var subCode = sst; oneZero = "30" }
else if (sub == geo_Code)               { var subCode = sst; oneZero = "40" }
else { var badRequest = true; }

if (end.length==2){var oneZero=oneZero.split("0")[0]; var full = base + subCode + oneZero + end + ".pdf";}
else if (end == "0") { var end = "1ps"; var full = base + subCode + end + ".pdf"; }
else {var full = base + subCode + oneZero + end + ".pdf";}

if (!badRequest) { window.location.replace(full); }
}

