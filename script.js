document.title = "Class 8";
var base = "https://ncert.nic.in/textbook/pdf/";
var q;
if (!window.location.search) {document.write("no query")}
var q = document.location.search.split('?')[1].split('.');
var middle;
var end = q[1];

var bharaj_Ki_Khoj = "hhbk";
var bharaj_Ki_Khoj_Code = "h2";

if (q[0] == bharaj_Ki_Khoj_Code) {
    var middle = bharaj_Ki_Khoj;
}

var full = base + middle + "10" + end + ".pdf";
window.location.href = full;