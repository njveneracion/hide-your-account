import Account from "../models/account.model.js";

export const getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({ user: req.user._id });
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: "Failed fetching accounts!" });
  }
};

export const createAccount = async (req, res) => {
  const { platform, email, password, notes } = req.body;
  const account = new Account({
    platform,
    email,
    password,
    notes,
    user: req.user._id,
  });

  try {
    await account.save();
    res.status(201).json(account);
  } catch (error) {
    res.status(500).json({ message: "Failed creating account!" });
  }
};
