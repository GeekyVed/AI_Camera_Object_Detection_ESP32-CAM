‘use strict’;

function main() {
    // [START vision_quickstart]
    async function quickstart() {
        // Imports the Google Cloud client library
        const vision = require(‘@google - cloud / vision’);

        // Creates a client
        const client = new vision.ImageAnnotatorClient();

        // Performs label detection on the image file
        const [result] = await client.labelDetection(‘./resources/test.jpg’);
        const labels = result.labelAnnotations;
        console.log(‘Labels:’);
        labels.forEach(label => { console.log(label) });
    }
    quickstart();
    // [END vision_quickstart]
}

process.on(‘unhandledRejection’, err => {
    console.error(err.message);
    process.exitCode = 1;
});

main(…process.argv.slice(2));