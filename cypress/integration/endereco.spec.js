/// <reference types="cypress" />

describe('Funcionalidade endereços - Faturamento e Entrega', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dado => {
            cy.login(dado.usuario, dado.senha)
        })
    })
    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
    });
});