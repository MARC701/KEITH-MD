const { DataTypes } = require('sequelize');
const { database } = require('../settings'); 

const SettingsDB = database.define('settings', {
    prefix: {
        type: DataTypes.STRING,
        defaultValue: "-",
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        defaultValue: "𝐀𝐫𝐬𝐥𝐚𝐧 𝐂𝐡𝐚𝐮𝐝𝐚𝐫𝐲",
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        defaultValue: "https://i.imgur.com/m0NTPFI.jpeg",
        allowNull: false
    },
    gurl: {
        type: DataTypes.STRING,
        defaultValue: "https://whatsapp.com/channel/0029Vat4TFC0QeaoLURbP61u",
        allowNull: false
    },
    timezone: {
        type: DataTypes.STRING,
        defaultValue: "Asia/Karachi",
        allowNull: false
    },
    botname: {
        type: DataTypes.STRING,
        defaultValue: "ᴍᴀʀᴄ-ᴍᴅ",
        allowNull: false
    },
    packname: {
        type: DataTypes.STRING,
        defaultValue: "🄼🄰🅁🄲-🄼🄳",
        allowNull: false
    },
    mode: {
        type: DataTypes.STRING,
        defaultValue: "public",
        allowNull: false
    
    
    },
    sessionName: {
        type: DataTypes.STRING,
        defaultValue: "ᴍᴀʀᴄ-ᴍᴅ",
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'bot_settings'
});

async function initSettingsDB() {
    try {
        await SettingsDB.sync({ alter: true });
        console.log('Settings table ready');
    } catch (error) {
        console.error('Error initializing Settings table:', error);
        throw error;
    }
}

async function getSettings() {
    try {
        let settings = await SettingsDB.findOne();
        if (!settings) {
            settings = await SettingsDB.create({});
        }
        return settings;
    } catch (error) {
        console.error('Error getting settings:', error);
        // Fallback to default settings
        return {
            prefix: "-",
            author: "𝐀𝐫𝐬𝐥𝐚𝐧 𝐂𝐡𝐚𝐮𝐝𝐚𝐫𝐲",
            url: "https://i.imgur.com/m0NTPFI.jpeg",
            gurl: "https://whatsapp.com/channel/0029Vat4TFC0QeaoLURbP61u",
            timezone: "Asia/Karachi",
            botname: "ᴍᴀʀᴄ-ᴍᴅ",
            packname: "🄼🄰🅁🄲-🄼🄳",
            mode: "public",
           
            sessionName: "ᴍᴀʀᴄ-ᴍᴅ"
        };
    }
}

async function updateSettings(updates) {
    try {
        const settings = await getSettings();
        return await settings.update(updates);
    } catch (error) {
        console.error('Error updating settings:', error);
        return null;
    }
}

async function getSetting(key) {
    try {
        const settings = await getSettings();
        return settings[key];
    } catch (error) {
        console.error(`Error getting setting ${key}:`, error);
        return null;
    }
}

module.exports = {
    initSettingsDB,
    getSettings,
    updateSettings,
    getSetting,
    SettingsDB
};
