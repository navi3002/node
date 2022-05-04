var fs = require('fs');
let contactData;
try {
  // Read the Contents of the file into memory.
  contactData = fs.readFileSync('phonebook.dat', 'utf-8');
  // contactData is a suffer.
  // convert to string.
  var text = contactData.toString();
  // console.log(text);
  // Break uo the file into lines.
  var lines = text.split('\n');

  lines.forEach(function (line) {
    var parts = line.split(' ');
    var name = parts[0];
    var phone = parts[2];
    console.log(name + ' - ' + phone);
  });
} catch (ex) {
  console.log(`ERROR!!!: ${ex}`);
}
console.log('Completed....');
// node readFile.js
