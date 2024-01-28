import React, { useState, useCallback } from 'react';

const Download = () => {
  const [pdfFileName, setPdfFileName] = useState(''); // State to store the PDF file name

  const handleDownload = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3039/download/${pdfFileName}`);
      const blob = await response.blob();

      // Create a link element and trigger the download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${pdfFileName}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  }, [pdfFileName]);

  const handleInputChange = (event) => {
    setPdfFileName(event.target.value);
  };

  return (
    <div>
      <label>
        Enter PDF File Name:
        <input type="text" value={pdfFileName} onChange={handleInputChange} />
      </label>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default Download;





























// import React, { useCallback } from 'react';

// const Download= () => {
//   const pdfFileName = 'yadav'; // Replace with the actual file name

//   const handleDownload = useCallback(async () => {
//     try {
//       const response = await fetch(`http://localhost:3039/download/${pdfFileName}`);
//       const blob = await response.blob();

//       // Create a link element and trigger the download
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = `${pdfFileName}.pdf`;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//     } catch (error) {
//       console.error('Error downloading PDF:', error);
//     }
//   }, [pdfFileName]);

//   return (
//     <div>
//       <button onClick={handleDownload}>Download PDF</button>
//     </div>
//   );
// };

// export default Download;
















// import React, { useCallback } from 'react';

// const Download = () => {
//   const handleDownload = useCallback(async () => {
//     const fileName = 'your-pdf-file-name'; // Replace with the actual file name

//     try {
//       const response = await fetch(`http://localhost:3038/download/${fileName}`);
//       const blob = await response.blob();

//       // Create a link element and trigger the download
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = `${fileName}.pdf`;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//     } catch (error) {
//       console.error('Error downloading PDF:', error);
//     }
//   }, []);

//   return (
//     <div>
//       <button onClick={handleDownload}>Download PDF</button>
//     </div>
//   );
// };

// export default Download;


































// import React, { useState } from 'react';
// import axios from 'axios';

// function Download() {
//   const [pdfName, setPdfName] = useState('');
//   const [error, setError] = useState(null);

//   const handlePdfNameChange = (e) => {
//     setPdfName(e.target.value);
//   };

//   const handleDownloadPdf = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3036/pdfByName/${encodeURIComponent(pdfName)}`);
//       const { data } = response.data;

//       // Convert base64 to Blob
//       const blob = base64toBlob(data);

//       // Create a download link
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob);
//       link.download = `${pdfName}.pdf`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } catch (error) {
//       console.error('Error downloading PDF:', error);
//       setError('Error downloading PDF. Please check the name and try again.');
//     }
//   };

//   const base64toBlob = (base64) => {
//     try {
//       const byteCharacters = atob(base64);
//       const byteNumbers = new Array(byteCharacters.length);
      
//       for (let i = 0; i < byteCharacters.length; i++) {
//         byteNumbers[i] = byteCharacters.charCodeAt(i);
//       }

//       const byteArray = new Uint8Array(byteNumbers);
//       return new Blob([byteArray], { type: 'application/pdf' });
//     } catch (error) {
//       console.error('Error converting base64 to Blob:', error);
//       throw error;
//     }
//   };

//   return (
//     <div>
//       <h1>PDF Downloader</h1>
//       <div>
//         <label>PDF Name:</label>
//         <input type="text" value={pdfName} onChange={handlePdfNameChange} />
//         <button onClick={handleDownloadPdf}>Download PDF</button>
//         {error && <div style={{ color: 'red' }}>{error}</div>}
//       </div>
//     </div>
//   );
// }

// export default Download;











































// import React, { useState } from 'react';
// import axios from 'axios';

// function Download() {
//   const [pdfName, setPdfName] = useState('');

//   const handlePdfNameChange = (e) => {
//     setPdfName(e.target.value);
//   };

//   const handleDownloadPdf = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3037/pdfByName/${pdfName}`);
//       const { data } = response.data;

//       // Convert base64 to Blob
//       const blob = base64toBlob(data);

//       // Create a download link
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob);
//       link.download = `${pdfName}.pdf`;
//       link.click();
//     } catch (error) {
//       console.error('Error downloading PDF:', error);
//     }
//   };

//   const base64toBlob = (base64) => {
//     const byteString = atob(base64);
//     const mimeString = 'application/pdf';

//     const arrayBuffer = new ArrayBuffer(byteString.length);
//     const uint8Array = new Uint8Array(arrayBuffer);

//     for (let i = 0; i < byteString.length; i++) {
//       uint8Array[i] = byteString.charCodeAt(i);
//     }

//     return new Blob([arrayBuffer], { type: mimeString });
//   };

//   return (
//     <div>
//       <h1>PDF Downloader</h1>
//       <div>
//         <label>PDF Name:</label>
//         <input type="text" value={pdfName} onChange={handlePdfNameChange} />
//         <button onClick={handleDownloadPdf}>Download PDF</button>
//       </div>
//     </div>
//   );
// }

// export default Download;
















































// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function Download() {
// //   const [pdfName, setPdfName] = useState('');

// //   const handlePdfNameChange = (e) => {
// //     setPdfName(e.target.value);
// //   };

// //   const handleDownloadPdf = async () => {
// //     try {
// //       const response = await axios.get(`http://localhost:3037/pdfByName/${pdfName}`);
// //       const { data } = response.data;

// //       // Convert base64 to Blob
// //       const blob = base64toBlob(data);

// //       // Create a download link
// //       const link = document.createElement('a');
// //       link.href = URL.createObjectURL(blob);
// //       link.download = `${pdfName}.pdf`;
// //       link.click();
// //     } catch (error) {
// //       console.error('Error downloading PDF:', error);
// //     }
// //   };

// //   const base64toBlob = (base64) => {
// //     const byteString = atob(base64);
// //     const mimeString = 'application/pdf';

// //     const arrayBuffer = new ArrayBuffer(byteString.length);
// //     const uint8Array = new Uint8Array(arrayBuffer);

// //     for (let i = 0; i < byteString.length; i++) {
// //       uint8Array[i] = byteString.charCodeAt(i);
// //     }

// //     return new Blob([arrayBuffer], { type: mimeString });
// //   };

// //   return (
// //     <div>
// //       <h1>PDF Downloader</h1>
// //       <div>
// //         <label>PDF Name:</label>
// //         <input type="text" value={pdfName} onChange={handlePdfNameChange} />
// //         <button onClick={handleDownloadPdf}>Download PDF</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Download;






























// // // // App.js
// // // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // function Download() {
// // //   const [pdfQuery, setPdfQuery] = useState('');
// // //   const [pdfContent, setPdfContent] = useState('');
// // //   const [error, setError] = useState(null);

// // //   const handlePdfQueryChange = (e) => {
// // //     setPdfQuery(e.target.value);
// // //   };
  



// // // // ... (your existing code)

// // // const handleGetPdf = async () => {
// // //     try {
// // //       const response = await axios.get(`http://localhost:3036/pdfByName/${encodeURIComponent(pdfQuery)}`, {
// // //         responseType: 'arraybuffer',
// // //       });
  
// // //       // Convert the array buffer to a base64 string
// // //       const pdfData = Buffer.from(response.data, 'binary').toString('base64');
// // //       setPdfContent(`data:application/pdf;base64,${pdfData}`);
// // //       setError(null);
// // //     } catch (error) {
// // //       console.error('Error getting PDF:', error);
// // //       setPdfContent('');
// // //       setError('Error getting PDF. Please check the query and try again.');
// // //     }
// // //   };
  
// // //   // ... (your existing code)
  














// // // //   const handleGetPdf = async () => {
// // // //     try {
// // // //       const response = await axios.get(`http://localhost:3036/pdfByName/${pdfQuery}`, {
// // // //         responseType: 'arraybuffer',
// // // //       });

// // // //       // Convert the array buffer to a base64 string
// // // //       const pdfData = Buffer.from(response.data, 'binary').toString('base64');
// // // //       setPdfContent(`data:application/pdf;base64,${pdfData}`);
// // // //       setError(null);
// // // //     } catch (error) {
// // // //       console.error('Error getting PDF:', error);
// // // //       setPdfContent('');
// // // //       setError('Error getting PDF. Please check the query and try again.');
// // // //     }
// // // //   };

// // //   return (
// // //     <div>
// // //       <h1>PDF Viewer</h1>
// // //       <div>
// // //         <label>PDF Query:</label>
// // //         <input type="text" value={pdfQuery} onChange={handlePdfQueryChange} />
// // //         <button onClick={handleGetPdf}>Get PDF</button>
// // //       </div>
// // //       {error && <div style={{ color: 'red' }}>{error}</div>}
// // //       {pdfContent && (
// // //         <div>
// // //           <embed src={pdfContent} type="application/pdf" width="100%" height="600px" />
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default Download;


































// // // // // App.js
// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';

// // // // function Download() {
// // // //   const [pdfName, setPdfName] = useState('');
// // // //   const [pdfContent, setPdfContent] = useState('');
// // // //   const [error, setError] = useState(null);

// // // //   const handlePdfNameChange = (e) => {
// // // //     setPdfName(e.target.value);
// // // //   };

// // // //   const handleGetPdf = async () => {
// // // //     try {
// // // //       const response = await axios.get(`http://localhost:3036/pdfByName/${pdfName}`, {
// // // //         responseType: 'arraybuffer',
// // // //       });

// // // //       // Convert the array buffer to a base64 string
// // // //       const pdfData = Buffer.from(response.data, 'binary').toString('base64');
// // // //       setPdfContent(`data:application/pdf;base64,${pdfData}`);
// // // //       setError(null);
// // // //     } catch (error) {
// // // //       console.error('Error getting PDF:', error);
// // // //       setPdfContent('');
// // // //       setError('Error getting PDF. Please check the name and try again.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h1>PDF Viewer</h1>
// // // //       <div>
// // // //         <label>PDF Name:</label>
// // // //         <input type="text" value={pdfName} onChange={handlePdfNameChange} />
// // // //         <button onClick={handleGetPdf}>Get PDF</button>
// // // //       </div>
// // // //       {error && <div style={{ color: 'red' }}>{error}</div>}
// // // //       {pdfContent && (
// // // //         <div>
// // // //           <embed src={pdfContent} type="application/pdf" width="100%" height="600px" />
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Download;























// // // // // App.js
// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';

// // // // function Downloadfile() {
// // // //   const [pdfName, setPdfName] = useState('');
// // // //   const [pdfContent, setPdfContent] = useState('');

// // // //   const handlePdfNameChange = (e) => {
// // // //     setPdfName(e.target.value);
// // // //   };

// // // //   const handleGetPdf = async () => {
// // // //     try {
// // // //       const response = await axios.get(`http://localhost:3036/pdfByName/${pdfName}`, {
// // // //         responseType: 'arraybuffer',
// // // //       });

// // // //       // Convert the array buffer to a base64 string
// // // //       const pdfData = new Buffer(response.data, 'binary').toString('base64');
// // // //       setPdfContent(`data:application/pdf;base64,${pdfData}`);
// // // //     } catch (error) {
// // // //       console.error('Error getting PDF:', error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h1>PDF Viewer</h1>
// // // //       <div>
// // // //         <label>PDF Name:</label>
// // // //         <input type="text" value={pdfName} onChange={handlePdfNameChange} />
// // // //         <button onClick={handleGetPdf}>Get PDF</button>
// // // //       </div>
// // // //       {pdfContent && (
// // // //         <div>
// // // //           <embed src={pdfContent} type="application/pdf" width="100%" height="600px" />
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Downloadfile;






























// // // // // App.js
// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';

// // // // function Downloadfile() {
// // // //   const [pdfId, setPdfId] = useState('');
// // // //   const [pdfContent, setPdfContent] = useState('');

// // // //   const handlePdfIdChange = (e) => {
// // // //     setPdfId(e.target.value);
// // // //   };

// // // //   const handleGetPdf = async () => {
// // // //     try {
// // // //       const response = await axios.get(`http://localhost:3036/pdf/${pdfId}`, {
// // // //         responseType: 'arraybuffer',
// // // //       });

// // // //       // Convert the array buffer to a base64 string
// // // //       const pdfData = new Buffer(response.data, 'binary').toString('base64');
// // // //       setPdfContent(`data:application/pdf;base64,${pdfData}`);
// // // //     } catch (error) {
// // // //       console.error('Error getting PDF:', error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h1>PDF Viewer</h1>
// // // //       <div>
// // // //         <label>PDF ID:</label>
// // // //         <input type="text" value={pdfId} onChange={handlePdfIdChange} />
// // // //         <button onClick={handleGetPdf}>Get PDF</button>
// // // //       </div>
// // // //       {pdfContent && (
// // // //         <div>
// // // //           <embed src={pdfContent} type="application/pdf" width="100%" height="600px" />
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Downloadfile;
