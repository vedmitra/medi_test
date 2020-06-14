const getPersons = () => {
  return fetch(
    "https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json"
  )
    .then((res) => {
      return res.json();
    })
    .catch((e) => console.log(e));
};

export default getPersons;
