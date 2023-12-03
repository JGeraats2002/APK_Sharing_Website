// Include the qrcode.js library (download it and place it in your project)
// Example: https://davidshimjs.github.io/qrcodejs/

// Load qrcode.js script dynamically
const qrcodeScript = document.createElement('script');
qrcodeScript.src = 'qrcode.min.js'; // Adjust the path based on your project structure
document.head.appendChild(qrcodeScript);

// Wait for the script to load
qrcodeScript.onload = () => {
    // Function to generate QR code
    function generateQRCode(text, elementId) {
        const element = document.getElementById(elementId);
        const qr = new QRCode(element, {
            text: text,
            width: 128,
            height: 128,
        });
    }

    // Example: Generate a QR code for a download link
    generateQRCode('https://yourwebsite.com/download/apk-file.apk', 'qrcode-container');
};
