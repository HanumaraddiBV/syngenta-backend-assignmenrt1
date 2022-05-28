const _ = require("lodash");

const post = (model) => async (req, res) => {
  try {
    const item = await model.create(req.body);
    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

const getAll = (model) => async (req, res) => {
  try {
    const items = await model.find().lean().exec();
    return res.status(200).send(items);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

const getCategory = (model) => async (req, res) => {
  try {
    const items = await model.find().lean().exec();
    var response = [];
    // console.log(req.query);

    if (typeof req.query.category != "undefined") {
      items.filter(function (model) {
        // console.log('model:', model)

        if (model.category.includes(req.query.category)) {
          // console.log("model:", model);

          response.push(model);
        }
      });
    }

    response = _.uniqBy(response, "id");
    return res.status(201).send(response);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
const getAllData = (model) => async (req, res) => {
  try {
    const items = await model.find().lean().exec();
    var response = [];
    // console.log(req.query);

    if (typeof req.query.title != "undefined") {
      items.filter(function (model) {
        // console.log('model:', model)

        if (model.title === req.query.title) {
          // console.log("model:", model);

          response.push(model);
        }
      });
    }

    response = _.uniqBy(response, "id");
    return res.status(201).send(response);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
const getAllDataAuthor = (model) => async (req, res) => {
  try {
    const items = await model.find().lean().exec();
    var response = [];
    // console.log(req.query);

    if (typeof req.query.author != "undefined") {
      items.filter(function (model) {
        // console.log('model:', model)

        if (model.author === req.query.author) {
          console.log("model:", model);

          response.push(model);
        }
      });
    }

    response = _.uniqBy(response, "id");
    return res.status(201).send(response);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};


const getStatus = (model) => async (req, res) => {
  try {
    const items = await model.find().lean().exec();
  
    if (typeof req.query.title != "undefined") {
      items.filter(function (model) {
        // console.log('model:', model)

        if (model.title === req.query.title) {
         
          return res.status(201).send(model.status);
        }
      });
    }
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

module.exports = (model) => ({
  post: post(model),
  get: getAll(model),
  getCategory: getCategory(model),
  getAllData: getAllData(model),
  getAllDataAuthor:getAllDataAuthor(model),
  getStatus:getStatus(model),
 
});
