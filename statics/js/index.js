// Cria um botão "fechar" que anexa a cada item da lista
var myNodelist = document.getElementsByTagName("LI"); // localiza cada elemento "li"
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN"); // cria o elemento "span" dentro da "li"
  var txt = document.createTextNode("\u00D7"); // Criar o (x) - Unicode Character
  span.className = "close"; // adiciona classe "close" no elemento "span" para usar em css e js
  span.appendChild(txt); // insere o Unicode Character no elemento "span" 
  myNodelist[i].appendChild(span); // insere o elemnto "span" na "li" correspondente
}

// Clique no botão de fechamento para ocultar tarefa
var close = document.getElementsByClassName("close"); // Localiza elemento (x) - Unicode Character
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement; // Pegando elemento pai ("li")
    div.style.display = "none"; // retirando estilização da "li" para ocutar tarefa
  }
}

// adiciona "checked" ao clicar em um item da lista (Para marcar tarefa como feita)
var list = document.querySelector('ul'); // obtem elemento "ul"
list.addEventListener('click', function(ev) {
  // Ao receber evento de click  chama a função abaixo
  // Obtem elemento que desencadeou o evento
  if (ev.target.tagName === 'LI') {
    // acessar a lista de classes do elemento. Se a class "checked" existir será removida
  // e retorna "false", se não, será adicionada e retornará "true"
    ev.target.classList.toggle('checked'); 
  }
}, false);

// Cria um novo item na lista ao clicar no botão "add"
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value; // captar texto
  var t = document.createTextNode(inputValue); 
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li); // cria elemento filho "li" em "ul"
  }
  document.getElementById("myInput").value = ""; // deixa o campo de digitaçã em branco novamente

  // Cria um botão "fechar" no item
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Para ocultar tarefa ao clicar no botão
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
} 