//change 5 to the total number of questions
var total=5
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What is the name of the conversion of human language to numbers and vectors that AI algorithms can use?"
choice1[1]="Machine translation"
choice1[2]="Natural language processing"
choice1[3]="Data preparation"
choice1[4]="AI engineering"

question[2]="Which types of content can be created by generative AI?"
choice2[1]="Textual"
choice2[2]="Image-based"
choice2[3]="Audio"
choice2[4]="All of the Above"

question[3]="Which of the following best describes a prompt?"
choice3[1]="What you do with the outputs of generative AI"
choice3[2]="The work that was replaced by generative AI"
choice3[3]="The textual input given to an AI system"
choice3[4]="The process of testing an AI system to ensure accuracy"

question[4]="Which of the following best describes the outputs of generative AI?"
choice4[1]="Generative AI models probability in language and picks the statistically most likely response to a prompt"
choice4[2]="The generative AI can think of entirely novel responses to a prompt"
choice4[3]="Generative AI looks through its training data to return the most similar piece of data to your prompt"
choice4[4]="Generative AI will always have the same response to the same prompt"

question[5]="Which of the following would NOT be an example of machine learning?"
choice5[1]="An image recognition algorithm backed by a neural network"
choice5[2]="An autoencoder that detects anomalies in network traffic"
choice5[3]="A customer service chatbot that finds keywords in user input and responds with prewritten messages"
choice5[4]="A system that uses KNN clustering to split customers by advertising interests"

solution[1]="b"
solution[2]="d"
solution[3]="c"
solution[4]="a"
solution[5]="c"
