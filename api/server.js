const express = require('express');

function startServer() {
    const app = express();
    const port = 8000;
    
    app.use(require('body-parser').json());

    // Require all the routes
    const pacientiRoutes = require('./pacienti');

    // Tell Express to use the routes
    app.use('/', pacientiRoutes);

    // Start the web server
    app.listen(port, () => {
        console.log(`HeathSense back-end listening on port ${port}`)
    });
}

module.exports = {
    startServer,
};
