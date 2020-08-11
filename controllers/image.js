const clarifai = require('clarifai');

const app = new clarifai.App({
  apiKey: '4545e3c366884d11843d9652ecc89ece',
});

handleAPIcall = (req, res) => {
  app.models
  .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
  .then(data => res.json(data))
  .catch(err => res.status(400).json('unable to work with API'));
}

handleImage = (req,res, db) => {
  const { id } = req.body;
  db('users').where('id', '=', id).increment('entries', 1).returning('entries')
  .then(entries => res.json(entries[0])).catch(err => res.status(400).json('unable to get entries'));
};

module.exports = {
  handleImage: handleImage,
  handleAPIcall: handleAPIcall
}