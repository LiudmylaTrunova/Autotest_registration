import { faker } from '@faker-js/faker';

const registrationData = {
    email: faker.internet.email(),
    password: '123qwe!',
    fullName: faker.name.fullName()
}
exports.registrationData = registrationData;