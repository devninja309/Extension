import Users from "../models/UserModel.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "selector", "english","spanish","french","createdAt"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
const {selector} = req.body
  try {
    await Users.create({
      selector: selector,
    });
    res.json({ msg: "Registration Successful" });
  } catch (error) {
    console.log(error);
  }
};


export const Update = async (req, res) => {
  const { id, selector, spanish, french } = req.body;
  console.log(id, spanish, french);
  try {
    await Users.update(
      { selector: selector, spanish: spanish, french: french },
      {
        where: {
          id: id,
        },
      }
    );
    return res.json({ msg: "updated" });
  } catch (err) {
    res.status(404).json({ msg: "faild update" });
  }
};

export const Delete = async (req, res) => {
  // console.log("----------", req.body.name);
  await Users.destroy({
    where: {
      english: req.body.english,
    },
  });
  res.json({ msg: req.body.english + "----- successfully deleted" });
};

//extension field
export const getSelector = async(req, res) =>{
  // res.header("Access-Control-Allow-Origin", "*"); 

  try {
    const users = await Users.findAll({
      attributes: ["selector", "spanish", "french"],
    });
    res.json(users)
    console.log(res.json(users));
  } catch (error) {
    console.log(error);
  }
};

export const createSelector = async(req, res) =>{
  // res.header("Access-Control-Allow-Origin", "*"); 
  let english = req.body.english
  try {
    english.map((item, index) => {
      Users.update(
        {
          english: item[Object.keys(item)]
        },
        {
          where: {
            selector: Object.keys(item)
          }
        }
      )
    })
    
    // await Users.save({
    //   selector: selector,
    // });
    res.json({ msg: "Registration Successful" });
  } catch (error) {
    console.log(error);
  }
}
