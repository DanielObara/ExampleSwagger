import { Router } from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import endpoints from '../endpoints/exportEndpoints';

const routes = new Router();

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
  // apis: ['.routes/*.js'],
  apis: ['.server/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /playlists:
 *     get:
 *       description: Return all playlists
 *       responses:
 *         '200':
 *           description: Sucessfull response
 */
routes.get('/playlists', (req, res) => {
  res.send(endpoints.listAllPlaylists);
});

// routes.get('/', (req, res) => res.json({ message: 'ok' }));

export default routes;
