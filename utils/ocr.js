import Tesseract from 'tesseract.js';

export async function extractTextFromImage(imageFile) {
  try {
    const { data: { text } } = await Tesseract.recognize(
      imageFile,
      'eng',
      {
        logger: info => console.log(info),
      }
    );
    return text;
  } catch (error) {
    console.error('Error during OCR:', error);
    return '';
  }
}
