const shortid = require("shortid");
const { urlModel } = require("../models/URLs");

const generateShortUrl = async (req, res) => {
  console.info("asdasd");
  const { link } = req.body;
  console.info(link);
  if (!link) {
    return res.status(400).json({ error: "No link provided" });
  }
  console.info(link);
  const shortId = shortid();
  console.info(shortId);
  const url = urlModel({
    shortId: shortId,
    redirectUrl: link,
  });
  await url.save();

  return res.json({ id: shortId });
};

module.exports = {
  generateShortUrl,
};
