const validator = {
  validType: 'string',
  isValidName(name) {
    return new Promise((resolve, reject) => {
      if (typeof name === this.validType)
        resolve('Valid!');
      else
        reject('Invalid :(');
    });
  }

};

validator.isValidName('Marcos')
  .then(console.log)
  .catch(console.error);
