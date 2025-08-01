/* const getConnection = require('../libs/postgres'); */
/* const pool = require('../libs/postgres.pool'); */

const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');


class UserService {
  constructor() {
    this.users = [];
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }
/*   async find() {
    const client = getConnection();
    const rta = client.query('SELECT * FROM public.products');
    return rta.rows;
  } */

/*     async find() {
    const query = 'SELECT * FROM products';
    const rta = await this.pool.query(query);
    return rta.rows;
  } */

  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
