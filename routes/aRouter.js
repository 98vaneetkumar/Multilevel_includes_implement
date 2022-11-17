const express= require("express")
const router= express.Router()
const Controller= require("../controller/index")
const sendResponse = require("../helper/sendResponse");
//add user
router.post(
    "/add",
    (req, res) => {
      return sendResponse.executeMethod(
        Controller.aController.Add,
        req.body,
        req,
        res
      );
    }
  );


//Get record of all the users
router.get(
    "/getuser",
    (req, res) => {
      return sendResponse.executeMethod(
        Controller.aController.get,
        req.body,
        req,
        res
      );
    }
);

router.get(
  "/getusers",
  (req, res) => {
    return sendResponse.executeMethod(
      Controller.aController.gets,
      req.body,
      req,
      res
    );
  }
);

  



module.exports = router;