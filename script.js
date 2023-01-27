var truth = new Array();
var dare=new Array();
function choice_truth()
{
    
    
    truth.push("What was the last thing you searched for on your phone?");
    truth.push("Who do you have a crush on?");
    truth.push("What would you do on your perfect first date?");
    truth.push("Have you ever farted loudly in class?");
    truth.push("Who is your least favourite person here?");
    truth.push("Who is the sexiest person in this room?");
    truth.push("What was your worst lie ever?");
    truth.push("If you could only hear one song for the rest of your life, what would it be?");
    truth.push("How much money do you make a month?");
    truth.push("If you could live anywhere in the world, where will you live and with whom?");
    truth.push("What's something that would be horrible if your parents find out? It  should be the weirdest one!");
    truth.push("What's something uncomfortable but you feel everyone should experience at least once in their life?");
    truth.push("Who here acts the most desperate?");
    truth.push("When and with whom was your first kiss with?");
    truth.push("Point 3 people in the group who you're pretty sure have had sex atleast once, you can include yourself too");
    truth.push("If you could go back in time and replace one memory, what would that be?");
    truth.push("Did you ever kiss? If yes, name the person who you had your first kiss with?");
    truth.push("What little thing instantly tells you that a person is good?");
    truth.push("What do you think is your biggest physical flaw?");
    truth.push("Have you ever dated someone elder/younger than you?");
    truth.push("Give us a list of all your crushes, girlfriends/boyfriends?");
    
    let randtruth=(Math.floor(Math.random()*truth.length));
    alert(truth[randtruth]);
}

function choice_dare()
{
    
    
    dare.push("Pair everyone here in couples (If someone is left, you can pair them up with someone from outside");
    dare.push("Show everyone your instagram DM list");
    dare.push("Give your phone to person sitting on your right and let them read your first 10 youtube searches.");
    dare.push("Pretend to be the most annoying person of the group");
    dare.push("Declare your love to your boyfriend/girlfriend or your crush");
    dare.push("DM the third sixth person on instagram HEY and keep replying with YAAR VYAAH KRAA LAI for next 5 messages");
    dare.push("Wear a clothing item often associated with a different gender - for next 5 rounds");
    dare.push("Call a random person and tell them how depressed you are");
    dare.push("Kiss the person sitting on your left");
    dare.push("Post an instagram story of your hand with a ring in the ring finger and write a caption - IT'S FINALLY HAPPENING <3");
    dare.push("Pretend for the rest of the game that you have an imaginary friend");


    let randdare=(Math.floor(Math.random()*dare.length));
    alert(dare[randdare]);
    
}

function adddare()
{
    var nodebutton=document.getElementById('newbutton');
    var node=document.getElementById('inputid');
    node.style.visibility='visible';
    nodebutton.style.visibility='visible';
    
    
}

function addtruth()
{
    var nodebutton=document.getElementById('newbutton1');
    var node=document.getElementById('inputid');
    node.style.visibility='visible';
    nodebutton.style.visibility='visible';
}

function addnewdares()
{
    var bb=document.getElementById('newbutton1');
    var node=document.getElementById('inputid');
    var newdare=node.value;
    dare.push(newdare);
    node.value="";
    
}
function addnewtruths()
{
    var bb=document.getElementById('newbutton1');
    var node1=document.getElementById('inputid');
    var newtruth=node1.value;
    truth.push(newtruth);
    node.value="";
    alert("donne")
}