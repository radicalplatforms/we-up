import fs from 'fs';
import FormData from 'form-data';

export default async function uploadImageToCloudflare(formData: FormData) {
    try {
        const image = fs.readFileSync('./image.jpg');
        const blobData = new Blob([image]);
        formData.append("file", blobData, "filename_for_cloudflare");

        const response = await fetch(
            `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v1`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.CLOUDFLARE_UPLOAD_TOKEN}`,
            },
            body: formData,
        });

        // Your image has been uploaded
        // Do something with the response, e.g. save image ID in a database
        console.log(await response.json());
    } catch (error) {
        console.log(error.toString());
    }
}