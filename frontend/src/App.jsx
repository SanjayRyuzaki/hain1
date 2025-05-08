import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState({ quote: '', author: '' });

  const fetchQuote = async () => {
    const res = await fetch('/api/quote');
    const data = await res.json();
    setQuote(data);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="container">
      <div className="quote-wrapper">
        <h1 className="page-title">Quote of the Day</h1>
        <div className="quote-box">
          <p className="quote">"{quote.quote}"</p>
          <p className="author">- {quote.author}</p>
          <button onClick={fetchQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
