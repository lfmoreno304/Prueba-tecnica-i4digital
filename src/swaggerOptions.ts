export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Peticiones API",
            version: "1.0.0",
            description: "API for the tests of company i4digital"
        },
        servers: [
            {
                url: "http://localhost:4000"
            }
        ]
    },
    apis: ["./src/routes/*.ts"]
}