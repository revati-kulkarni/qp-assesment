import * as dotenv from 'dotenv';

export const ENVIRONMENT = process.env.NODE_ENV;

switch (ENVIRONMENT) {
    case 'development':
        {
            dotenv.config({ path: '.env.development' });
        }
        break;

    default: {
        dotenv.config({ path: '.env.development' });
    }
}
export const PORT = process.env['PORT'];
export const DBUSERNAME = process.env.DBUSERNAME;
export const DBPASSWORD = process.env.DBPASSWORD;
export const DBNAME = process.env.DBNAME;
export const DBHOST = process.env.DBHOST;