import { faker } from '@faker-js/faker'

export const availableTickets = [
    {
        eventId: 1,
        tickets: [
            {
                id: 1,
                seller: {
                    name: faker.name.fullName(),
                    reviewStars: Math.floor(Math.random() * (5 - 3 + 1) + 3)
                },
                price: 50,
                sector: 'superior'
            },
            {
                id: 2,
                seller: {
                    name: faker.name.fullName(),
                    reviewStars: Math.floor(Math.random() * (5 - 3 + 1) + 3)
                },
                price: 50,
                sector: 'superior'
            },
            {
                id: 3,
                seller: {
                    name: faker.name.fullName(),
                    reviewStars: Math.floor(Math.random() * (5 - 3 + 1) + 3)
                },
                price: 50,
                sector: 'superior'
            },
            {
                id: 4,
                seller: {
                    name: faker.name.fullName(),
                    reviewStars: Math.floor(Math.random() * (5 - 3 + 1) + 3)
                },
                price: 30,
                sector: 'inferior'
            },
            {
                id: 5,
                seller: {
                    name: faker.name.fullName(),
                    reviewStars: Math.floor(Math.random() * (5 - 3 + 1) + 3)
                },
                price: 35,
                sector: 'inferior'
            },
            {
                id: 6,
                seller: {
                    name: faker.name.fullName(),
                    reviewStars: Math.floor(Math.random() * (5 - 3 + 1) + 3)
                },
                price: 30,
                sector: 'inferior'
            }
        ]
    }
]
