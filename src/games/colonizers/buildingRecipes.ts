interface IBuildingRecipe {
  name: string;
  // ore, grain, lumber, wool, brick
  requirements: number[];
}

export const buildingRecipes: IBuildingRecipe[] = [
  {
    name: 'Settlement',
    requirements: [0, 1, 1, 1, 1],
  },
  {
    name: 'City',
    requirements: [3, 2, 0, 0, 0],
  },
  {
    name: 'Road',
    requirements: [0, 0, 1, 0, 1],
  },
  {
    name: 'Development Card',
    requirements: [1, 1, 0, 1, 0],
  },
];
