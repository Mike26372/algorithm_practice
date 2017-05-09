process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
var inputArray = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
  inputArray = input.split("\n");
  main();
});

function main() {
  // split input strings into an array for easy parsing
  inputArray = inputArray.map(input => input.split(','));
  // remove input template from inputArray with slice
  inputArray = inputArray.slice(1);
  
  // create dynamic documentTypes object
  var documentTypes = {};
  inputArray.forEach(app => {
    var type = app[2];
    documentTypes[type] = 1;
  });
  
  // create object to hold parsed applications
  var applications = {};
  
  // create missingDocuments array to hold results
  var missingDocuments = {};
  for (type in documentTypes) {
    missingDocuments[type] = [];
  }
  
  // Store the input documents into array
  inputArray.forEach(app => {
    var appNum = app[3];
    // If application doesn't exist, create a new one
    if (!applications.hasOwnProperty(appNum)) {
      applications[appNum] = {
        'name': app[1],
        'documentsSubmitted': {
        }
      };
      // add document types to documentsSubmitted object for tracking
      for (type in documentTypes) {
        applications[appNum]['documentsSubmitted'][type] = 0;
      }
    }
    // Update application for new documents
    var currentDocument = app[2];
    applications[appNum]['documentsSubmitted'][currentDocument] = 1;
  });
  
  // loop through applications 
  for (appNum in applications) {
    // for each application, loop through each document type required
    for (type in documentTypes) {
      // if the current type of document has not been submitted, push app number into missingDocuments
      if (!applications[appNum]['documentsSubmitted'][type]) {
        missingDocuments[type].push(appNum);
      }
    }
  }
  
  // sort documents alphabetically
  var sortedDocuments = Object.keys(missingDocuments).sort();
  // loop through each document and print results
  sortedDocuments.forEach(document => {
    // check if document is missing in any applications
    if (missingDocuments[document].length > 0) {
      // if application is missing, log output to console
      console.log(document);
      // sort missing documents
      // pass in lambda to sort for proper number sorting
      console.log(missingDocuments[document].sort((a, b) => a - b).join(' '));
    }
  });  
}
