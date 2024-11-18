import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DBNAME as string,
  process.env.DBUSERNAME as string,
  process.env.DBPASSWORD as string,
  {
    host: process.env.DBHOST,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
    logging: false, // Disable logging; enable for debugging
  }
);

export const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected!");
    await sequelize.sync({ alter: true }); // Sync models with DB
  } catch (error) {
    console.error("Unable to connect to PostgreSQL:", error);
  }
};
