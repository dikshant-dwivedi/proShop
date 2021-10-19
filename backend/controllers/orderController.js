import asyncHandler from "express-async-handler"
import Order from "../models/orderModel.js"

// @desc Create new order
// @route GET /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItem,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body
  if (orderItem && orderItem.length === 0) {
    res.status(400)
    throw new Error("No order items")
  } else {
    const order = new Order({
      orderItem,
      shippingAddress,
      user: req.user._id,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })
    const createdOrder = await order.save()
    res.status(201).json(createdOrder)
  }
})

export { addOrderItems }
