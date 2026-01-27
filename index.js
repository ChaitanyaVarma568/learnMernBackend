const fileSystem = require("fs");

fileSystem.writeFile(
  "example.js",
  "console.log('This is just an example!, Can you really read this file?');",
  (err) => {
    if (err) {
      console.error("An error occurred while writing the file:", err);
    }
    console.log("File written successfully.");
  },
);

fileSystem.readFile("example.js", (err, data) => {
  if (err) {
    console.error("An error occurred while reading the file:", err);
    return;
  }
  console.log("File content:", data.toString());
});
