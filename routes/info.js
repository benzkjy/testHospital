const router = require("express").Router();

//Info model
const Info = require("../models/Info");

// @route   GET /info
// @desc    get all information row
router.get("/", (req, res) => {
  Info.find()
    .then(info => res.json(info))
    .catch(err => res.status(400).json(err));
});

// @route   POST /info/add
// @desc    Create information
router.post("/add", (req, res) => {
  const newInfo = new Info({
    patientName: req.body.patientName,
    age: Number(req.body.age),
    gender: req.body.gender,
    weight: Number(req.body.weight),
    height: Number(req.body.height),
    BMI: Number(req.body.BMI),
    patientDoctor: req.body.patientDoctor,
    description: req.body.description
  });

  newInfo
    .save()
    .then(() => res.json("Info added " + newInfo))
    .catch(err => res.status(400).json(err));
});

// @route   GET /info/:id
// @desc    get information by id
router.get("/:id", (req, res) => {
  Info.findById(req.params.id)
    .then(info => res.json(info))
    .catch(err => res.status(400).json(err));
});

// @route   DELETE /info/:id
// @desc    delete information by id
router.delete("/:id", (req, res) => {
  Info.findByIdAndDelete(req.params.id)
    .then(info => res.json("information deleted."))
    .catch(err => res.status(400).json(err));
});

// @route   POST /info/:id
// @desc    edit information
router.post("/edit/:id", (req, res) => {
  Info.findById(req.params.id)
    .then(info => {
      (info.patientName = req.body.patientName),
        (info.age = Number(req.body.age)),
        (info.gender = req.body.gender),
        (info.weight = Number(req.body.weight)),
        (info.height = Number(req.body.height)),
        (info.BMI = Number(req.body.BMI)),
        (info.patientDoctor = req.body.patientDoctor),
        (info.description = req.body.description);

      info
        .save()
        .then(() => res.json("information updated."))
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;
