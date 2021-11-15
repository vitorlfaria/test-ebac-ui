/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').first().click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it.only('Deve adicionar o produto no carrinho', () => {

        let quantidade = 3

        cy.get('.product-block').eq(3).click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
    });

});