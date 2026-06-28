// src/server.ts

import { app } from "./app";
import { sequelize } from "./config/config";

const PORT = process.env.PORT || 8080;

const startServer = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully");

    await sequelize.sync();
    console.log("✅ Database synchronized successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();