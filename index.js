const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// 1. Initialize the client with local authentication to stay logged in
const client = new Client({
    authStrategy: new LocalAuth()
});

// 2. Display the QR code in your terminal for scanning
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Scan the QR code above with WhatsApp!');
});

// 3. Log when the bot is ready to use
client.on('ready', () => {
    console.log('Bot is online and ready!');
});

// 4. Listen for incoming messages and respond
client.on('message', message => {
    if (message.body.toLowerCase() === '!ping') {
        message.reply('pong!');
    }
});

// Start the client
client.initialize();
