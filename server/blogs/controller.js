import express from "express";
import Blog from "./model";

const router = express.Router();


router.get("blogs/list", async (req, res) => {
  const blogs = await Blog.find(req.query);
  res.status(200).send(blogs);
});


module.exports = router;
