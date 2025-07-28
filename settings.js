/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || '';

const prefix = process.env.PREFIX || '.';

const author = process.env.OWNER_NAME || '𝘼𝙧𝙨𝙡𝙖𝙣 𝘾𝙝𝙖𝙪𝙙𝙖𝙧𝙮';

const packname = process.env.PACKNAME || '𝙼𝙰𝙵𝙸𝙰-𝚃𝚎𝚌𝚑';

const dev = process.env.OWNER_NUMBER || '923111977378';

const DevKeith = dev.split(",");

const antibot = process.env.ANTIBOT || 'false';

const botname = process.env.BOTNAME || '𝐌𝐀𝐅𝐈𝐀-𝐌𝐃';

const mode = process.env.MODE || 'private';

const sessionName = "session";

const url = process.env.URL || 'https://ik.imagekit.io/Arslan22/IMG-20250725-WA0121.jpg';

const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vat4TFC0QeaoLURbP61u';

const timezone = process.env.TIMEZONE || 'Asia/Karachi';

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
