i = 1 // counter variable
	var score=0
	var goodaudio = new Audio('audio/correct.mp3');
	var badaudio = new Audio('audio/wrong.mp3');

function main(){
			if (i==1){ 
                document.view.qnum.value=i;
                document.view.question.value ="What was Guns N' Roses' first album? \na) Use Your Illusion I\nb) Appetite for Destruction\nc) Night Train\nd) GNR: Live";

			correct="b";

			ans=prompt(i+'.) What was Guns N Roses first album? \na) Use Your Illusion I\nb) Appetite for Destruction\nc) Night Train\nd) GNR: Live');

}// end of question 1

			else if (i==2){ 
				document.view.qnum.value=i;
				document.view.question.value ="This band reached the first position in the top 100’s 20 times: \na) The Rolling Stones\nb) The Beatles\nc) Pink FLoyd\nd) Led Zeppelin";

			correct="b";

			ans=prompt(i+'.) This band reached the first position in the top 100’s 20 times:\na) The Rolling Stones\nb) The Beatles\nc) Pink Floyd\nd) Led Zeppelin');

}// end of question 2

			else if (i==3){ 
				document.view.qnum.value=i;
				document.view.question.value ="This Canadian band is most known for their hit song “Tom Sawyer”: \na) Rush\nb) The Tragically Hip\nc) The Guess Who\nd) Loverboy";

		correct="a";

		ans=prompt(i+'.) This Canadian band is most known for their hit song “Tom Sawyer”:\na) Rush \nb) The Tragically Hip\nc) The Guess Who\nd) Loverboy');

}// end of question 3

			else if (i==4){ 
				document.view.qnum.value=i;
				document.view.question.value ="This bassist is famous for his signature axe base: \na) Geddy Lee\nb) Flea\nc) Gene Simmons\nd) Cliff Burton";

		correct="c";

		ans=prompt(i+'.) This bassist is famous for his signature axe base:\na) Geddy Lee\nb) Flea\nc) Gene Simmons\nd) Cliff Burton');

}// end of question 4

			else if (i==5){ 
				document.view.qnum.value=i;
				document.view.question.value ="This artist had a bandmate, famous for his polka-dot flying V guitar, tragically died in a plane crash: \na) Randy Rhoads\nb) Jimi Hendrix\nc) Stevie Ray Vaughan\nd) Dimebag Darrell";

		correct="a";

		ans=prompt(i+'.) This artist had a bandmate, famous for his polka-dot flying V guitar, tragically died in a plane crash:\na) Rhandy Rhoads\nb) Jimi Hendrix\nc) Stevie Ray Vaughan\nd) Dimebag Darrell');

}// end of question 5

			else if (i==6){ 
				document.view.qnum.value=i;
				document.view.question.value ="This band from Seattle launched to success with the release of their album “Nevermind”: \na) Soundgarden\nb) Nirvana\nc) Pearl Jam\nd) Foo Fighters";
    
		correct="b";
	
		ans=prompt(i+'.) This band from Seattle launched to success with the release of their album “Nevermind”:\na) Soundgarden\nb) Nirvana\nc) Pearl Jam\nd) Foo Fighters');

}// end of question 6

			else if (i==7){ 
				document.view.qnum.value=i;
				document.view.question.value ="This band is widely regarded to be the father of metal: \na) Metallica\nb) Iron Maiden\nc) Megadeth\nd) Black Sabbath";

		correct="d";

		ans=prompt(i+'.) This band is widely regarded to be the father of metal:\na) Metallica\nb) Iron Maiden\nc) Megadeth\nd) Black Sabbath');

}// end of question 7

			else if (i==8){ 
				document.view.qnum.value=i;
				document.view.question.value ="This guitarist founded the finger tapping method, which allowed guitarists to play 3 notes at once using 2 hands: \na) Slash\nb) Kirk Hammett\nc) Eddie Van Halen\nd) Dave Mustaine";

		correct="c";

		ans=prompt(i+'.) This guitarist founded the finger tapping method, which allowed guitarists to play 3 notes at once using 2 hands:\na) Slash\nb) Kirk Hammett\nc) Eddie Van Halen\nd) Dave Mustaine');

}// end of question 8

			else if (i==9){ 
				document.view.qnum.value=i;
				document.view.question.value ="This left handed guitarist was famous for first playing a right handed fender stratocaster: \na) Jimi Hendrix\nb) Slash\nc) BB King\nd) Stevie Ray Vaughan";

		correct="a";

		ans=prompt(i+'.) This left handed guitarist was famous for first playing a right handed fender stratocaster:\na) Jimi Hendrix\nb) Slash\nc) BB King\nd) Stevie Ray Vaughan');

}// end of question 9

			else if (i==10){ 
				document.view.qnum.value=i;
				document.view.question.value ="This drummer's death was what tragically ended the band Led Zeppelin: \na) John Bonham\nb) Neil Peart\nc) Dave Grohl\nd) Rings Starr";

		correct="a";

		ans=prompt(i+'.) This drummer died, and his death tragically ended the band Led Zeppelin:\na) John Bonham\nb) Neil Peart\nc) Dave Grohl\nd) Rings Starr');

}// end of question 10
	
document.view.go.focus();  // puts the focus on the "Next Question >" button so the enter key will activate it

    if (correct==ans){

		document.view.question.value =" Good job!";
		score++;
        goodaudio.play();
	}
	else{
		document.view.question.value =" Wrong! Sorry, nice try!";
        badaudio.play();
	}

	i++; //should keep track of # of questions asked
    
    if (i > 10){
	alert("This is the end of the quiz!\nYour score is: "+ score + "/" + 10 + "\nYou scored: " + (score / 10) * 100 + "%" );
	}
}
