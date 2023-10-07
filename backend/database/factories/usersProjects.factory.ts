import { setSeederFactory } from 'typeorm-extension';
import { ACCES_LEVEL } from '../src/constants/interfaces.entities';
import { UsersCommunities } from '../src/lib/entities/usersCommunities.entity';

export default setSeederFactory(UsersCommunities, async (faker) => {
  const usersProject = new UsersCommunities();

  usersProject.accesLevel = faker.helpers.arrayElement([
    ACCES_LEVEL.OWNER,
    ACCES_LEVEL.MANTEINER,
    ACCES_LEVEL.DEVELOPER,
  ]);

  return usersProject;
});
