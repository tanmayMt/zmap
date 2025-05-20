import express from "express";
import Item from "../models/Item.js";

const router = express.Router() ;


router.post("/add",async(req,res)=>{
    try {
        const {name, description, price} = req.body;
        
        const newItem = new Item({name, description, price});
        await newItem.save();//Save ite
        res.status(201).send({
            success:true,
            data: newItem,
            message:"Item is added Successfully"
        });
    }
    catch (error)
    {
        res.status(404).send({
            success:false,
            message: "Server Error in Adding Item"
        })
    }
})


router.get('/',  async (req, res) => {
  try {
    const items = await Item.find();

    // Return items in JSON format
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching items', error: err.message });
  }
});

// UPDATE an existing item
router.put('/:id',  async (req, res) => {
  try {
    // Find the item by ID
    const item = await Item.findOneAndUpdate(
      { _id: req.params.id},

      req.body,
      { new: true } // return the updated doc
    );

    if (!item) {
      return res.status(404).json({ message: 'Item not found or unauthorized' });
    }

    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Error updating item', error: err.message });
  }
});

// DELETE an item
router.delete('/:id',  async (req, res) => {
  try {
    const item = await Item.findOneAndDelete({ _id: req.params.id});

    if (!item) {
      return res.status(404).json({ message: 'Item not found or unauthorized' });
    }

    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting item', error: err.message });
  }
});

export default router;