/* const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required()
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }


 */
const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(255);
const slug = Joi.string().alphanum().min(3).max(255);
const shortDescription = Joi.string().allow('', null);
const description = Joi.string().allow('', null);
const imageUrl = Joi.string().uri();
const galleryUrls = Joi.array().items(Joi.string().uri());
const price = Joi.number().precision(2).min(0);
const discountPrice = Joi.number().precision(2).min(0).allow(null);
const sku = Joi.string().alphanum().min(3).max(50);
const stock = Joi.number().integer().min(0);
const unitOfMeasure = Joi.string().max(50);
const weight = Joi.number().precision(2).min(0).allow(null);
const dimensions = Joi.string().max(255).allow(null);
const tags = Joi.array().items(Joi.string());
const isActive = Joi.boolean();

const createProductSchema = Joi.object({
  name: name.required(),
  slug: slug.required(),
  short_description: shortDescription,
  description: description,
  image_url: imageUrl,
  gallery_urls: galleryUrls,
  price: price.required(),
  discount_price: discountPrice,
  sku: sku.required(),
  stock: stock,
  unit_of_measure: unitOfMeasure,
  weight: weight,
  dimensions: dimensions,
  tags: tags,
  is_active: isActive
});

const updateProductSchema = Joi.object({
  name,
  slug,
  short_description: shortDescription,
  description,
  image_url: imageUrl,
  gallery_urls: galleryUrls,
  price,
  discount_price: discountPrice,
  sku,
  stock,
  unit_of_measure: unitOfMeasure,
  weight,
  dimensions,
  tags,
  is_active: isActive
});

const getProductSchema = Joi.object({
  id: id.required()
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema
};
