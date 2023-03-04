const ethers = require ('ethers');
const utils = ethers.utils;

async function createBytes(args) {
    const bytes = args[0];
    const name = ethers.utils.parseBytes32String(bytes);
    console.log("name: ", name);

}


createBytes(process.argv.slice(2));