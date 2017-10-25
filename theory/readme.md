Teoria de testes
===================================

## O que é qualidade ?
- Visão do cliente
	- Bonito
	- Funcionando
	- Barato

- Visão do chefe
	- Não demore muito
	- Gere lucros
	- Cliente feliz

- Visão do programador

![Imagem](https://goo.gl/fb6sbR)

- Código confuso = Código ruim

## Qualidade

McCall - Referência em qualidade de software no lado do desenvolvimento. Definiu uma piramide que continha caracteristicas para determinar um software de qualidade:

 - Primeira parte do pirâmide - Operação
   - Corretitude ( Ele faz o que foi pedido ? )
	 - Confiabilidade ( Ele é preciso ? )
	 - Eficiência ( Ele tem boa perfomance ? )
	 - Integridade ( Ofere segurança ? )
	 - Usabilidade ( É fácil de usar ? )
	 - Adaptabilidade ( Ele se adapta as necessidades do usuário ? )

 - Segunda parte do pirâmide - Transição
   - Portabilidade ( Eu consigo movê-lo facilmente ?)
	 - Reusabilidade ( Posso utilizar parte dele ? )
	 - Interoperabilidade ( Ele trabalha com outros softwares em conjunto ?)

- Revisão
   - Manutenibilidade ( Fácil de corrigir ?)
	 - Flexibilidade ( Fácil de mudar ? )
	 - Testabilidade ( Posso testar seu funcionamento ?) 

## Fatores para atingir qualidade e como alcança-los

**#1 Tenha bom senso!**
 - Pensar antes de criar coisas e ver se aquilo que vai criar faz sentido. Como nome de variáveis, escopo, se o você mesmo consegue entender o que escreveu para uma futura manutenção ou nova feature. Tentar pensar no código que será escrito.
	- Variáveis
		- Nomes semânticos -  Nada de "a" ou "b"
		- Nomes fáceis - Muito menos "abecedario" ou "shwargy"
		- Substantivos para classes e objetos - "User" ou "Product"
		- Verbos para métodos - "getUser" ou "deleteProduct"

	- Métodos
		- Devem ser pequenos
		- Única responsabilidade

## Padrões de teste

- Ele deve fazer *isso* quando *aquilo* - It should do *that* when *this*
Exemplo:

```js
	it('Should return 4 when receive 2,2'){
		//code here..
	}
```

## Tipos de testes

Pirâmide de testes, criada por *Martin Fowler* - Criador do TDD
![Piramide de testes](https://goo.gl/tC7U8R)

- Testes unitários: testes com responsabilidade única, onde se testa retorno e entrada de métodos.

- Testes de (integração) servico: Exemplo, um componente que já tem todos os testes unitários. Testes onde não devem ser utilizados **mocks**, onde poderá criar dados reais e testar se realmente a API real integra de forma correta com o componente.

- Testes de UI ( **e2e** ): Testes importantes para verificar componentes que podem estar com comportamento indevido, testar eventos como clique, dropdowns. Além de também existir testes de regressão, como alterar um javascript ou css, onde será quebrado alguma comportamento e visualização, que podem ser pegos nesses testes.

A tendência é que se tenha mais testes unitários, pois eles são menores e demandam menos tempo. Já os testes de serviço demandam um pouco mais, se tornando assim menos "frequentes" do que os unitários. Com os testes de UI é menos frequente ainda, pois demanda ainda mais tempo, mas ainda assim deve ser testado, mesmo que os testes unitários cubram bem as funcionalidades envolvidas.

## Dicas para os tipos de testes

- **Teste unitário** - É um simples e pequeno teste automatizado que prova o comportamento de um único método.
	- Evite ruído entre os testes (isolamento). *Exemplo: Não escrever testes que dependam um do outro*
	- Escolha os melhores asserts para cada momento
	- Usar mocks para chamadas externas
	- Utilize do teste para organizar o design do seu código

- Testes de integração - É um teste para validar se os componentes estão funcionando em conjunto
	- Cuidado para não criar um teste inútil, *Exemplo: Situações que já foram testadas no teste unitário*
	- Isole o máximo possível dos ambientes

- Testes de aceitação ( **e2e** ) - O teste de aceitação é realizado com o propósito de avaliar a qualidade externa do produto e, na medida do possível, também a qualidade em uso.
	 - Valide **apenas** o fluxo de funcionamento do projeto

## Spies, Stubs e Mocks

### Spies
Como o nome sugere, spies são usados para vigiar informações sobre chamadas de funções.

São muito úteis para testar callbacks e como métodos são usados dentro do sistema.

### Stubs
Stubs são como os spies, exceto por eles substituirem a função alvo. Podendo inclusive mudar o comportamento, assim como os valores e execções levantadas.

Quando usar:<br> 
- Controlar o comportamento de um teste
- Pular uma parte não necessário do código, como uma execução do DB
- Simplificar o teste de código assincrono

### Mocks
São métodos falsos (similares aos spies) com comportamento pré-programado(similar ao stub).

Mocks devem ser primeiramente utilizados quando você precisa de um stub, mas precisa verificar múltiplos comportamentos num especifico ponto.