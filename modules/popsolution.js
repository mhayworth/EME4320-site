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

question[2]="What is the world's most common religion?"
choice2[1]="Christianity"
choice2[2]="Buddhism"
choice2[3]="Hinduism"
choice2[4]="Muslim"

question[3]="Which city ranks as the world\'s most populous city?"
choice3[1]="New York (US)"
choice3[2]="Mexico City (Mexico)"
choice3[3]="Tokyo (Japan)"
choice3[4]="Shanghai (China)"

question[4]="According to statistics, what kind of sites on the net are the most popular?"
choice4[1]="Adult content sites"
choice4[2]="Portal sites"
choice4[3]="Chat sites"
choice4[4]="News sites"

question[5]="As of June 1998, how much is Microsoft Chairman Bill Gates's net worth?"
choice5[1]="10 million US"
choice5[2]="10 billion US"
choice5[3]="35 billion US"
choice5[4]="50 billion US"

solution[1]="b"
solution[2]="a"
solution[3]="b"
solution[4]="b"
solution[5]="d"
