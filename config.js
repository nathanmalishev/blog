// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

const path = require('path')
const PUBLIC_URL = process.env.PUBLIC_URL
const PORT = process.env.PORT || '2368'
const GHOST_CONTENT = process.env.GHOST_CONTENT
const GHOST_SOURCE = process.env.GHOST_SOURCE


console.log('using this config!')
console.log('GHOST_CONTENT:', GHOST_CONTENT) //  /var/lib/ghost
console.log('GHOST_SOURCE:', GHOST_SOURCE)   //  /usr/src/ghost



var config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: PUBLIC_URL,
        paths: {
            contentPath: GHOST_CONTENT,
        },
        mail: {},
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(GHOST_CONTENT, '/data/ghost.db'),
            },
            debug: true,
        },

        server: {
            host: '0.0.0.0',
            port: PORT,
        }
    }
}

module.exports = config
