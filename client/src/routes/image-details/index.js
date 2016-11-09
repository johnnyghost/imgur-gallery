import { ImageDetailsContainer } from 'containers';

module.exports = {
  path: 'image-details/:id',
  getComponents(location:?Object, cb:Function) {
    cb(null, ImageDetailsContainer);
  }
};
