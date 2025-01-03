import Account from "../models/account.model.js";

export const getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({ owner: req.user._id });
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: "Failed fetching accounts!" });
  }
};

export const createAccount = async (req, res) => {
  const { platform, email, password, notes } = req.body;

  try {
    const account = new Account({
      platform,
      email,
      password,
      notes,
      owner: req.user._id,
    });
    await account.save();
    res.status(201).json(account);
  } catch (error) {
    res.status(500).json({ message: "Failed creating account!" });
  }
};
