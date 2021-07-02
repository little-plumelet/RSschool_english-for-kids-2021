// Обязательно заполнить Panel (card-enum)
const gameData = {
  audioErrorAddress: './public/audio/error.mp3',
  audioCorectAddress: './public/audio/correct.mp3',
  audioFailureAddress: './public/audio/game-failure.mp3',
  audioVictoryAddress: './public/audio/game-victory.mp3',
  starFilledImgAddres: './public/images/star-filled.svg',
  starEmptyImgAddress: './public/images/star-empty.svg',
};

const categoriesData = {
  wildAnimals: {
    categoryName: 'wildAnimals',
    title: 'wild animals',
    imgAddress: './public/images/animals/wild_animals/parrot.png',
  },
  tamedAnimals: {
    categoryName: 'tamedAnimals',
    title: 'tamed animals',
    imgAddress: './public/images/animals/tamed_animals/cat.png',
  },
  transport: {
    categoryName: 'transport',
    title: 'transport',
    imgAddress: './public/images/transport/helicopter.png',
  },
  buildings: {
    categoryName: 'buildings',
    title: 'buildings',
    imgAddress: './public/images/buildings/fortress.png',
  },
  clothes: {
    categoryName: 'clothes',
    title: 'clothes',
    imgAddress: './public/images/clothes/dress.png',
  },
  /*
  actionsSetA: {
    categoryName: 'actionsSetA',
    title: 'actions (set A)',
    imgAddress: './public/images/animals/wild_animals/parrot.png',
  },
  emotions: {
    categoryName: 'emotions',
    title: 'emotions',
    imgAddress: './public/images/animals/tamed_animals/cat.png',
  },
  clothes: {
    categoryName: 'clothes',
    title: 'clothes',
    imgAddress: './public/images/animals/wild_animals/parrot.png',
  },
  buildings: {
    categoryName: 'buildings',
    title: 'buildings',
    imgAddress: './public/images/animals/tamed_animals/cat.png',
  },
  transport: {
    categoryName: 'transport',
    title: 'transport',
    imgAddress: './public/images/animals/wild_animals/parrot.png',
  },
  actionSetB: {
    categoryName: 'actionSetB',
    title: 'action (Set B)',
    imgAddress: './public/images/animals/tamed_animals/cat.png',
  },
  */
};

const cardsData = {
  wildAnimals: [
    {
      word: 'parrot',
      imgAddress: './public/images/animals/wild_animals/parrot.png',
      audioAddres: './public/audio/animals/wild_animals/parrot.mp3',
      translation: 'попугай',
    },
    {
      word: 'crocodile',
      imgAddress: './public/images/animals/wild_animals/crocodile.png',
      audioAddres: './public/audio/animals/wild_animals/crocodile.mp3',
      translation: 'крокодил',
    },
    {
      word: 'monkey',
      imgAddress: './public/images/animals/wild_animals/monkey.png',
      audioAddres: './public/audio/animals/wild_animals/monkey.mp3',
      translation: 'обезьяна',
    },
    {
      word: 'giraffe',
      imgAddress: './public/images/animals/wild_animals/giraffe.png',
      audioAddres: './public/audio/animals/wild_animals/giraffe.mp3',
      translation: 'жираф',
    },
    {
      word: 'lion',
      imgAddress: './public/images/animals/wild_animals/lion.png',
      audioAddres: './public/audio/animals/wild_animals/lion.mp3',
      translation: 'лев',
    },
    {
      word: 'elephant',
      imgAddress: './public/images/animals/wild_animals/elephant.png',
      audioAddres: './public/audio/animals/wild_animals/elephant.mp3',
      translation: 'слон',
    },
    {
      word: 'rhinoceros',
      imgAddress: './public/images/animals/wild_animals/rhinoceros.png',
      audioAddres: './public/audio/animals/wild_animals/rhinoceros.mp3',
      translation: 'носорог',
    },
    {
      word: 'camel',
      imgAddress: './public/images/animals/wild_animals/camel.png',
      audioAddres: './public/audio/animals/wild_animals/camel.mp3',
      translation: 'верблюд',
    },
  ],
  tamedAnimals: [
    {
      word: 'cat',
      imgAddress: './public/images/animals/tamed_animals/cat.png',
      audioAddres: './public/audio/animals/tamed_animals/cat.mp3',
      translation: 'кот',
    },
    {
      word: 'chicken',
      imgAddress: './public/images/animals/tamed_animals/chicken.png',
      audioAddres: './public/audio/animals/tamed_animals/chicken.mp3',
      translation: 'курица',
    },
    {
      word: 'cow',
      imgAddress: './public/images/animals/tamed_animals/cow.png',
      audioAddres: './public/audio/animals/tamed_animals/cow.mp3',
      translation: 'корова',
    },
    {
      word: 'dog',
      imgAddress: './public/images/animals/tamed_animals/dog.png',
      audioAddres: './public/audio/animals/tamed_animals/dog.mp3',
      translation: 'собака',
    },
    {
      word: 'horse',
      imgAddress: './public/images/animals/tamed_animals/horse.png',
      audioAddres: './public/audio/animals/tamed_animals/horse.mp3',
      translation: 'лошадь',
    },
    {
      word: 'pig',
      imgAddress: './public/images/animals/tamed_animals/pig.png',
      audioAddres: './public/audio/animals/tamed_animals/pig.mp3',
      translation: 'свинья',
    },
    {
      word: 'rabbit',
      imgAddress: './public/images/animals/tamed_animals/rabbit.png',
      audioAddres: './public/audio/animals/tamed_animals/rabbit.mp3',
      translation: 'кролик',
    },
    {
      word: 'sheep',
      imgAddress: './public/images/animals/tamed_animals/sheep.png',
      audioAddres: './public/audio/animals/tamed_animals/sheep.mp3',
      translation: 'овца',
    },
  ],
  transport: [
    {
      word: 'helicopter',
      imgAddress: './public/images/transport/helicopter.png',
      audioAddres: './public/audio/transport/helicopter.mp3',
      translation: 'вертолёт',
    },
    {
      word: 'train',
      imgAddress: './public/images/transport/train.png',
      audioAddres: './public/audio/transport/train.mp3',
      translation: 'поезд',
    },
    {
      word: 'scooter',
      imgAddress: './public/images/transport/scooter.png',
      audioAddres: './public/audio/transport/scooter.mp3',
      translation: 'самокат',
    },
    {
      word: 'car',
      imgAddress: './public/images/transport/car.png',
      audioAddres: './public/audio/transport/car.mp3',
      translation: 'машина',
    },
    {
      word: 'bicycle',
      imgAddress: './public/images/transport/bicycle.png',
      audioAddres: './public/audio/transport/bicycle.mp3',
      translation: 'велосипед',
    },
    {
      word: 'plane',
      imgAddress: './public/images/transport/plane.png',
      audioAddres: './public/audio/transport/plane.mp3',
      translation: 'самолёт',
    },
    {
      word: 'tram',
      imgAddress: './public/images/transport/tram.png',
      audioAddres: './public/audio/transport/tram.mp3',
      translation: 'трамвай',
    },
    {
      word: 'bus',
      imgAddress: './public/images/transport/bus.png',
      audioAddres: './public/audio/transport/bus.mp3',
      translation: 'автобус',
    },
  ],
  buildings: [
    {
      word: 'fortress',
      imgAddress: './public/images/buildings/fortress.png',
      audioAddres: './public/audio/buildings/fortress.mp3',
      translation: 'крепость',
    },
    {
      word: 'greenhouse',
      imgAddress: './public/images/buildings/greenhouse.png',
      audioAddres: './public/audio/buildings/greenhouse.mp3',
      translation: 'теплица',
    },
    {
      word: 'church',
      imgAddress: './public/images/buildings/church.png',
      audioAddres: './public/audio/buildings/church.mp3',
      translation: 'церковь',
    },
    {
      word: 'skyscraper',
      imgAddress: './public/images/buildings/skyscraper.png',
      audioAddres: './public/audio/buildings/skyscraper.mp3',
      translation: 'небоскрёб',
    },
    {
      word: 'palace',
      imgAddress: './public/images/buildings/palace.png',
      audioAddres: './public/audio/buildings/palace.mp3',
      translation: 'дворец',
    },
    {
      word: 'cottage',
      imgAddress: './public/images/buildings/cottage.png',
      audioAddres: './public/audio/buildings/cottage.mp3',
      translation: 'коттедж',
    },
    {
      word: 'castle',
      imgAddress: './public/images/buildings/castle.png',
      audioAddres: './public/audio/buildings/castle.mp3',
      translation: 'замок',
    },
    {
      word: 'mosque',
      imgAddress: './public/images/buildings/mosque.png',
      audioAddres: './public/audio/buildings/mosque.mp3',
      translation: 'мечеть',
    },
  ],
  clothes: [
    {
      word: 'dress',
      imgAddress: './public/images/clothes/dress.png',
      audioAddres: './public/audio/clothes/dress.mp3',
      translation: 'платье',
    },
    {
      word: 'coat',
      imgAddress: './public/images/clothes/coat.png',
      audioAddres: './public/audio/clothes/coat.mp3',
      translation: 'пальто',
    },
    {
      word: 'boot',
      imgAddress: './public/images/clothes/boot.png',
      audioAddres: './public/audio/clothes/boot.mp3',
      translation: 'ботинок',
    },
    {
      word: 'shirt',
      imgAddress: './public/images/clothes/shirt.png',
      audioAddres: './public/audio/clothes/shirt.mp3',
      translation: 'рубашка',
    },
    {
      word: 'shoe',
      imgAddress: './public/images/clothes/shoe.png',
      audioAddres: './public/audio/clothes/shoe.mp3',
      translation: 'туфли',
    },
    {
      word: 'blouse',
      imgAddress: './public/images/clothes/blouse.png',
      audioAddres: './public/audio/clothes/blouse.mp3',
      translation: 'блузка',
    },
    {
      word: 'pants',
      imgAddress: './public/images/clothes/pants.png',
      audioAddres: './public/audio/clothes/pants.mp3',
      translation: 'штаны',
    },
    {
      word: 'skirt',
      imgAddress: './public/images/clothes/skirt.png',
      audioAddres: './public/audio/clothes/skirt.mp3',
      translation: 'юбка',
    },
  ],
};

export { categoriesData, cardsData, gameData };
