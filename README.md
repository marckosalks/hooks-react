# Hooks of react

## => UseState

### imultabilidade do valor do count

### numero de vezes em que um hook é executado nunca pode mudar 
### não pode colocar um hook dentro de uma função, como por exemplo if


## => UseEffect

### Usamos quandoqueremos executar alguma coisa ou quando algo mudar 

### se não passar nada ele atualiza assim que algo renderizar na tela

### se passamos uma lista vazia ele vai renderizar apenas 1 vez

### se passarmos uma lista preenchida ele executa quanod o valo da lista foi alterado 

### dentro da função principal do useEffect não podemos usar async await, criar outra função dentro dele  

## da para emular o component did mounth e component willamounth

## => UseRef

### usamos quando desejamos persistir um valor durante todo ciclo de vida de um componente sem que ele seja alterado ao atualizar.

### Alterar valor do estado sem renderizar o componente novamente 

### Referenciar elementos html, recuperar o elemento

### salvar valor anterior de um state

## => UseReducer

### Um hook que recebe uma função como parametro, nessa função temos o state e dispatch 

## useState mais complicado, para casos mais complexos,onde no proprio codigo podemos usar o useState  

### usar quando varias propriedades do seu state depender de uma das outras

## => useContext()

### serve para passar propriedades para uma arvore de components 

### Criamos um contexto com dois valores, usavamos um context.costumer assim podemos passar nosso componente como props e acessamos os valores diretamente no componente que desejamos replicar

## => useMemo()

### Melhorar o gerenciamento de uma função !

### Ele faz o gerenciamento melhor da aplicação 

## => useCallback()

### Problemas de performance