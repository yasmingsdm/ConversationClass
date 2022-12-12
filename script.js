
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
    topic = 'about me'
} else if (document.getElementById('books').checked == true){
    topic = 'books'
} else {
    alert('You must choose a topic')
}

//Able buttons from questions:
document.getElementById('q1').disabled = false
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
    document.getElementById('question2').style.display = 'block';
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question3').style.display = 'none';
    document.getElementById('question4').style.display = 'none';
    document.getElementById('question5').style.display = 'none';
}

document.getElementById('q3').onclick = () =>{
    document.getElementById('question3').style.display = 'block';
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question4').style.display = 'none';
    document.getElementById('question5').style.display = 'none';
}

document.getElementById('q4').onclick = () =>{
    document.getElementById('question4').style.display = 'block';
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question3').style.display = 'none';
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question5').style.display = 'none';
}

document.getElementById('q5').onclick = () =>{
    document.getElementById('question5').style.display = 'block';
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question3').style.display = 'none';
    document.getElementById('question4').style.display = 'none';
    document.getElementById('question1').style.display = 'none';
}

//Topic questions:
if (topic == 'food'){
    document.getElementById('question1').innerHTML = "Are there any foods that you wouldn't eat as a child that you eat now?"
    document.getElementById('question2').innerHTML = "Do you ever skip breakfast? If so, how often and why?"
    document.getElementById('question3').innerHTML = "What restaurant in this city do you recommend? Why is it a good place?"
    document.getElementById('question4').innerHTML = "Why is pizza popular?"
    document.getElementById('question5').innerHTML = "Are there any foods that bring back special memories for you? What are they?"
} else if (topic == 'travel'){
    document.getElementById('question1').innerHTML = "Are you planning on going anywhere for your next vacation? If so, where?"
    document.getElementById('question2').innerHTML = "Have you ever been in a difficult situation while traveling?"
    document.getElementById('question3').innerHTML = "How many countries have you been to?"
    document.getElementById('question4').innerHTML = "What country do you most want to visit? Why?"
    document.getElementById('question5').innerHTML = "When you are on a long car journey do you play games to occupy your time?"
} else if (topic == 'aboutme'){
    document.getElementById('question1').innerHTML = "Tell me about a favorite event of your childhood."
    document.getElementById('question2').innerHTML = "What do you do on Sundays?"
    document.getElementById('question3').innerHTML = "Which sports do you like?"
    document.getElementById('question4').innerHTML = "What could you do as a child that you can't do now?"
    document.getElementById('question5').innerHTML = "What languages do you speak?"
} else if (topic == 'books'){
    document.getElementById('question1').innerHTML = "What is the longest book you have ever read?"
    document.getElementById('question2').innerHTML = "How many hours do you spend reading in a week?"
    document.getElementById('question3').innerHTML = "Is there a book that you have read more than once? How many times did you read it?"
    document.getElementById('question4').innerHTML = "What factors are important to you when choosing a book to read?"
    document.getElementById('question5').innerHTML = "What was the last book that you read?"
}
}