import FormData from 'form-data';
import fetch from 'node-fetch';

export async function uploadImageToCloudflare(file: File, userId: String) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId)

    const headers = formData.getHeaders();

    try {
      const response = await fetch('http://127.0.0.1:8787/api/group/post', {
        method: 'POST',
        body: formData,
        headers: headers,
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      alert('Upload successful');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image');
    }
}