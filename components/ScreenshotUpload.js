import { useState } from 'react';
import { extractTextFromImage } from '../utils/ocr';
import { generateResponse } from '../utils/ai';

export default function ScreenshotUpload() {
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    console.log('Uploading:', file.name);
    const text = await extractTextFromImage(file);
    setExtractedText(text);
    console.log('Extracted Text:', text);
    const response = await generateResponse(text);
    setAiResponse(response);
    console.log('AI Response:', response);
  };

  return (
    <div className="screenshot-upload">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Upload
      </button>

      {extractedText && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-bold">Extracted Text:</h3>
          <p>{extractedText}</p>
        </div>
      )}

      {aiResponse && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          <h3 className="text-lg font-bold">AI Response:</h3>
          <p>{aiResponse}</p>
        </div>
      )}
    </div>
  );
}
