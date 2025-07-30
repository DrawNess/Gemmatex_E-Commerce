const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const lastname = Joi.string();
const phone = Joi.string().min(10).max(15);
const email = Joi.string().email();

const getCustomerSchema = Joi.object({
  id: id.required(),
});

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
  phone: phone.required(),
  email: email.required(),
});

const updateCustomerSchema = Joi.object({
  name: name,
  lastname: lastname,
  phone: phone,
  email: email,
});

module.exports = {
  getCustomerSchema,
  createCustomerSchema,
  updateCustomerSchema,
};
