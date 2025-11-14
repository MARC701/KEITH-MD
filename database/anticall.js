const { DataTypes } = require('sequelize');
const { database } = require('../settings');

const AntiCallDB = database.define('anticall', {
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        defaultValue: '*ᴍᴀʀᴄ-ᴍᴅ Declined Your Call.Text Me Only*',
        allowNull: false
    },
    action: {
        type: DataTypes.ENUM('reject', 'block'),
        defaultValue: 'reject',
        allowNull: false
    }
}, {
    timestamps: true
});

async function initAntiCallDB() {
    try {
        await AntiCallDB.sync({ alter: true });
        console.log('AntiCall table ready');
    } catch (error) {
        console.error('Error initializing AntiCall table:', error);
        throw error;
    }
}

async function getAntiCallSettings() {
    try {
        const settings = await AntiCallDB.findOne();
        if (!settings) {
            return await AntiCallDB.create({});
        }
        return settings;
    } catch (error) {
        console.error('Error getting anti-call settings:', error);
        return { status: true, message: 'ᴍᴀʀᴄ-ᴍᴅ Declined Your Call.Text Me Only*', action: 'reject' };
    }
}

async function updateAntiCallSettings(updates) {
    try {
        const settings = await getAntiCallSettings();
        return await settings.update(updates);
    } catch (error) {
        console.error('Error updating anti-call settings:', error);
        return null;
    }
}

module.exports = {
    initAntiCallDB,
    getAntiCallSettings,
    updateAntiCallSettings,
    AntiCallDB
};
