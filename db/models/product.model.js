const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  slug: {
    allowNull: false,
    type: DataTypes.TEXT,
    unique: true,
  },
  short_description: {
    type: DataTypes.TEXT,
  },
  description: {
    type: DataTypes.TEXT,
  },
  image_url: {
    type: DataTypes.TEXT,
  },
  gallery_urls: {
    type: DataTypes.JSONB,
  },
  price: {
    allowNull: false,
    type: DataTypes.DECIMAL(10, 2),
  },
  discount_price: {
    type: DataTypes.DECIMAL(10, 2),
  },
  sku: {
    type: DataTypes.TEXT,
    unique: true,
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  unit_of_measure: {
    type: DataTypes.TEXT,
  },
  weight: {
    type: DataTypes.DECIMAL(10, 2),
  },
  dimensions: {
    type: DataTypes.TEXT,
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW,
  },
};

class Product extends Model {
  static associate(models) {
    // Aquí puedes agregar asociaciones si tienes tablas relacionadas
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: true, // porque ya usas manualmente created_at y updated_at
    };
  }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product };
