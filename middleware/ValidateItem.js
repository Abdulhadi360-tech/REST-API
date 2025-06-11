// post & put route validation middleware

export function validateItemFields(req, res, next) {
  const { name, price, quantity } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: 'Valid "name" is required' });
  }

  if (price === undefined || typeof price !== "number") {
    return res.status(400).json({ error: '"price" must be a number' });
  }

  if (quantity === undefined || typeof quantity !== "number") {
    return res.status(400).json({ error: '"quantity" must be a number' });
  }

  next(); // Proceed to the route handler
}
