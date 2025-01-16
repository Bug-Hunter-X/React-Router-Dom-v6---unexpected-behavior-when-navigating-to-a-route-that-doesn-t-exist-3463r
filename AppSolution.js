import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

function NoMatch() {
  const location = useLocation();
  return (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
  );
}

export default App;