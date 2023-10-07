import { setSeederFactory } from 'typeorm-extension';
import { Community } from '../src/lib/entities';

export default setSeederFactory(Community, async (faker) => {
  const project = new Community();

  project.name = faker.commerce.productName();
  project.description = faker.commerce.productDescription();

  return project;
});
