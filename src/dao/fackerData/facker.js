import { faker } from '@faker-js/faker';

export const PRODUCTS = [];

function createRandomUser() {
    return {
        id: faker.database.mongodbObjectId(),
        nombre: faker.commerce.productName(),
        descripcion: faker.commerce.productDescription(),
        precio: faker.commerce.price(),
        stock: faker.random.numeric(1),
        codigo: faker.random.numeric(13),
        foto: faker.image.imageUrl()
    };
}

Array.from({ length: 5 }).forEach(() => {
    PRODUCTS.push(createRandomUser());
});

