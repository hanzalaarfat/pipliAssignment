const Policy = require("../model/policyModel");
const csvtojson = require("csvtojson");

exports.AddManuallyPolicy = async (req, res) => {
  const {
    pNo,
    start,
    end,
    category,
    collectionId,
    CompanyCollectionId,
    userId,
  } = req.body;
  try {
    const policy = new Policy({
      pNo,
      start,
      end,
      category,
      collectionId,
      CompanyCollectionId,
      userId,
    });
    const data = await policy.save();
    if (data) {
      res.status(201).json({ message: "policy added successfuly" });
    } else {
      res.status(500).json({ error: "Faild to adding policy" });
    }
  } catch (err) {
    res.status(500).json({ error: "Faild to adding policy" });
  }
};

exports.AddPolicyByCVSfile = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).send("No files were uploaded.");
    }
    console.log(req.files.file);
    csvtojson()
      .fromFile(req.files)
      .then((csvData) => {
        User.create(csvData, (err, data) => {
          if (err) throw err;
        });
        res.send(data.length + " user have been successfully uploaded.");
      });
  } catch (err) {
    res.status(500).json({ error: "Faild to adding" });
  }
};
