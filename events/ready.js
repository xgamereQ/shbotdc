module.exports = client => {
    console.log(`Zalogowano jako ${client.user.tag}`);
    client.user.setActivity('ShCode.PL', { type: 'PLAYING'})
  };
  
