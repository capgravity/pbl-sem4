const db = require('../utilities/postgres');


const getStops = async (req, res) => {
    try{
        const result = await db.query('SELECT * FROM stops;'); 
        return res.status(200).json(result.rows); 
    }catch(error){
        console.log("Error in getStops: ", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const getRoutes = async (req, res) => {
    const {stop1, stop2} = req.params;
    console.log(stop1, stop2);
    try{
        const result = await db.query('SELECT * FROM routes;');
        return res.status(200).json(result.rows);
    }catch(error){
        console.log("Error in getRoutes: ", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    getStops,
    getRoutes
}