import React from 'react';
import Upload from './Upload';
import Downloadfile from './Download';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/download" element={<Downloadfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;























// // App.js
// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [name, setName] = useState('');
//   const [file, setFile] = useState(null);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async () => {
//     const formData = new FormData();
//     formData.append('pdf', file);
//     formData.append('name', name);

//     try {
//       await axios.post('http://localhost:3036/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('PDF uploaded successfully!');
//     } catch (error) {
//       console.error('Error uploading PDF:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>PDF Uploader</h1>
//       <div>
//         <label>Name:</label>
//         <input type="text" value={name} onChange={handleNameChange} />
//       </div>
//       <div>
//         <label>PDF File:</label>
//         <input type="file" accept=".pdf" onChange={handleFileChange} />
//       </div>
//       <button onClick={handleSubmit}>Upload PDF</button>
//     </div>
//   );
// }

// export default App;







































// // // App.js

// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function App() {
// //   const [name, setName] = useState('');
// //   const [file, setFile] = useState(null);

// //   const handleNameChange = (e) => {
// //     setName(e.target.value);
// //   };

// //   const handleFileChange = (e) => {
// //     setFile(e.target.files[0]);
// //   };

// //   const handleSubmit = async () => {
// //     const formData = new FormData();
// //     formData.append('file', file);
// //     formData.append('name', name);
  
// //     try {
// //       await axios.post('http://localhost:3033/upload', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });
// //       console.log('File uploaded successfully!');
// //     } catch (error) {
// //       console.error('Error uploading file:', error.message);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>File Uploader</h1>
// //       <form enctype="multipart/form-data">  
// //       <div>
        
// //         <label>Name:</label>
// //         <input type="text" value={name} onChange={handleNameChange} />
// //       </div>
// //       <div>
// //         <label>File:</label>
// //         <input type="file" onChange={handleFileChange} />
// //       </div>
// //       <button onClick={handleSubmit}>Upload</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default App;



