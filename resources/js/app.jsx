// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Home from './Pages/Home';

// // const rootElement = document.getElementById('root');

// // if (rootElement) {
// //     const root = ReactDOM.createRoot(rootElement);
// //     root.render(<Home />);
// // }

// ReactDOM.createRoot(document.getElementById("root")).render(<Home />);
import '../css/app.css';
import ReactDOM from 'react-dom/client';		
import HelloWorld from './Pages/components/HelloWorld';

ReactDOM.createRoot(document.getElementById('app')).render(		
    <HelloWorld />
);