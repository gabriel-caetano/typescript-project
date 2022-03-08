import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('test', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.string('avatar')
    table.string('whatsapp')
    table.string('bio')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('test')
}
