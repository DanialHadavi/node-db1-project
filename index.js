const server = require("./api/server.js");
const accountsRouter = require("./accounts/accountsRouter");
const PORT = process.env.PORT || 5001;
server.use("/api/accounts", accountsRouter);
server.use("/", (req, res) => {
  res.status(200).json({ api: "up and running" });
});
server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
