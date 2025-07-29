module.exports = {
    getContextInfo: (m) => {
        return {
            mentionedJid: [m.sender], 
            forwardingScore: 999, 
            isForwarded: true, 
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363419117330635@newsletter', 
                newsletterName: '𝐌𝐀𝐅𝐈𝐀-𝐓𝐞𝐜𝐡',
                serverMessageId: 143 
            }
        };
    },

    sendReply: async (client, m, text) => {
        const contextInfo = module.exports.getContextInfo(m); 
        await client.sendMessage(m.chat, { 
            text: text, 
            contextInfo: contextInfo 
        }); // Removed { quoted: m }
    },

    sendMediaMessage: async (client, m, options) => {
        const contextInfo = module.exports.getContextInfo(m); 
        await client.sendMessage(m.chat, { 
            ...options, 
            contextInfo: contextInfo 
        }); // Removed { quoted: m }
    }
};
