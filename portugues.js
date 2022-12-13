let topic = ''

document.getElementById('q1').disabled = true
document.getElementById('q2').disabled = true
document.getElementById('q3').disabled = true
document.getElementById('q4').disabled = true
document.getElementById('q5').disabled = true

const submit= ()=>{

// Choose the topic:
if (document.getElementById('food').checked == true){
    topic = 'food'
} else if (document.getElementById('travel').checked == true){
    topic = 'travel'
} else if (document.getElementById('aboutme').checked == true){
    topic = 'aboutme'
} else if (document.getElementById('books').checked == true){
    topic = 'books'
} else {
    alert('Escolha um tópico')
}

//Show question 1 and able other buttons from questions:
document.getElementById('question1').style.display = 'block';
document.getElementById('q1').disabled = true;
document.getElementById('q2').disabled = false
document.getElementById('q3').disabled = false
document.getElementById('q4').disabled = false
document.getElementById('q5').disabled = false
document.getElementById('submit').disabled = true

//Change the question:

document.getElementById('q1').onclick = () =>{
    document.getElementById('question1').style.display = 'block';
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question3').style.display = 'none';
    document.getElementById('question4').style.display = 'none';
    document.getElementById('question5').style.display = 'none';
}

document.getElementById('q2').onclick = ()=>{
    document.getElementById('q1').disabled = false;
    document.getElementById('question2').style.display = 'block';
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question3').style.display = 'none';
    document.getElementById('question4').style.display = 'none';
    document.getElementById('question5').style.display = 'none';
}

document.getElementById('q3').onclick = () =>{
    document.getElementById('q1').disabled = false;
    document.getElementById('question3').style.display = 'block';
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question4').style.display = 'none';
    document.getElementById('question5').style.display = 'none';
}

document.getElementById('q4').onclick = () =>{
    document.getElementById('q1').disabled = false;
    document.getElementById('question4').style.display = 'block';
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question3').style.display = 'none';
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question5').style.display = 'none';
}

document.getElementById('q5').onclick = () =>{
    document.getElementById('q1').disabled = false;
    document.getElementById('question5').style.display = 'block';
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question3').style.display = 'none';
    document.getElementById('question4').style.display = 'none';
    document.getElementById('question1').style.display = 'none';
    document.getElementById('submit').disabled = false
}

//Topic questions:
if (topic == 'food'){
    document.getElementById('question1').innerHTML = "Há alguma comida que você não comia quando criança e que come agora?"
    document.getElementById('question2').innerHTML = "Você costuma pular o café da manhã? Se sim, com que frequência e por quê?"
    document.getElementById('question3').innerHTML = "Qual restaurante você recomenda? Por que?"
    document.getElementById('question4').innerHTML = "Por que a pizza é tão popular?"
    document.getElementById('question5').innerHTML = "Existe alguma comida que te lembre algum momento especial? Qual?"
} else if (topic == 'travel'){
    document.getElementById('question1').innerHTML = "Quais são seus planos para as próximas férias?"
    document.getElementById('question2').innerHTML = "Você já passou por uma situação embaraçosa em uma viagem?"
    document.getElementById('question3').innerHTML = "Em quantos países você já esteve?"
    document.getElementById('question4').innerHTML = "Qual país você gostaria de conhecer? Por que?"
    document.getElementById('question5').innerHTML = "Quando você está viajando de carro, o que você faz para ocupar seu tempo?"
} else if (topic == 'aboutme'){
    document.getElementById('question1').innerHTML = "Qual era o evento que você mais gostava quando criança?"
    document.getElementById('question2').innerHTML = "O que você costuma fazer aos domingos?"
    document.getElementById('question3').innerHTML = "Você pratica algum esporte? Qual?"
    document.getElementById('question4').innerHTML = "Tem alguma coisa que você fazia quando criança que você não consegue fazer hoje em dia? O que?"
    document.getElementById('question5').innerHTML = "Quantos idiomas você fala?"
} else if (topic == 'books'){
    document.getElementById('question1').innerHTML = "Qual é o livro mais longo que você já leu?"
    document.getElementById('question2').innerHTML = "Quanto tempo você passa lendo durante uma semana?"
    document.getElementById('question3').innerHTML = "Você já leu mais de uma vez o mesmo livro? Qual?"
    document.getElementById('question4').innerHTML = "O que você leva em consideração ao escolher um livro para ler?"
    document.getElementById('question5').innerHTML = "Qual foi o último livro que você leu?"
}
}