# Emoji & Wine
A Facebook chat bot that tests your emoji game.

Emoji & Wine is a very simple game based on facebooks Messanger service and a bunch of photos from the instagram account [MackerelandWine](https://www.instagram.com/mackerelandwine/). The game goes like this: 

* Chat Bot: Ready to test your Emoji game?
* User: (clicks the "ready" button).
* Chat bot: Good! Here are the rules. I'm holding 10 drawings in my hand that I will show you one at a time. As soon as I show you a drawing, you have 10 second to send me the matching emoji. If you get it in time, you get a point. Otherwise I get a point. Here, let's try it once without a timer, just to see if you get it. 
* Chat Bot: Here's a drawing, send me the matching Emoji of a wine glass.
* Chat Bot: [Wine glass drawing]

The user is suppose to then respond with "🍷". If the respond with anything else, the chat bot then uses one of the following at random:

* Chat Bot: HA! that ain't right. Try again. 
* Chat Bot: Geez, are you blind?
* Chat Bot: Hint: You're wroooong!
* Chat Bot: Nope
* Chat Bot: Not even close, haha!

But if the user get's it right:

* Chat Bot: Yeeeehaaa! You got it! But hey, pretty easy when you're not on a clock. Are you ready to try the big boy version? 

* User: No
- Chat bot: Alrigh, see ya!

* User: Yes
- Chat bot: Awesome! I hope you have your Emoji keyboard ready. Here's the first drawing:
* Chat bot: [drawing 1]
* Chat bot: 5 seconds left
* Chat bot: 2 seconds..
* Chat bot: Times up. 

Or if the user gets it in time

* Chat bot: Perfect, you get a point! Next photo coming up
* Chat bot: [drawing 2]
* ...

Once the game is going, Emoji's are the only message considered correct by the bot. Anything else is simply a wrong guess. When the game is over, the bot follows up with the score:

* Chat bot: Alright cowboy, that's it. Let's take a look at the scores. 
* Chat bot: Looks like you got 6/10 points. I guess that means you win. 