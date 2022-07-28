// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
    // Handles a GET /user request
    rest.get('http://localhost:5000/posts', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(
                [{
                    comments: 72,
                    handle: "apyott0",
                    id: "ae8bfa4c-fc92-48d2-9a8a-8f467f3824d4",
                    image: "http://dummyimage.com/60x60.png/dddddd/000000",
                    isCertified: false,
                    likes: 804,
                    media: true,
                    name: "Angelica",
                    post: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
                    retweets: 232,
                }, {
                    comments: 12,
                    handle: "lbrito1",
                    id: "d71e28ae-5de2-4396-a708-a3a1c626b5db",
                    image: "http://dummyimage.com/60x60.png/dddddd/000000",
                    isCertified: true,
                    likes: 987,
                    media: false,
                    name: "Lauralee",
                    post: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
                    retweets: 479,
                }]
            )
        )
    })
]