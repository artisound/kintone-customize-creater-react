require('dotenv').config();
const PowerShell = require("powershell");
// Start the process
let ps = new PowerShell(`kintone-customize-uploader --base-url https://${process.env.KINTONE_SUBDOMAIN}.cybozu.com --username ${process.env.KINTONE_USERID} --password ${process.env.KINTONE_PASSWORD} dest/customize-manifest.json`);

// Handle process errors (e.g. powershell not found)
ps.on("error", err => {
    console.error(err);
});

// Stdout
ps.on("output", data => {
    console.log(data);
});

// Stderr
ps.on("error-output", data => {
    console.error(data);
});

// End
ps.on("end", code => {
    // Do Something on end
});