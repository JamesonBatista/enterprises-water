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

export let ListCity = [];
const GetListCity = async () => {
  let data = [];
  await fetch(
    'https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/2605/distritos',
  )
    .then((response) => response.json())
    .then((result) => {
      data = result;
    })
    .catch((error) => {
      console.error(error);
    });

  ListCity = data;
};

export {EnterprisesAPI, GetInformation, GetListCity};
