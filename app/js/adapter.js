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

const AnimalDiseases = {
  1: "Глухота",
  2: "Паралич гортани",
  3: "Бешенство",
  4: "Отит",
  5: "Конъюнктивит",
  6: "Цистит",
  7: "Чумка",
};
const AnimalFeatures = {
  1: "Очень преданная",
  2: "Дружелюбная",
  3: "Подходит для охоты",
  4: "Мало лает",
  5: "Отсутствует чувство страха",
  6: "Мало линяет",
  7: "Хорошее послушание",
  8: "Отличное здоровье",
  9: "Очень преданная",
};
const AnimalTypes = {
  1: "Охотничьи",
  2: "Компаньоны",
  3: "Декоративные",
  4: "Служебные",
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

export const adaptDataToClient = ({
  id,
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
    id,
    name,
    animal,
    types: type.map((it) => (it = AnimalTypes[it])),
    weight,
    weightCategory: getAnimalSize(animal, weight),
    features: features.map((it) => (it = AnimalFeatures[it])),
    diseases: diseases.map((it) => (it = AnimalDiseases[it])),
    iq,
    price,
    image,
  };
};
