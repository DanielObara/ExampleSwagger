import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import endpoints from '../endpoints/exportEndpoints';

const port = process.env.PORT || 3333;

const app = express();

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    components: {},
    info: {
      title: 'Customer API',
      description: 'Customer API Information',
      contact: {
        name: 'Amazing Developer',
      },
      servers: ['http://localhost:3333'],
    },
  },
  apis: ['src/server.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * components:
 *  schemas:
 *   Playlist:
 *    type: object
 *    properties:
 *     $ref: '#/components/schemas/Course'
 *
 *   Stacks:
 *    type: array
 *    items:
 *     $ref: '#/components/schemas/Courses'
 *
 *   Course:
 *    type: object
 *    properties:
 *     id:
 *       type: string
 *       format: uuid
 *     title:
 *       type: string
 *     teacher:
 *       $ref: '#/components/schemas/Teacher'
 *     lessons:
 *       type: array
 *       items:
 *       $ref: '#/components/schemas/Lesson'
 *     thumb:
 *       type: string
 *
 *   Courses:
 *    type: object
 *    properties:
 *     id:
 *       type: string
 *       format: uuid
 *     title:
 *       type: string
 *     teacher:
 *       $ref: '#/components/schemas/Teacher'
 *     lessonCount:
 *       type: integer
 *       format: int64
 *     thumb:
 *       type: string
 *
 *   Teacher:
 *    type: object
 *    properties:
 *     id:
 *       type: string
 *       format: uuid
 *     name:
 *       type: string
 *     thumb:
 *       type: string
 *
 *   Lesson:
 *    type: object
 *    properties:
 *     id:
 *       type: string
 *       format: uuid
 *     title:
 *       type: string
 *     time:
 *       type: string
 *     position:
 *       type: integer
 *       format: int64
 *     lesson_number:
 *       type: integer
 *       format: int64
 *     type_ref:
 *       type: integer
 *       format: int64
 *     type:
 *       type: string
 *
 */

/**
 * @swagger
 * /playlists:
 *     get:
 *       description: Returns all playlists
 *       produces:
 *        - application/json
 *       responses:
 *         200:
 *           description: OK
 *           schema:
 *             type: object
 *             properties:
 *               hacker:
 *                 $ref: '#/components/schemas/Stacks'
 *               hipster:
 *                 $ref: '#/components/schemas/Stacks'
 *               hustler:
 *                 $ref: '#/components/schemas/Stacks'
 *               hyper:
 *                 $ref: '#/components/schemas/Stacks'
 */

app.get('/playlists', (req, res) => {
  res.send(endpoints.listAllPlaylists);
});

/**
 * @swagger
 * /playlists/id:
 *     get:
 *       description: Returns a playlist
 *       produces:
 *         - application/json
 *       parameters:
 *         - name: id
 *           description: Playlist Object
 *           in:  path
 *           required: true
 *           type: integer
 *       responses:
 *         200:
 *           description: OK
 *           schema:
 *             type: object
 *             properties:
 *               course:
 *                 $ref: '#/components/schemas/Course'
 */
app.get('/playlists/:id', (req, res) => {
  res.send(endpoints.listOnePlaylist);
});
/**
 * @swagger
 * /login:
 *     post:
 *       summary: Return token.
 *       description: Return token and user informations.
 *       consumes:
 *         - application/x-www-form-urlencoded
 *       parameters:
 *         - in: string
 *           name: email
 *           type: string
 *           default: marcelinho@gmail.com
 *           description: User email.
 *         - in: string
 *           name: password
 *           type: password
 *           default: cabelinho123
 *           description: User password.
 *       responses:
 *         200:
 *           description: OK
 *           schema:
 *             type: object
 *             properties:
 *               auth_token:
 *                 type: string
 *               profile_name:
 *                 type: string
 *               profile_picture:
 *                 type: string
 */
app.post('/login', (req, res) => {
  res.send(endpoints.login);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
