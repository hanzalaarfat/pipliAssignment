const User = require("../model/userModel");
const csvtojson = require("csvtojson");

const fs = require("fs");
const csv = require("fast-csv");

exports.AdddataManually = async (req, res) => {
  const {
    AgentName,
    firstname,
    email,
    Dob,
    addressh,
    phone,
    sate,
    zipCode,
    userType,
  } = req.body;
  try {
    const user = new User({
      AgentName,
      firstname,
      email,
      Dob,
      addressh,
      phone,
      sate,
      zipCode,
      userType,
    });
    const useradd = await user.save();
    if (useradd) {
      res.status(201).json({ message: "user added successfuly" });
    } else {
      res.status(500).json({ error: "Faild to adding" });
    }
  } catch (err) {
    res.status(500).json({ error: "Faild to adding" });
  }
};

exports.AdddataByCSVfile = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file a!");
    }

    let tutorials = [];
    let path = __basedir + "/public/uploads/" + req.file.filename;

    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        tutorials.push(row);
      })
      .on("end", () => {
        res.send("data add");
        User.create(tutorials)
          .then(() => {
            res.status(200).send({
              message:
                "Uploaded the file successfully: " + req.file.originalname,
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Fail to import data into database!",
              error: error.message,
            });
          });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

// exports.AdddataByCSVfile = async (req, res) => {
//   try {
//     // if (!req.files) {
//     //   return res.status(400).send("No files were uploaded.");
//     // }
//     console.log(req.files.file); // the uploaded file object

//     // csvtojson()
//     //   .fromFile(req.files)
//     //   .then((csvData) => {
//     //     User.create(csvData, (err, data) => {
//     //       if (err) throw err;
//     //     });

//     //     res.send(data.length + " user have been successfully uploaded.");
//     //   });
//   } catch (err) {
//     res.status(500).json({ error: "Faild to adding" });
//   }
// };
