import firestore from '@react-native-firebase/firestore';

export let GetEnterprise = '';

const EnterprisesAPI = async () => {
  await firestore()
    .collection('empresas')
    .onSnapshot((response) => {
      const data = response.docs.map((snapshot) => ({
        id: snapshot.id,
        ...snapshot.data(),
      }));
      GetEnterprise = data;
    });
};

export let GetInfor = '';
const GetInformation = async () => {
  await firestore()
    .collection('information')
    .onSnapshot((response) => {
      const data = response.docs.map((snapshot) => ({
        id: snapshot.id,
        ...snapshot.data(),
      }));
      GetInfor = data;
    });
};

export {EnterprisesAPI, GetInformation};
