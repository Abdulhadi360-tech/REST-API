import express from "express";
import { v4 as uuidv4 } from "uuid";

let items = [
  {
    name: "Kettle",
    price: 200,
    quantity: 5,
  },
];

export const getItems = (req, res) => {
  res.json(items);
};
export const getItemBYId = (req, res) => {
  const { id } = req.params;
  const foundItem = items.find((item) => item.id === id);

  if (!foundItem) {
    return res.status(404).json({ error: "Item not found" });
  }

  res.json(foundItem);
};
export const addNewItem = (req, res) => {
  const { name, price, quantity } = req.body;

  const newItem = {
    id: uuidv4(),
    name,
    price,
    quantity,
  };

  items.push(newItem);

  res.status(201).json({
    message: `The new item "${newItem.name}" has been added to the list.`,
    item: newItem,
  });
};
export const updatedItemById = (req, res) => {
  const { id } = req.params;
  const { name, price, quantity } = req.body;
  const itemToUpdate = items.find((item) => item.id === id);

  if (!itemToUpdate) {
    return res.status(404).json({ error: "Item not found" });
  }

  itemToUpdate.name = name;
  itemToUpdate.price = price;
  itemToUpdate.quantity = quantity;

  res.json({
    message: `Item with ID ${id} has been updated.`,
    updatedItem: itemToUpdate,
  });
};
export const deleteItemByID = (req, res) => {
  const { id } = req.params;
  const originalLength = items.length;

  items = items.filter((item) => item.id !== id);

  if (items.length === originalLength) {
    return res.status(404).json({ error: "Item not found" });
  }

  res.json({ message: `Item with ID ${id} has been deleted.` });
};
