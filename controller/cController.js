const Service = require("../service");


module.exports = {
  Add: async (data) => {
    let userdata = {
      id:data.id,
      Cname_Education: data.Cname_Education,
      cId:data.cId
    };
    let user = await Service.cService.addUser(userdata);
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
    const user = await Service.cService.getuser();
    if (user) {
      return {
        status: "Success",
        user: user,
      };
    }
  },
  
};
