/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const fs = require('fs-extra');

const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}
const session = process.env.SESSION || '';

const prefix = process.env.PREFIX || '.';

const author = process.env.OWNER_NAME || '𝐀𝐫𝐬𝐥𝐚𝐧 𝐂𝐡𝐚𝐮𝐝𝐚𝐫𝐲';

const packname = process.env.PACKNAME || '𝐌𝐀𝐅𝐈𝐀-𝐓𝐞𝐜𝐡';

const dev = process.env.OWNER_NUMBER || '923111977378';

const DevKeith = dev.split(",");

const antibot = process.env.ANTIBOT || 'false';

const botname = process.env.BOTNAME || '𝐌𝐀𝐅𝐈𝐀-𝐌𝐃';

const mode = process.env.MODE || 'private';

const sessionName = "session";

const url = process.env.URL || 'https://ik.imagekit.io/Arslan22/IMG-20250725-WA0121.jpg';

const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vat4TFC0QeaoLURbP61u';

const timezone = process.env.TIMEZONE || 'Asia/Karachi';

//fo mega users only
const megaEmail = process.env.MEGA_EMAIL || 'arslanchaudary701@gmail.com';
const megaPassword = process.env.MEGA_PASSWORD || 'Ac714744786$';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  database,  
  botname, 
  mode,
  prefix,
megaEmail,
 megaPassword,
  timezone,
  author,  
  url,
  gurl,
  antibot,
  packname,
  dev,
  DevKeith,  
  session,
};
