const getHome = (req, res)=> {
    res
    .status(200)
    .send("estas en la ruta '/' de movies app...");
};
module.exports = {getHome};