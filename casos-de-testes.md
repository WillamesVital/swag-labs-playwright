# Casos de Teste | Automação - Swag Labs

Os casos de testes também foram adicionados ao projeto no [MeloQA](https://app.meloqa.com.br/core/project/a7c040f4-af26-481f-b9f9-94cc5eaf35f8/dashboard/executions)

### Login

**Pré-condição:**
*Dado que o usuário está na página de login*

**CT01 - Verificar que é possível efetuar login com sucesso**
Quando o usuário preenche o nome de usuário com *"standard_user"* e a senha com *"secret_sauce"*
Quando o usuário clica no botão de login
Então o usuário é redirecionado para a página inicial


**CT02 - Verificar que não é possível efetuar login usando credenciais inválidas**
Quando o usuário preenche o nome de usuário com *"standard_user"*
E o usuário preenche a senha com *"wrong_password"*
Quando o usuário clica no botão de login
Então uma mensagem de erro é exibida dizendo "Epic sadface: Username and password do not match any user in this service"

**CT03 - Verificar que não é possível efetuar login sem preencher a senha**
Quando o usuário preenche o nome de usuário com *"standard_user"*
Quando o usuário clicar no botão de login
Então a mensagem de erro "Epic sadface: Password is required
" deve ser exibida

**CT04 - Verificar que não é possível efetuar login sem preencher o nome do usuário**
Quando o usuário preenche a senha com *"secret_sauce"*
Quando o usuário clicar no botão de login
Então a mensagem de erro "Epic sadface: Username is required
" deve ser exibida

**CT05 - Verificar que é possível efetuar logout**
Dado que o usuário está logado
E o usuário está na página inicial
Quando o usuário clicar no button burguer para abrir o menu lateral
E clicar em Logout
Então o usuário deve ser redirecionado para a tela de login

----
### Product Sort

**CT01 - Verificar que é possível filtrar os itens por "Name (Z to A)"**
Dado que o usuário está logado
E o usuário está na página inicial com a lista de produtos
Quando o usuário seleciona "Name (Z to A)" no menu de ordenação
Então os produtos são exibidos em ordem decrescente de nome

**CT02 - Verificar que é possível filtrar os itens por "Price (low to high)"**
Dado que o usuário está logado
E o usuário está na página inicial com a lista de produtos
Quando o usuário seleciona "Price (low to high)" no menu de ordenação
Então os produtos são exibidos em ordem crescente de preço

**CT03 - Verificar que é possível filtrar os itens por "Price (high to low)"**
Dado que o usuário está logado
E o usuário está na página inicial com a lista de produtos
Quando o usuário seleciona "Price (high to low)" no menu de ordenação
Então os produtos são exibidos em ordem decrescente de preço

---
### Social Media Links

**CT01 - Verificar que o usuário é redirecionado ao clicar em twitter**
Dado que o usuário está logado
E o usuário está na página inicial
Quando o usuário clica no ícone do Twitter
Então uma nova aba do navegador é aberta
E o usuário é redirecionado para a página do Twitter da Swag Labs

**CT02 - Verificar que o usuário é redirecionado ao clicar em facebook**
Dado que o usuário está logado
E o usuário está na página inicial
Quando o usuário clica no ícone do Facebook
Então uma nova aba do navegador é aberta
E o usuário é redirecionado para a página do Facebook da Swag Labs

**CT03 - Verificar que o usuário é redirecionado ao clicar em linkedin**
Dado que o usuário está logado
E o usuário está na página inicial
Quando o usuário clica no ícone do LinkedIn
Então uma nova aba do navegador é aberta
E o usuário é redirecionado para a página do LinkedIn da Swag Labs

---
### Products

**CT01 - Verificar que é possivél adicionar um produto ao carrinho**
Dado que o usuário está logado
E o usuário está na página inicial
Quando o usuário clica no botão "Add to cart" do produto "Sauce Labs Backpack"
Então o produto é adicionado ao carrinho
E o ícone do carrinho mostra 1 item

**CT02 - Verificar que é possivél remover um produto ao carrinho**
Dado que o usuário tem o produto "Sauce Labs Backpack" no carrinho
E o usuário clica no botão "Remove" ao lado do produto
Então o produto é removido do carrinho
E o ícone do carrinho mostra 0 itens

---
