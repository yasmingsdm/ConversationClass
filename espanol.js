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
    document.getElementById('question1').innerHTML = "??Hay alg??n alimento que no com??a de ni??o y que comes ahora?"
    document.getElementById('question2').innerHTML = "??Sueles saltarte el desayuno? ??Con qu?? frecuencia y por qu???"
    document.getElementById('question3').innerHTML = "??Qu?? restaurante recomiendas? ??Porqu???"
    document.getElementById('question4').innerHTML = "??Por qu?? la pizza es tan popular?"
    document.getElementById('question5').innerHTML = "??Hay alg??n alimento que te recuerde un momento especial? ??Cu??l?"
} else if (topic == 'travel'){
    document.getElementById('question1').innerHTML = "??Cu??les son tus planes para las pr??ximas vacaciones?"
    document.getElementById('question2').innerHTML = "??Alguna vez has vivido una situaci??n inc??moda en un viaje?"
    document.getElementById('question3').innerHTML = "??En cu??ntos pa??ses has estado?"
    document.getElementById('question4').innerHTML = "??Que pais te gustaria visitar? ??Porque?"
    document.getElementById('question5').innerHTML = "Cuando viajas en coche, ??qu?? hace para ocupar tu tiempo?"
} else if (topic == 'aboutme'){
    document.getElementById('question1').innerHTML = "??Cu??l era tu evento favorito cuando eras ni??o?"
    document.getElementById('question2').innerHTML = "??Que sueles hacer los domingos?"
    document.getElementById('question3').innerHTML = "??Practicas alg??n deporte? ??Cu??l?"
    document.getElementById('question4').innerHTML = "??Hay algo que hac??as de ni??o que no puedas hacer ahora? ??Qu???"
    document.getElementById('question5').innerHTML = "??Cu??ntos idiomas hablas?"
} else if (topic == 'books'){
    document.getElementById('question1').innerHTML = "??Cu??l es el libro m??s largo que has le??do?"
    document.getElementById('question2').innerHTML = "??Cu??nto tiempo dedicas a leer en una semana?"
    document.getElementById('question3').innerHTML = "??Has le??do el mismo libro m??s de una vez? ??Cu??l?"
    document.getElementById('question4').innerHTML = "??Qu?? consideras a la hora de elegir un libro para leer?"
    document.getElementById('question5').innerHTML = "??Cu??l fue el ??ltimo libro que le??ste?"
}
}