import * as api from "./api.js";
export const mocks = (function () {
  const AnimalType = {
    dog: "собака",
    cat: "кошка",
  };

  const AnimalSize = {
    dog: [
      {
        min: 0,
        max: 10,
        category: "Маленькая",
      },
      {
        min: 11,
        max: 25,

        category: "Средняя",
      },
      {
        min: 26,
        max: 50,
        category: "Большая",
      },
    ],
    cat: {},
  };
  const getAnimalSize = (type, weight) => {
    const typeName = Object.keys(AnimalType).find(
      (it) => AnimalType[it] === type
    );
    const category = AnimalSize[typeName].find(
      (it) => weight > it.min && weight < it.max
    );
    return `${category.category} (${category.min}-${category.max}кг)`;
  };

  const adaptDataToClient = ({
    name,
    animal,
    type,
    weight,
    features,
    diseases,
    iq,
    price,
    image,
  }) => {
    return {
      name,
      animal,
      type,
      weight: getAnimalSize(animal, weight),
      features,
      diseases,
      iq,
      price,
      image,
    };
  };
  let dataCards = [];

  const onLoadCards = (data) => {
    dataCards = data;
  };
  const onErrorCards = (error) => {
    // dataCards = data;
    console.log(error);
  };

  return {
    getData: function () {
      api.loadCardsData(onLoadCards, onErrorCards);
      // return dataCards;
    },
    getDataById: function (id) {
      // const data = cardsData.find((it) => it.id === id);
      // return adaptDataToClient(data);
      api.loadCardsData(onLoadCards, onErrorCards);
    },
  };
})();
