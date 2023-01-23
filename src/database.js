/*const mongoose = require("mongoose");
async function connectdb() {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("CONNECTED"));
}
module.exports = connectdb;
*/

const mongoose = require("mongoose");

function connectdb() {
    try {
        mongoose.set("strictQuery", true);

        //mongoose.connect(process.env.DATABASE_URL);
        mongoose.connect("mongodb+srv://usertest:Margot20022@apimongodb.litpd.mongodb.net/apimongodb?retryWrites=true&w=majority");
        console.log("CONNECTED");
        
    } catch (error) {
        console.log({error});
    }
}
module.exports = connectdb;