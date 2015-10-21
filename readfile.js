// use: node printFile.js [filePath printerName]
var printer = require("printer");
var fs = require("fs");

var filename = __dirname+'/test.pdf';

console.log('platform:', process.platform);
console.log('try to print file: ' + filename);

fs.readFile(filename, function (err, data) {
  printer.printDirect({
    data: data,
    printer: process.env[3], // printer name, if missing then will print to default printer
    success:function(jobID){
      console.log("sent to printer with ID: "+jobID);
    },
    error:function(err){
      console.log(err);
    }
  });
})