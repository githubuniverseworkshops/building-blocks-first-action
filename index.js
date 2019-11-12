// index.js
const core = require('@actions/core'); // npm install this

async function run() {
  try { 
    const greeting = core.getInput('greeting');
    console.log(`Hello, ${greeting}!`);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
