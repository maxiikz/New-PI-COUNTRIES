


const {Country, Activity} = require ("../db")

const findAct= async(req, res)=>{
    try{
        let act= await Activity.findAll({
            include:Country
        })
        if(act){
            return res.status(200).json(act)
        }else{
            return res.status(404).send("no hay nada aca capo")
        }

    }
    catch(err){
        console.log(err,"no funciono activities find")
    }
}

const postAct = async(req, res)=>{
    try{
        let{name, difficult, duration, season, countries}= req.body;
        let newAct = await Activity.create({name, difficult, duration, season});
        countries.forEach(async country=>
            {let activityC= await Country.findOne({
                where:{
                    name:country}})
        await newAct.addCountry(activityC)
    })
    return res.status(201).json(newAct,"se creo")

    }
    catch(error){
        console.log(error, "no se creo =(")
        return res.status(504)
    }
}

module.exports={
    postAct,
    findAct
}