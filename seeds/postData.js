const { Post } = require('../models');

const postData = [
  {
    name:'joe', 
    title: 'Blossoming Apricot',
    date: '06/06/06', 
    description:'Branches with pink apricot blossoms against a blue background.',
  },
  {
    name:'joe',
    title: 'Cosmos Flowers',
    date: '06/06/06', 
    description: 'Pink cosmos flowers against a blue sky.',
  },
  {
    name:'joe',
    title: 'Sand + Sea = Summer',
    date: '06/06/06', 
    description: 'Sandy beach with the blue sea and sky in the background.',
  },
  {
    name:'joe',
    title: 'Beach Chairs',
    date: '06/06/06', 
    description: 'Two beach chairs under a beach umbrella on the beach.',
  },
  {
    name:'joe',
    title: 'Beach Sunrise',
    date: '06/06/06', 
    description: 'Sun setting in the horizon with waves lapping the shore.',
  },
  {
    name:'joe',
    title: 'Fall Colors',
    date: '06/06/06', 
    description:
      'Trees with red, orange, yellow leaves reflected on a still lake.',
  },
  {
    name:'joe',
    title: 'Autumn Mountains',
    date: '06/06/06', 
    description:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    name:'joe',
    title: 'Frozen River',
    date: '06/06/06', 
    description:
      'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
  },
  {
    name:'joe',
    title: 'Winter Home',
    date: '06/06/06', 
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
