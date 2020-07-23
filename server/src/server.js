import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import endpoints from '../endpoints/exportEndpoints';

const app = express();

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Customer API',
      description: 'Customer API Information',
      contact: {
        name: 'Amazing Developer',
      },
      servers: ['http://localhost:3333'],
    },
  },
  apis: ['server.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /playlists:
 *     get:
 *       description: Return all playlists
 *       responses:
 *         '200':
 *           description: Sucessfull response
 */
app.get('/playlists', (req, res) => {
  res.send(endpoints.listAllPlaylists);
});

app.get('/', (req, res) => {
  res.send({ msg: 'ok' });
});

app.listen(3333, () => {
  console.log(`Server listening on port 3333`);
});
// import app from './app';

// app.listen(3333, () => {
//   console.log('Server listening on port 3333');
// });
