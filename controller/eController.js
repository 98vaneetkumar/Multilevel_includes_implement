const Service = require("../service");


module.exports = {
  Add: async (data) => {
    let userdata = {
      id:data.id,
      Ename_Address: data.Ename_Address,
      eId:data.eId
    };
    let user = await Service.eService.addUser(userdata);
    if (user) {
      return {
        status: "Success",
        message: "Add user successfull",
        user: user,
      };
    } else {
      return {
        status: "unSuccess",
        message: " unable to Add user ",
        user: user,
      };
    }
  },
  get: async (data) => {
    const user = await Service.eService.getuser();
    if (user) {
      return {
        status: "Success",
        user: user,
      };
    }
  },

  
};
