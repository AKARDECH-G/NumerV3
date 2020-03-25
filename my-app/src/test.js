const hello = (error, name) => {
    if (error) {
      throw error
    }
    console.log(`Hello ${name}`);
  }
  
  const myCallback = callback => {
    if (!callback) {
      callback(new Error('No callback provided'))
    }
    callback(null, 'Devahoy');
  }