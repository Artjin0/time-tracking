/*jshint browser: true*/
/*global SpreadsheetApp*/
function cloneGoogleSheet() {

  "use strict";
  var name = "labnol";
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Template').copyTo(ss);

  /* Before cloning the sheet, delete any previous copy */
  var old = ss.getSheetByName(name);
  if (old) ss.deleteSheet(old);

  SpreadsheetApp.flush(); // Utilities.sleep(2000);
  sheet.setName("2020");

  /* Make the new sheet active */
  ss.setActiveSheet(sheet);

}
