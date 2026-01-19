const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VUW46jRhTdS/3aGvMyGEstBWNsY/zCNNjd0XwUUEBhKDBVGONRb2I2kIVkU1lChLt7ej6SSQcJqZ73nHvuufUNkAJTZKEWjL+BssIXyFA3ZG2JwBhM6ihCFeiDEDIIxsDW4N7ilVQ+Xo+18DwnELWbtajlqmIXbTPlZNUQ9rvZ1nt6AC99UNZ+hoNfBKRoePJOVuCpvDknzqAcPeUo4+LcuvYSMVXP+3MlcG4wbE8P4KWLCHGFSWyUCcpRBTMLtTuIq8/Rx7PUTJugN1j1gsaRWa8or2qpYlfyAmUeNUzVLknKeyEXf45+aydbe9/iy2DPLIUuN6ajI5mkqikuhGtz0p+WEXd7PgzFp1f6FMcEhWaICMOs/bTu8Wb9lJh5ubRPAyg88tn6GBP5tLgeG1w+EkMTfUtwLpehJ32OuOj5WXMt1EWbNnSk1goRt/7TLus5Hk8doXH8eM1fdGrvpZ+J76p3r5z+j+7WxOo5NqpnG6IWRqg0sHn25YRn7iLLrKmrrAKqRbabu/Rz9N1BfTzR6dxSDEqWz2l9aKaTSVmMDO7Anec2DZ+Cs+oZuTP6oA9ZXf2KpXlwnc1mM4yX8V579FNT89SZvsgLqsZntxrc/E1P2ureSTvYuOwF+Xp5U52ksq00VejWkHW0cXJ6U25+ugn5JC1oMNEe7hmdUGuGYMy/9EGFYkxZBRkuyH1tNOwDGF4cFFSI3eUFqwr1VOiXNmdYwVSMBuLJdPMwimQvgFI05AbM3DY6vHnFA+iDsioCRCkKF5iyomrXiFIYIwrGv3/tA4Ku7LVwHZzI90GEK8pcUpdZAcP3qr5vwiAoasKclgR6N0AVGHMfy4gxTGLa6VgTWAUJviA9gYyCcQQzin5kiCoUvq39uN3dChGDOKNgDPTVpZGoOTFWwqkO6HyuGbGmxxr4QHsv26ssl8xQj9Nn06A3aPrn4CqG2yKaHOJ4vjtup7sV8c+1NKPZrHn4hyBgDDJCLglBZrO/hCm5lsTe6iYrCzPVDlqdXq1gLq9mqTM5ij5ros1xOU2UxSwRN3i3Lwyy6EXHQNHTGztptSTr7SF/1OOHDi1EFxygn8GsIJ1AvHRFKQmzdm1uKv5ym13Lw2jnCD1tTsmNkt55VHDPka1C14cTbo3zZ+uUrslyK8weuetiKfSKZWwN5r3Vltuiqf1qqPzuZByCMVAVSeSUoSBx/FjkfqNfmq4csCy/EMRAH2T3U4Kg8LzESUNpKEiq3J3sNvqAwC4W+OuP7392P3jvluztlcJ3H3VY3TTC6N70b7f+C/tVlM5a3Ev/pxBvr8i/dOLEH+53XiM4k9VawHOZrEPx8bxovMKcpPwtvrVDQa7qib/cB+Dl5WsflBlkUVHlYAwgCavinllV1J1XTRIVvwDTNdfUtVjvEs8gZdqH/x9xjiiDeQnGvCKPRqKicPLrqV1VlAtIk05ZT1HOLuiDvNXK0mGQvbcT0LrP2FDw8jeKcIcnagcAAA==
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘɪɴᴄᴇ ᴛᴇᴄʜ*, // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
