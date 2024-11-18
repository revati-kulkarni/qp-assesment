import { Request, Response } from "express";
import Grocery from "../../models/grocery.model";

export const createGrocery = async (req: Request, res: Response) => {
  try {
    const { name, quantity, price } = req.body;
    const grocery = await Grocery.create({ name, quantity, price, createdBy: req.user.id });
    res.status(201).json(grocery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getGroceries = async (req: Request, res: Response) => {
  try {
    const groceries = await Grocery.findAll();
    res.status(200).json(groceries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
