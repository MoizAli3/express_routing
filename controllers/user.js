import User from "../models/user.js";

export const handleGetAllUsers = async (req, res) => {
  const allDBUsers = await User.find({});

  const html = `<ul class="border"> ${allDBUsers
    .map(
      (user) => `<li>${user.firstName} - ${user.lastName} - ${user.email} </li>`
    )
    .join("")} <ul/>`;

  res.send(html);
};

export const handleRegisterUsers = async (req, res) => {
  const body = req.body;
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
  });

  console.log(result);
  res.status(201).send({ message: "Data added Succefully" });
};
