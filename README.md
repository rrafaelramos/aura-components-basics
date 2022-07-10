<h3>Refatorar componentes e comunicar com eventos<h3>
 
Refatore o formulário de entrada dos itens da lista de campismo em seu próprio componente e comunique-se com eventos de componente.<br/>
Substitua o formulário HTML no componente campingList por um novo componente campingListForm que chama a ação do controlador clickCreateItem JavaScript <br/>

quando clicado: <br/>
O componente campingList ouve um evento c: addItemEvent e executa a ação handleAddItem no controlador JavaScript <br/>
O método handleAddItem salva o registro no banco de dados e adiciona o registro ao provedor de valor items <br/>
O evento addItemEvent é do tipo component e tem um atributo de tipo Camping_Item__c chamado item <br/>
O campingListForm registra um evento addItem do tipo c: addItemEvent <br/>
O controlador campingListFormController JavaScript chama o método createItem do auxiliar, quando o formulário é válido: <br/>
O auxiliar JavaScript campingListForm cria um evento addItemcom o item a ser adicionado, aciona o evento e redefine o provedor de valor newItem com um sObjectType vazio do tipo Camping_Item__c
