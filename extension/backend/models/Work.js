import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Works = db.define(
  "works",
  {
    selector: {
      type: DataTypes.STRING
    }
  },
  {
    english: {
      type: DataTypes.STRING
    }
  },
  {
    french: {
      type: DataTypes.STRING
    }
  },
  {
    spanish: {
      type: DataTypes.STRING
    }
  },
  
  {
    timestamps: false
  },
  {
    freezeTableName: true
  }
);

(async () => {
  await db.sync();
})();

export default Works;
