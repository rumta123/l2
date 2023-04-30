module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345',
  database: 'tododb',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};