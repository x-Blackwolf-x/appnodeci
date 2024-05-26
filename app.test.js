const request = require('supertest');
const app = require('./app');

describe('/ endpoint', () => {
  test("Debe devolver un 'Hola Mundo'", async () => {
    const response = await request(app).get('/');
    const body = JSON.parse(response.text);
    expect(response.status).toBe(200);
    expect(body.message).toBe('¡Hola Mundo!');  // Ajustar el valor esperado para que coincida con el valor real
  });
});
