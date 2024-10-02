
import ShopComputer from "../models/ShopComputersModel.js";

const createShopComputer = async (req,res) => {
    
    const {name, RFID, BeaconUID} = req.body;
    
    if(!name || !RFID || !BeaconUID) {
        const error = new Error('Asegurese de completar los campos obligatorios');
        return res.status(400).json({
            msg: error.message
        })
    }

    try {

        const shopComp = new ShopComputer(req.body);
        const result = await shopComp.save();

        return res.status(200).json({
            ok: true,
            result,
          });
        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "An unexpected error occurred, please check the log",
          });  
    }

}

export {
    createShopComputer
}   