const Service = require("../service");


module.exports = {
  Add: async (data) => {
    let userdata = {
      id:data.id,
      Dname_Salary: data.Dname_Salary,
      dId:data.dId
    };
    let user = await Service.dService.addUser(userdata);
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
    const user = await Service.dService.getuser();
    if (user) {
      return {
        status: "Success",
        user: user,
      };
    }
  },

};
