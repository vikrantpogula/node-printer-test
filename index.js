// use: node printFile.js [filePath printerName]
var printer = require("printer");
var fs = require("fs");

var filename = __dirname+'/test.pdf';

console.log('platform:', process.platform);
console.log('try to print file: ' + filename);

if(process.platform != 'win32') {
  printer.printFile({
    filename: filename, 
    printer: process.env[3], // printer name, if missing then will print to default printer
    success:function(jobID){
      console.log("sent to printer with ID: "+jobID);
    },
    error:function(err){
      console.log(err);
    }
  });
}
else{
  console.log('printFile only supported on POSIX');
}