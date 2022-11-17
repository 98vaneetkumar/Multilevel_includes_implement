const Service = require("../service");


module.exports = {
  Add: async (data) => {
    let userdata = {
      id:data.id,
      Bname_Department: data.Bname_Department,
      bId:data.bId
    };
    let user = await Service.bService.addUser(userdata);
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
    const user = await Service.bService.getuser();
    if (user) {
      return {
        status: "Success",
        user: user,
      };
    }
  },
 
};
