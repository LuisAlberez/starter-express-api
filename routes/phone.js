const { Router } = require("express");
const router = Router();
const findUser= require('../controllers')
router.get('/',async (req,res)=>{
    const {name,dni} = req.query
    if(name&&!dni){
      try {
        let data = await findUser(name, null);
        console.log(data)
        res.status(200).json({nombres : data.nombres,dni:data.dni,celular : data.celular});
      } catch (err) {
        res.status(404).send(err.message);
      }
    }else if (!name&&dni){
      try {
        let data = await findUser(null, dni);
        res.status(200).json({nombres : data.nombres,dni:data.dni,celular : data.celular});
      } catch (err) {
        res.status(404).send(err.message);
      }
    }else{
        res.status(404).send('Tiene que ingresar algun dato');
    }
  
})

module.exports = router;