import userModel from '../models/user.model.js';
import Container from '../container/MongoDb.container.js';

let instance = null;

class UserMongo extends Container {
  constructor() {
    super(userModel);
  };

  static getInstance() {
    if (!instance) {
      instance = new UserMongo();
    }
    return instance
  }
};

export default UserMongo;