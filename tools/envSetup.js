import dotenv from 'dotenv';

function setup() {
  return Promise.all([
    dotenv.config(),
  ]);
}

export default setup;
