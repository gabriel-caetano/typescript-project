import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.integer('external_id').notNullable()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.string('image_url')
    table.string('phone')
    table.string('bio')
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable('users')
}
