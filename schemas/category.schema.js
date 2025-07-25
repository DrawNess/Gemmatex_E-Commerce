/* const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const image = Joi.string().uri();

const createCategorySchema = Joi.object({
  name: name.required(),
  image: image.required()
});

const updateCategorySchema = Joi.object({
  name: name,
  image: image
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema } */

const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(100);
const slug = Joi.string().min(3).max(100);
const description = Joi.string().allow('', null);
const image_url = Joi.string().uri();
const is_active = Joi.boolean();

const createCategorySchema = Joi.object({
  name: name.required(),
  slug: slug.required(),
  description: description,
  image_url: image_url.required(),
  is_active: is_active
});

const updateCategorySchema = Joi.object({
  name,
  slug,
  description,
  image_url,
  is_active
});

const getCategorySchema = Joi.object({
  id: id.required()
});

module.exports = {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema
};
