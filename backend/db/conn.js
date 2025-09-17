const mongoose = require("mongoose")

async function main () {

    try {
        
        mongoose.set("strictQuery", true)

        await mongoose.connect ("mongodb+srv://mathpires6_db_user:cZk4Jo0VeD3WQSaJ@cluster0.oowzbpv.mongodb.net/memories?retryWrites=true&w=majority&appName=Cluster0")

        console.log("Conectado ao banco")

    } catch (error) {
        console.log ()
    }

}

module.exports = main