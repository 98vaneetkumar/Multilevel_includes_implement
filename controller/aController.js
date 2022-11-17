const Service = require("../service");


module.exports = {
  Add: async (data) => {
    let userdata = {
      id:data.id,
      Aname_user: data.Aname_user,
    };
    let user = await Service.aService.addUser(userdata);
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
    const user = await Service.aService.getuser();
    console.log("Users",user);
    if (user) {
      return {
        status: "Success",
        A: user,
      };
    }
  },
  gets: async (data) => {
    const user = await Service.aService.getusers();
    if (user) {
      return {
        status: "Success",
        A: user,
      };
    }
  },

};
