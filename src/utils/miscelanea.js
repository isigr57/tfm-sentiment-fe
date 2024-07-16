import pdfToText from "react-pdftotext";

// Array of file URLs
const fileUrls = [
    'https://www.timbal.ai/images/icons/0de44c7d5f0046873886168b9b498f66_3.avif',
    'https://www.timbal.ai/images/icons/1a4435539b4764e6ded3d368cabab387.avif',
    'https://www.timbal.ai/images/icons/5e4971d60629bca0548ded987b9ddc06.avif',
    'https://www.timbal.ai/images/icons/6cf3f5a461feadfba7abc93c4c395b33_2.avif',
    'https://www.timbal.ai/images/icons/8a7b28de359dd07048ac9153f797fa5d.avif',
    'https://www.timbal.ai/images/icons/17b8fae71a30cf910b73ed0eda8b1443.avif',
    'https://www.timbal.ai/images/icons/27f5433f521806493e2c38a304e1786e.avif',
    'https://www.timbal.ai/images/icons/82ee79efa898e62c2c8b71187e09fb91.avif',
    'https://www.timbal.ai/images/icons/33464c48a26a29dd29977ffb16bcca53.avif',
    'https://www.timbal.ai/images/icons/a5b8a9920e9dae8a73711590e7090d3d.avif',
    'https://www.timbal.ai/images/icons/adwords.png',
    'https://www.timbal.ai/images/icons/analytics.png',
    'https://www.timbal.ai/images/icons/azure.png',
    'https://www.timbal.ai/images/icons/brain.png',
    'https://www.timbal.ai/images/icons/c6c8c5e300ef0da0e47b3084e5522f20.avif',
    'https://www.timbal.ai/images/icons/ca03beabe94d8f97ba6fbf75cbb695c4.avif',
    'https://www.timbal.ai/images/icons/cohere.png',
    'https://www.timbal.ai/images/icons/d3f66e256c0d227d06b0686d724badad.avif',
    'https://www.timbal.ai/images/icons/d4a87a6bccbd4490512fb02638086f9b.png',
    'https://www.timbal.ai/images/icons/d32090cec235282983aa2872a0301ca3.avif',
    'https://www.timbal.ai/images/icons/da3ff465abd3a3e1b687c52ff803af74.avif',
    'https://www.timbal.ai/images/icons/download.png',
    'https://www.timbal.ai/images/icons/f003c553c8cd9f05a0b56bcf2a873fcc.avif',
    'https://www.timbal.ai/images/icons/facebook.png',
    'https://www.timbal.ai/images/icons/gmail.png',
    'https://www.timbal.ai/images/icons/hubspot.png',
    'https://www.timbal.ai/images/icons/icon_1.webp',
    'https://www.timbal.ai/images/icons/icon_2.webp',
    'https://www.timbal.ai/images/icons/icon_3.webp',
    'https://www.timbal.ai/images/icons/icon_4.webp',
    'https://www.timbal.ai/images/icons/icon_5.webp',
    'https://www.timbal.ai/images/icons/icon_6.webp',
    'https://www.timbal.ai/images/icons/icon_7.webp',
    'https://www.timbal.ai/images/icons/icon_8.webp',
    'https://www.timbal.ai/images/icons/icon_9.png',
    'https://www.timbal.ai/images/icons/linkedin.png',
    'https://www.timbal.ai/images/icons/market.png',
    'https://www.timbal.ai/images/icons/meta.png',
    'https://www.timbal.ai/images/icons/mistral.png',
    'https://www.timbal.ai/images/icons/ocr.png',
    'https://www.timbal.ai/images/icons/sheets.png',
    'https://www.timbal.ai/images/icons/shopify.webp',
    'https://www.timbal.ai/images/icons/stable.png',
    'https://www.timbal.ai/images/icons/swaper.webp',
    'https://www.timbal.ai/images/icons/tryon.jpg',
    'https://www.timbal.ai/images/icons/tryon.webp',
    'https://www.timbal.ai/images/icons/upload.png',
    'https://www.timbal.ai/images/icons/uploader.png'
];

// Function to get a random file from the array
const getRandomFile = () => {
    const randomIndex = Math.floor(Math.random() * fileUrls.length);
    return fileUrls[randomIndex];
}

const pdfParser = async ({ pdfFilePath }) => {
    const res = await pdfToText(pdfFilePath)
    console.log(res)
    return res

}

// Export the function
export { getRandomFile, pdfParser };
