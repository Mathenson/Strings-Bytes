const ethers = require ('ethers');
const utils = ethers.utils;

async function createBytes(args) {
    const name = args[0];
    const bytes = ethers.utils.formatBytes32String(name);
    console.log("Bytes: ", bytes);

}


createBytes(process.argv.slice(2));