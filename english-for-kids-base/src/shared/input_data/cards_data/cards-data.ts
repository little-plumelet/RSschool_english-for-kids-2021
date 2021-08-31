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
  emotions: {
    categoryName: 'emotions',
    title: 'emotions',
    imgAddress: './public/images/emotions/smile.png',
  },
  actionsSetA: {
    categoryName: 'actionsSetA',
    title: 'actions (set A)',
    imgAddress: './public/images/actions_set_a/fish.png',
  },
  actionsSetB: {
    categoryName: 'actionsSetB',
    title: 'actions (set B)',
    imgAddress: './public/images/actions_set_b/open.png',
  },
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
  emotions: [
    {
      word: 'smile',
      imgAddress: './public/images/emotions/smile.png',
      audioAddres: './public/audio/emotions/smilet.mp3',
      translation: 'улыбка',
    },
    {
      word: 'angry',
      imgAddress: './public/images/emotions/angry.png',
      audioAddres: './public/audio/emotions/angry.mp3',
      translation: 'сердитый',
    },
    {
      word: 'surprised',
      imgAddress: './public/images/emotions/surprised.png',
      audioAddres: './public/audio/emotions/surprised.mp3',
      translation: 'удивленный',
    },
    {
      word: 'sad',
      imgAddress: './public/images/emotions/sad.png',
      audioAddres: './public/audio/emotions/sad.mp3',
      translation: 'грустный',
    },
    {
      word: 'tired',
      imgAddress: './public/images/emotions/tired.png',
      audioAddres: './public/audio/emotions/tired.mp3',
      translation: 'уставший',
    },
    {
      word: 'laugh',
      imgAddress: './public/images/emotions/laugh.png',
      audioAddres: './public/audio/emotions/laugh.mp3',
      translation: 'смех',
    },
    {
      word: 'scared',
      imgAddress: './public/images/emotions/scared.png',
      audioAddres: './public/audio/emotions/scared.mp3',
      translation: 'напуганный',
    },
    {
      word: 'happy',
      imgAddress: './public/images/emotions/happy.png',
      audioAddres: './public/audio/emotions/happy.mp3',
      translation: 'счастливый',
    },
  ],
  actionsSetA: [
    {
      word: 'fish',
      imgAddress: './public/images/actions_set_a/fish.png',
      audioAddres: './public/audio/actions_set_a/fish.mp3',
      translation: 'ловить рыбу',
    },
    {
      word: 'dive',
      imgAddress: './public/images/actions_set_a/dive.png',
      audioAddres: './public/audio/actions_set_a/dive.mp3',
      translation: 'нырять',
    },
    {
      word: 'dance',
      imgAddress: './public/images/actions_set_a/dance.png',
      audioAddres: './public/audio/actions_set_a/dance.mp3',
      translation: 'танцевать',
    },
    {
      word: 'draw',
      imgAddress: './public/images/actions_set_a/draw.png',
      audioAddres: './public/audio/actions_set_a/draw.mp3',
      translation: 'рисовать',
    },
    {
      word: 'jump',
      imgAddress: './public/images/actions_set_a/jump.png',
      audioAddres: './public/audio/actions_set_a/jump.mp3',
      translation: 'прыгать',
    },
    {
      word: 'cry',
      imgAddress: './public/images/actions_set_a/cry.png',
      audioAddres: './public/audio/actions_set_a/cry.mp3',
      translation: 'плакать',
    },
    {
      word: 'fly',
      imgAddress: './public/images/actions_set_a/fly.png',
      audioAddres: './public/audio/actions_set_a/fly.mp3',
      translation: 'летать',
    },
    {
      word: 'hug',
      imgAddress: './public/images/actions_set_a/hug.png',
      audioAddres: './public/audio/actions_set_a/hug.mp3',
      translation: 'обнимать',
    },
  ],
  actionsSetB: [
    {
      word: 'open',
      imgAddress: './public/images/actions_set_b/open.png',
      audioAddres: './public/audio/actions_set_b/open.mp3',
      translation: 'открывать',
    },
    {
      word: 'play',
      imgAddress: './public/images/actions_set_b/play.png',
      audioAddres: './public/audio/actions_set_b/play.mp3',
      translation: 'играть',
    },
    {
      word: 'point',
      imgAddress: './public/images/actions_set_b/point.png',
      audioAddres: './public/audio/actions_set_b/point.mp3',
      translation: 'указывать',
    },
    {
      word: 'ride',
      imgAddress: './public/images/actions_set_b/ride.png',
      audioAddres: './public/audio/actions_set_b/ride.mp3',
      translation: 'ездить',
    },
    {
      word: 'run',
      imgAddress: './public/images/actions_set_b/run.png',
      audioAddres: './public/audio/actions_set_b/run.mp3',
      translation: 'бегать',
    },
    {
      word: 'sing',
      imgAddress: './public/images/actions_set_b/sing.png',
      audioAddres: './public/audio/actions_set_b/sing.mp3',
      translation: 'петь',
    },
    {
      word: 'skip',
      imgAddress: './public/images/actions_set_b/skip.png',
      audioAddres: './public/audio/actions_set_b/skip.mp3',
      translation: 'прыгать/пропускать',
    },
    {
      word: 'swim',
      imgAddress: './public/images/actions_set_b/swim.png',
      audioAddres: './public/audio/actions_set_b/swim.mp3',
      translation: 'плавать',
    },
  ],
};

export { categoriesData, cardsData, gameData };
