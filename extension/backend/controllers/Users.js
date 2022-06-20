import Works from "../models/Work.js";


export const Register = async (req, res) => {

  res.header("Access-Control-Allow-Origin", "*"); 

  console.log(req.body)
  const {selector, english, spanish, french} = req.body
  try {
    await Works.create({
      selector : selector,
      english : english,
      spanish : spanish,
      french : french
    }
    )
    res.json({ msg: "Registration Successful" });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await Works.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};
