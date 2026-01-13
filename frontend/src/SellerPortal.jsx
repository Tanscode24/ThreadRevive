import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

export default function SellerPortal() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setPrediction(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select an image first!");

    const formData = new FormData();
    formData.append('file', selectedFile);

    setLoading(true);
    try {
      const response = await axios.post('https://bloodlike-rasorial-amal.ngrok-free.dev/predict', formData, {
        headers: { 
          'Content-Type': 'multipart/form-data',
          'ngrok-skip-browser-warning': 'true' 
        }
      });

      // Since backend returns {"class": "jeans", "confidence": 0.8991}
      const rawClass = response.data.class;
      
      // Clean up the string (e.g., "printed_hoodies" -> "Printed Hoodies")
      const displayLabel = typeof rawClass === 'string' 
        ? rawClass.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())
        : "Garment Identified";

      setPrediction({
        label: displayLabel,
        confidence: (response.data.confidence * 100).toFixed(2)
      });
    } catch (error) {
      console.error("AI Error:", error);
      alert("Check your backend connection!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="seller-section" className="py-24 bg-stone-50 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100">
        <div className="p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-2">AI Garment Analysis</h2>
          
          <div className="flex flex-col items-center gap-6 mt-8">
            <div className="w-full max-w-sm aspect-square bg-stone-50 rounded-2xl border-2 border-dashed border-stone-200 flex items-center justify-center overflow-hidden">
              {preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-contain p-2" />
              ) : (
                <div className="text-stone-400 text-sm">Upload garment photo</div>
              )}
            </div>

            <input type="file" accept="image/*" onChange={onFileChange} className="block w-full text-sm text-stone-500 file:mr-4 file:py-2.5 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer" />

            <button onClick={handleUpload} disabled={loading || !selectedFile} className="w-full py-4 bg-green-800 text-white rounded-xl font-bold text-lg hover:bg-green-900 transition-all disabled:opacity-50 shadow-lg shadow-green-100">
              {loading ? "Analyzing..." : "Scan & Identify"}
            </button>
          </div>

          <AnimatePresence>
            {prediction && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 p-6 bg-green-50 rounded-2xl border border-green-200 text-left">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-green-700 font-bold text-xs uppercase tracking-widest mb-1">AI Classification</p>
                    <h3 className="text-2xl font-black text-stone-900">{prediction.label}</h3>
                    <p className="text-stone-600">Confidence: {prediction.confidence}%</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-stone-400 block mb-1">Reward Credits</span>
                    <span className="text-xl font-bold text-green-700">₹450 - ₹900</span>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 bg-stone-900 text-white rounded-lg font-bold text-sm hover:bg-black transition-colors">
                  Confirm & Schedule Pickup
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}