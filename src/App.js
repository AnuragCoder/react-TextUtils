import React, { useState } from 'react';
import './style.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
export default function App() {
  const [Mode, setMode] = useState('light');
  return (
    <div>
      <Navbar title="Textutilis" mode={Mode} aboutText="About Textutilis" />
      <div class="container my-3">
        <TextForm heading="Enter the text to analyze" />
        <About />
      </div>
    </div>
  );
}
