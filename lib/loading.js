export default async function displayLoadingScreen(conn, from) {
    const loadingStages = [
      "ᴍᴀɴᴜ-ᴠ2ʟᴏᴀᴅɪɴɢ 《 █▒▒▒▒▒▒▒▒▒▒▒》10%,",
      "ᴍᴀɴᴜ-ᴠ2ʟᴏᴀᴅɪɴɢ 《 ████▒▒▒▒▒▒▒▒》30%,",
      "ᴍᴀɴᴜ-ᴠ2ʟᴏᴀᴅɪɴɢ 《 ███████▒▒▒▒▒》50%,",
      "ᴍᴀɴᴜ-ᴠ2ʟᴏᴀᴅɪɴɢ 《 ██████████▒▒》80%,",
      "ᴍᴀɴᴜ-ᴠ2ʟᴏᴀᴅɪɴɢ 《 ████████████》100%,",
      "ᴍᴀɴᴜ ʜᴀs ʟᴏᴀᴅᴇᴅ ᴄᴏᴍᴘʟᴇᴛʟʏ"
    ];
  
    try {
      const { key } = await conn.sendMessage(from, { text: 'ʟᴏᴀᴅɪɴɢ...' });
  
      for (let i = 0; i < loadingStages.length; i++) {
        await conn.relayMessage(from, {
          protocolMessage: {
            key: key,
            type: 14,
            editedMessage: {
              conversation: loadingStages[i]
            }
          }
        }, {});
      }
    } catch (error) {
      console.error('Error displaying loading screen:', error);
    }
  }
  
