const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3039;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://karunakaryadav167:multer7266046@cluster0.9epmbud.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("successful")
}).catch(()=>{
    console.log("error in connecting");
});



const pdfSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
});

const PdfFile = mongoose.model('PdfFile', pdfSchema);

const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage: storage });

app.post('/upload', upload.single('pdf'), async (req, res) => {
  const { name } = req.body;
  const data = req.file.buffer;

  const newPdf = new PdfFile({
    name: name,
    data: data,
  });

  try {
    await newPdf.save();
    res.status(200).send('PDF uploaded successfully!');
  } catch (error) {
    console.error('Error saving PDF to MongoDB:', error);
    res.status(500).send(error.message);
  }
});







// app.get('/download/:name', async (req, res) => {
//   try {
//     const pdf = await PdfFile.findOne({ name: req.params.name });

//     if (!pdf) {
//       return res.status(404).send('PDF not found');
//     }

//     res.setHeader('Content-Type', 'application/pdf');
//     res.setHeader('Content-Disposition', `attachment; filename=${pdf.name}.pdf`);
//     res.send(pdf.data);
//   } catch (error) {
//     console.error('Error retrieving PDF:', error);
//     res.status(500).send(error.message);
//   }
// });
app.get('/download/:name', async (req, res) => {
  try {
    const pdf = await PdfFile.findOne({ name: req.params.name });

    if (!pdf) {
      return res.status(404).send('PDF not found');
    }

    // Decode the Base64 string to binary
    const decodedData = Buffer.from(pdf.data, 'base64');

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${pdf.name}.pdf`);
    res.send(decodedData);
  } catch (error) {
    console.error('Error retrieving PDF:', error);
    res.status(500).send(error.message);
  }
});






// app.get('/download/:name', async (req, res) => {
//   try {
//     const pdf = await PdfFile.findOne({ name: req.params.name });

//     if (!pdf) {
//       return res.status(404).send('PDF not found');
//     }

//     res.setHeader('Content-Type', 'application/pdf');
//     res.setHeader('Content-Disposition', `attachment; filename=${pdf.name}.pdf`);
//     res.send(pdf.data);
//   } catch (error) {
//     console.error('Error retrieving PDF:', error);
//     res.status(500).send(error.message);
//   }
// });
















// app.get('/pdfByName/:name', async (req, res) => {
//   try {
//     const pdf = await PdfFile.findOne({ name: req.params.name }); // Change req.body to req.params.name

//     if (!pdf) {
//       return res.status(404).send('PDF not found');
//     }

//     // Send the PDF file as a response
//     res.setHeader('Content-Type', 'application/pdf');
//     res.send(pdf.data.buffer);
//   } catch (error) {
//     console.error('Error retrieving PDF:', error);
//     res.status(500).send(error.message);
//   }
// });


// Modify the route in server.js
// app.get('/pdfByName/:name', async (req, res) => {
//   try {
//     const pdf = await PdfFile.findOne({ name: req.body });

//     if (!pdf) {
//       return res.status(404).send('PDF not found');
//     }

//     // Send the PDF file as a response
//     res.setHeader('Content-Type', 'application/pdf');
//     res.send(pdf.data.buffer);
//   } catch (error) {
//     console.error('Error retrieving PDF:', error);
//     res.status(500).send(error.message);
//   }
// });



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



















// // server.js
// const express = require('express');
// const multer = require('multer');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// const port = 3035;

// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb+srv://karunakaryadav167:multer7266046@cluster0.9epmbud.mongodb.net/?retryWrites=true&w=majority").then(()=>{
//     console.log("successful")
// }).catch(()=>{
//     console.log("error in connecting")
// });

// const pdfSchema = new mongoose.Schema({
//   name: String,
//   originalName: String,
//   path: String,
// });

// const PdfFile = mongoose.model('PdfFile', pdfSchema);

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'application/pdf') {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({ storage: storage, fileFilter: fileFilter });

// app.post('/upload', upload.single('pdf'), (req, res) => {
//   const { name } = req.body;
//   const { filename, path } = req.file;

//   const newPdf = new PdfFile({
//     name: name,
//     originalName: filename,
//     path: path,
//   });

//   newPdf.save((err) => {
//     if (err) {
//       console.error('Error saving PDF to MongoDB:', err);
//       return res.status(500).send(err);
//     }
//     return res.status(200).send('PDF uploaded successfully!');
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });











































// // server.js
// const cors = require("cors")
// const express = require('express');
// const multer = require('multer');
// const mongoose = require('mongoose');

// const app = express();
// const port = 3034;
// app.use(cors())

// // MongoDB setup
// mongoose.connect("mongodb+srv://karunakaryadav167:multer7266046@cluster0.9epmbud.mongodb.net/?retryWrites=true&w=majority").then(()=>{
//     console.log("successful")
// }).catch(()=>{
//     console.log("error in connecting")
// });

// const fileSchema = new mongoose.Schema({
//   name: String,
//   originalName: String,
//   path: String,
// });

// const File = mongoose.model('File', fileSchema);

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, path.join(__dirname, 'uploads/')); // Use an absolute path
//     },
//     filename: (req, file, cb) => {
//       cb(null, Date.now() + '-' + file.originalname);
//     },
//   });
  



// // });

// const upload = multer({ storage: storage });

// // // Express route for file upload
// // app.post('/upload', upload.single('file'), (req, res) => {
// //   const { name } = req.body;
// //   const { filename, path } = req.file;

// //   const newFile = new File({
// //     name: name,
// //     originalName: filename,
// //     path: path,
// //   });

// //   newFile.save((err) => {
// //     if (err) {
// //       return res.status(500).send(err);
// //     }
// //     return res.status(200).send('File uploaded successfully!');
// //   });
// // });

// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });


// app.post('/upload', upload.single('file'), (req, res) => {
//     console.log('File upload request received:', req.file);
  
//     const { name } = req.body;
//     const { filename, path } = req.file;
  
//     console.log('Name:', name);
//     console.log('File details:', { filename, path });
  
//     const newFile = new File({
//       name: name,
//       originalName: filename,
//       path: path,
//     });
  
//     newFile.save((err) => {
//       if (err) {
//         console.error('Error saving file to MongoDB:', err);
//         return res.status(500).send(err);
//       }
//       return res.status(200).send('File uploaded successfully!');
//     });
//   });
  




















// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');

// // const app = express();
// // const port = 3036;

// // app.listen(port, () => {
// //     console.log(`Server is running on port ${port}`);
// // });

// // app.use(cors());
// // app.use(express.json());

// // // const MONGODB_URL = 
// // 'mongodb+srv://karunakaryadav167:newcrud7266046@cluster0.pcu9y5z.mongodb.net/?retryWrites=true&w=majority';


// // const MONGODB_URL = "mongodb+srv://karunakaryadav167:prasanna1234@cluster0.schlb7h.mongodb.net/?retryWrites=true&w=majority"


// // mongoose.connect(MONGODB_URL)
// // .then(() => {
// //     console.log('Connected to MongoDB successfully');
// // })
// // .catch((err) => {
// //     console.log('Error in connecting to MongoDB');
// //     console.log(err);
// // });

// // const noteSchema = new mongoose.Schema({
// //     title: {
// //         type: String,
// //         required: true,
// //     },
// //     file:{
        
// //     }
// // });

// // const Note = mongoose.model('Note', noteSchema);

// // app.post("/create", (req, res) => {
// //     const { title } = req.body; 

// //     const note = new Note({ title });
    
// //     note.save()
// //     .then(() => {
// //         res.status(201).json({ message: 'Note created successfully' });
// //     })
// //     .catch((error) => {
// //         res.status(500).json({ error: 'Failed to create note', details: error.message });
// //     });
// // });


// // app.get("/get", async (req, res) => {
// //   try {
// //       const data = await mongoose.connection.collection("notes").find().toArray();
// //       res.json(data);
// //   } catch (error) {
// //       res.status(500).json({ error: 'Failed to fetch notes', details: error.message });
// //   }
// // });



// // app.put("/update", async (req, res) => {
// //   const { title } = req.body;

// //   try {
// //       const updatedNote = await mongoose.connection.collection("notes").findOneAndUpdate(
// //           { title: title },  // Query: Find the note with this title
// //           { $set: { title: title } },  // Update: Set the title to the new value
// //           { returnOriginal: false }  // Options: Return the updated document
// //       );

      
// //     if (updatedNote) {
// //           res.status(200).json({ message: 'Note updated successfully', data: updatedNote });
// //       } else {
// //           res.status(404).json({ message: 'Note not found' });
// //       }
// //   } catch (error) {
// //       res.status(500).json({ error: 'Failed to update note', details: error.message });
// //   }
// // });











































































