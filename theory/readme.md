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

## Q U A L I D A D E

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