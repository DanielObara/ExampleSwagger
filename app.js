const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const port = process.env.PORT || 3000;
const endpoints = require('./endpoints/exportEndpoints');

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: "Customer API",
			description: "Customer API Information",
			contact: {
				name: "Amazing Developer",
			},
			servers: ["http://localhost:5000"],
		},
	},
	apis: ["app.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /authenticator:
 *     get:
 *       description: Oi libzinha linda
 *       responses:
 *         '200':
 *           description: Sucessfull response
 */
app.get("/authenticator", (req, res) => {
	res.send(endpoints.listAllPlaylists);
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
