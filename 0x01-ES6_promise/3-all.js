import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let response;
  uploadPhoto()
    .then((object) => {
      response = object.body;
    });
  createUser().then((object) => {
    console.log(response, object.firstName, object.lastName);
  });
}
