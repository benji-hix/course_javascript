const { faker } = require('@faker-js/faker');

module.exports = {
    createUser: () => {
        const newFake = {
            password: faker.internet.password(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.number(),
            lastName: faker.person.lastName(),
            firstName: faker.person.firstName(),
            _id: faker.database.mongodbObjectId(),
        };
        return newFake;
    },

    createCompany: () => {
        const newFake = {
            _id: faker.database.mongodbObjectId(),
            name: faker.company.name(),
            address: {
                street: faker.location.street(),
                city: faker.location.city(),
                state: faker.location.state(),
                zipCode: faker.location.zipCode(),
                country: faker.location.country(),
            },
        };
        return newFake;
    },
};
