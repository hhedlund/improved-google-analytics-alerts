function sendEmails(spreadsheet_id,sheet_id,addresses,title) {
  var spreadsheet = SpreadsheetApp.openById(spreadsheet_id);
  var sheet = SpreadsheetApp.setActiveSheet(spreadsheet.getSheetByName(sheet_id));

  // Modify to include more rows or columns
  var startRow = 15;  // First row
  var endRow = 10;   // Final row
  var startColumn = 1 // First column
  var endColumn = 4 // Final column
  var dataRange = sheet.getRange(startRow, startColumn, endRow, endColumn)
  var sheetData = dataRange.getValues();
  var columnNames = sheetData[0];

  // For future use
  function getResults(){
    var results = []
    for(var row=1;row<sheetData.length;row++){
      if(sheetData[row][0].length>0){
        var obj = {}
        for(var cell=0;cell<sheetData[row].length;cell++){
          obj[columnNames[cell]] = sheetData[row][cell]
        }
        results.push(obj)
      }
    }
    return results;
  }

  // Convert to array for templating
  var msgRows = getResults().map(function(item){
    return Object.keys(item).map(function(key){
      return item[key]
    })
  })

  // Templating stuff
  function getData(){
    return {
      cols : columnNames,
      rows : msgRows
    }
  }

  function htmlGet(){
    return HtmlService
    .createTemplateFromFile('template.html')
    .evaluate()
  }

  // Send emails
  for(i in addresses){
    MailApp.sendEmail(addresses[i], title, htmlGet(), options={htmlBody:htmlGet().getContent()});
  }
}

// Modify Email list and Spreadsheet ID
function run(){
  var emailList = ['example@example.com'];
  var emailTitle = 'ALERT: 404 Pages Found'
  // Found in URL
  var spreadsheetId = 'xXxXXxXXxxXXxxXXxxXXxxXXXx';
  var sheetName = 'Sheet 1'

  sendEmails(spreadsheetId,sheetName,emailList,emailTitle)
}
