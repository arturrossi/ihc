import { faker } from "@faker-js/faker";

export const sellers = [
    {
        id: 1,
        name: 'Payton Wunsch',
        phone: faker.phone.number('+55 51 9####-####'),
        reviewStars: 5,
        reviews: [
            {
                name: faker.name.fullName(),
                stars: 5,
                text: 'Já comprei ingressos diversas vezes com esse vendedor. 100% confiável. Compraria de novo'
            },
            {
                name: faker.name.fullName(),
                stars: 5,
                text: 'Muito atencioso e confiável. Podem ir sem medo.'
            }
        ],
        photo: faker.image.people(),
        bio: 'Vendo muitos ingressos',
        verified: true,
        lastSell: '01/04/2023'
    },
    {
        id: 2,
        name: 'Katherine Treutel',
        phone: faker.phone.number('+55 51 9####-####'),
        reviewStars: 4,
        photo: faker.image.people(),
        bio: 'Vendo muitos ingressos',
        verified: false,
        lastSell: '05/04/2023'
    },
    {
        id: 3,
        name: 'Weston McDermott',
        phone: faker.phone.number('+55 51 9####-####'),
        reviewStars: 4,
        photo: faker.image.people(),
        bio: 'Vendo ingressos',
        verified: true,
        lastSell: '22/11/2022'
    },
    {
        id: 4,
        name: 'Janelle Swaniawski',
        reviewStars: 1,
        photo: faker.image.people(),
        bio: 'Vendo muitos ingressos',
        verified: false,
        lastSell: '12/04/2021'
    },
    {
        id: 5,
        name: 'Vella Zieme',
        reviewStars: 3.6,
        photo: faker.image.people(),
        bio: 'Vendo muitos ingressos',
        verified: true,
        lastSell: '01/02/2023'
    },
    {
        id: 6,
        name: 'Domenica Langworth',
        phone: faker.phone.number('+55 51 9####-####'),
        reviewStars: 5,
        photo: faker.image.people(),
        bio: 'Vendo muitos ingressos',
        verified: true,
        lastSell: '01/03/2023'
    }
]