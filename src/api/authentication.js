import axios from 'axios';

async function userLogin(form) {
  var bodyFormData = new FormData();
  bodyFormData.append('email', form.email);
  bodyFormData.append('password', form.password);  
  // let response = null;
  for (let i = 0; i <= 5; i++) {
    const response = await axios.post('auth/login', bodyFormData);
    if (response) {
      return response.data;
    }
  }
  // const response = await axios.post('auth/login', bodyFormData);  
  // return response.data;
}

async function userResgister(form) {
  var bodyFormData = new FormData();
  bodyFormData.append('email', form.email);
  bodyFormData.append('password', form.password);
  bodyFormData.append('user_image', form.userImage);
  bodyFormData.append('foundation_list', form.foundationList);
  // const response = await axios.post('simulator/lip', bodyFormData, { responseType: "blob" });
  const response = await axios.post('auth/signup', bodyFormData);
  return response.data;
}

async function getUserInformation() {
  const response = await axios.get('auth/test/get/user_info/token');
  return response.data;
}


async function userChangeImage(img) {
  var bodyFormData = new FormData();
  bodyFormData.append('user_image', img);
  // const response = await axios.post('simulator/lip', bodyFormData, { responseType: "blob" });
  const response = await axios.put('auth/change/user/image', bodyFormData);
  return response.data;
}

async function userChangePassword(form) {
  var bodyFormData = new FormData();
  bodyFormData.append('current_password', form.currentPassword);
  bodyFormData.append('new_password', form.newPassword);
  // const response = await axios.post('simulator/lip', bodyFormData, { responseType: "blob" });
  const response = await axios.put('auth/change/password', bodyFormData);
  return response.data;
}

async function checkEmailExist(email) {
  var bodyFormData = new FormData();  
  bodyFormData.append('email', email);  
  const response = await axios.post('check/email/exist', bodyFormData);
  return response.data;
}

async function checkImageValid(img) {
  var bodyFormData = new FormData();  
  bodyFormData.append('user_image', img);  
  const response = await axios.post('auth/check/valid/user/image', bodyFormData);
  return response.data;
}

export {
  userLogin,
  userResgister,
  userChangeImage,
  getUserInformation,
  userChangePassword,
  checkEmailExist,
  checkImageValid,
};