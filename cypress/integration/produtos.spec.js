/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').first().click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve adicionar o produto no carrinho', () => {

        let quantidade = 3

        cy.get('[class="product-block grid"]').contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar um produto ao carrinho com comando personalizado', () => {
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'M', 'Blue', 5)
    });

});