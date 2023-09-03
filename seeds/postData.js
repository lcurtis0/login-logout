const { Post } = require('../models');

const postData = [
  {
    title: 'Blossoming Apricot',
    artist: 'LedyX',
    description:
      'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: 'Cosmos Flowers',
    artist: 'WStudio',
    description: 'Pink cosmos flowers against a blue sky.',
  },
  {
    title: 'Sand + Sea = Summer',
    artist: 'S_Photo',
    description: 'Sandy beach with the blue sea and sky in the background.',
  },
  {
    title: 'Beach Chairs',
    artist: 'icemanphotos',

    description: 'Two beach chairs under a beach umbrella on the beach.',
  },
  {
    title: 'Beach Sunrise',
    artist: 'VRstudio',

    description: 'Sun setting in the horizon with waves lapping the shore.',
  },
  {
    title: 'Fall Colors',
    artist: 'DrivingJack',

    description:
      'Trees with red, orange, yellow leaves reflected on a still lake.',
  },
  {
    title: 'Autumn Mountains',
    artist: 'Vitalii_Mamchuk',

    description:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    title: 'Frozen River',
    artist: 'Vlad Sokolovsky',
    description:
      'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
  },
  {
    title: 'Winter Home',
    artist: 'Smit',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
