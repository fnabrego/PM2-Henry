const dbConfig = require("./src/config/dsConfig");
const app = require("./src/server");
const PORT = 3000;

const startServer = async () => {
    try {
        app.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
    await dbConfig();
};
startServer();