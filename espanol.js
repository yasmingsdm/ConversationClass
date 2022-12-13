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
    alert('Elige un tema')
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
    document.getElementById('question1').innerHTML = "¿Hay algún alimento que no comía de niño y que comes ahora?"
    document.getElementById('question2').innerHTML = "¿Sueles saltarte el desayuno? ¿Con qué frecuencia y por qué?"
    document.getElementById('question3').innerHTML = "¿Qué restaurante recomiendas? ¿Porqué?"
    document.getElementById('question4').innerHTML = "¿Por qué la pizza es tan popular?"
    document.getElementById('question5').innerHTML = "¿Hay algún alimento que te recuerde un momento especial? ¿Cuál?"
} else if (topic == 'travel'){
    document.getElementById('question1').innerHTML = "¿Cuáles son tus planes para las próximas vacaciones?"
    document.getElementById('question2').innerHTML = "¿Alguna vez has vivido una situación incómoda en un viaje?"
    document.getElementById('question3').innerHTML = "¿En cuántos países has estado?"
    document.getElementById('question4').innerHTML = "¿Que pais te gustaria visitar? ¿Porque?"
    document.getElementById('question5').innerHTML = "Cuando viajas en coche, ¿qué hace para ocupar su tiempo?"
} else if (topic == 'aboutme'){
    document.getElementById('question1').innerHTML = "¿Cuál era tu evento favorito cuando eras niño?"
    document.getElementById('question2').innerHTML = "¿Que sueles hacer los domingos?"
    document.getElementById('question3').innerHTML = "¿Practicas algún deporte? ¿Cuál?"
    document.getElementById('question4').innerHTML = "¿Hay algo que hacías de niño que no puedas hacer ahora? ¿Qué?"
    document.getElementById('question5').innerHTML = "¿Cuántos idiomas hablas?"
} else if (topic == 'books'){
    document.getElementById('question1').innerHTML = "¿Cuál es el libro más largo que has leído?"
    document.getElementById('question2').innerHTML = "¿Cuánto tiempo dedicas a leer en una semana?"
    document.getElementById('question3').innerHTML = "¿Has leído el mismo libro más de una vez? ¿Cuál?"
    document.getElementById('question4').innerHTML = "¿Qué consideras a la hora de elegir un libro para leer?"
    document.getElementById('question5').innerHTML = "¿Cuál fue el último libro que leíste?"
}
}