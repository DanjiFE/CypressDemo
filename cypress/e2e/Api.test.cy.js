describe("Api Test", () => {

    it("GET characters test", () => {
        cy.request({
            method: "GET",
            url: "https://rickandmortyapi.com/api/character/150"
        }).then((response) => {
            expect(response.body.id).to.eq(150)
            expect(response.status).to.eq(200)
            expect(response.headers).to.have.property("age")
            expect(response.body).to.have.property("gender", "Male")
            expect(response.body.location.url).to.eq('https://rickandmortyapi.com/api/location/39')
        })
    })

})

it('POST и PUT пользователя', () => {

    const authToken = "Bearer de48c37b9833ab23bdbb998ed35c3ef554af48d9f459b379461fdffbe25f838e";
    const uniqueEmail = `mihal_${Date.now()}@test.com`;

    cy.request({
        method: 'POST',
        url: Cypress.env("api_baseurl2"),
        headers: {
            Authorization: authToken
        },
        body: {
            name: "Mihal1",
            email: uniqueEmail,
            gender: "male",
            status: "active"
        }
    }).then((postResponse) => {

        expect(postResponse.status).to.eq(201);
        expect(postResponse.body).has.property("name", "Mihal1");
        expect(postResponse.body).has.property("gender", "male");
        expect(postResponse.body).has.property("email", uniqueEmail);

        const userId = postResponse.body.id;

        cy.request({
            method: 'PUT',
            url: `${Cypress.env("api_baseurl2")}/${userId}`,
            headers: {
                Authorization: authToken
            },
            body: {
                name: "Mihal Update",
                email: uniqueEmail,
                gender: "male",
                status: "active"
            }
        }).then((putResponse) => {

            expect(putResponse.status).to.eq(200);
            expect(putResponse.body).has.property("name", "Mihal Update");
            expect(putResponse.body).has.property("email", uniqueEmail);
            expect(putResponse.body).has.property("gender", "male");

        });

    });

});
