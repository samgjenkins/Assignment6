// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Hey. You. Listen.",
"We need to cook. Today.",
"Someone cooked here.",
"My name is Walter Hartwell White. I live at 308 Negra Aroya Lane, Albuquerque, New Mexico, 87104.",
"Don't call me Heisenberg. Not here, anyways."
];

var elizaFinals = [
"You're an insane, degenerate piece of filth and you deserve to die.",
"F**k you. And your eyebrows.",
"Stay out of my territory.",
"There are... there are going to be some things, things that you'll come to learn about me in the next few days. I just want you to know that, no matter how it may look, I only had you in my heart. Goodbye."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "You got one part of that wrong.",
     "Is this just a genetic thing with you? Is it congenital? Did your mother drop you  on your head when you were a baby?",
     "Right now, what I need, is for you to climb down out of my ass. Can you do that?",
     "Why don't we all just relax?",
     "Jesse, what the f**k are you talking about?"
  ]]
]],
["sorry", 0, [
 ["*", [
     "We'll manage.",
     "F**k. You."
  ]]
]],
["chemistry", 0, [
  ["*", [
      "Well, technically chemistry is the study of matter. But I prefer to see it as the study of change.",
      "Did you learn nothing from my class?",
      "You see hydrofluoric acid won't eat through plastic. It will however, dissolve metal, rock, glass, ceramic. So there's that.",
      "Let's talk about Chirality. The term 'Chiral' derives from the Greek word hand.Now, the concept here being that just as your left hand and your right hand are mirror images of each other, right? Identical, and yet opposite? Well, so too organic compounds can exist as mirror image forms of one another all the way down at the molecular level. But, although they may look the same, they don't always behave the same.",
      "Chemical reactions involve change on two levels: matter and energy. When a reaction is gradual, the change in  energy is slight. But if a reaction happens quickly, otherwise harmless substances can interact in a way that generates enormous bursts of energy."
   ]]
 ]],
 ["teach", 0, [
  ["*", [
      "goto chemistry"
   ]]
 ]],
 ["danger", 0, [
  ["*", [
      "Who are you talking to right now? Who is it you think you see? Do you know how much I make a year? I mean, even if I told you, you wouldn't believe it. Do you know what would happen if I suddenly decided to stop going into work? A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in. I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot and you think that of me? No. I am the one who knocks!"
   ]]
 ]],
 ["dangerous", 0, [
  ["*", [
      "goto danger"
   ]]
 ]],
 ["knocks", 0, [
  ["*", [
      "goto danger"
   ]]
 ]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "Do you often think of (2) ?",
     "What is the connection between me and (2) ?"
  ]],
 ["* do you remember *", [
     "There was no fugue state. I remember everything.",
     "What about (2) ?",
     "goto what"
  ]],
 ["* you remember *", [
     "I'm sorry, what were you asking me? Oh! Yes, (2)!",
     "What about (2) should I remember?",
     "There was no fugue state. I remember everything.",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "Think! Think, damn it!",
     "Why can't you remember (2)? How stupid are you?"
  ]],
 ["* did you forget *", [
     "Why do you ask ?",
     "Are you sure you told me?",
     "goto what"
  ]]
]],
["if", 3, [
 ["* if *", [
     "Do you think it's likely that (2)?",
     "What do you know about (2)?",
     "Really, if (2)?",
     "What would you do if (2)?",
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Really, (2)?",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "Really? Are you actually this stupid?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "Why the uncertain tone ? Take it, take your shot. Take it!",
     "You aren't sure ?",
     "Don't you know by now ?"
  ]]
]],
["name", 15, [
 ["*", [
     "I am not interested in names.",
     "What the hell is wrong with you? I mean, I'm really asking.",
     "You told him my name? My name, where I work, you told him about my son? Damn junkie!"
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English."
  ]]
]],
["hello", 0, [
 ["*", [
     "What do you want?",
     "You're late."
  ]]
]],
["hi", 0, [
  ["*", [
      "goto hello"
   ]]
 ]],
["cook", 0, [
  ["*", [
      "What exactly do you do here? I've been meaning to ask. Because I'm the producer, right? I cook. But from what I can tell, you are just a drug addict. You are a pathetic junkie, too stupid to understand and follow simple rudimentary instructions."
   ]]
 ]],
 ["cooked", 0, [
  ["*", [
      "goto cook"
   ]]
 ]],
 ["cooking", 0, [
  ["*", [
      "goto cook"
   ]]
 ]],
["computer", 50, [
 ["*", [
     "What do you think machines have to do with our problem?",
     "What have you heard?",
     "You don't think I am a computer program, do you?"
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Do you believe you are (2) ?",
     "You aren't (2).",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Why do you say 'am' ?",
     "I don't understand."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "goto what",
     "That's none of your business",
     "What if I were (2)? Would it change things?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "Would you like it if they were not (2)?",
     "What if they weren't (2)? Who stands to gain?",
     "Are they always (2)?",
     "It's possible they're (2)."
  ]]
]],
["your", 0, [
 ["* your *", [
     "Why are you concerned over my (2) ?",
     "What about your own (2) ?",
     "Mind your own business."
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if you were (2)?",
     "Do you think you were (2)?",
     "Were you (2)?",
     "It doesn't matter now",
     "goto what"
  ]],
 ["* i was *", [
     "Were you really?",
     "Why do you tell me you were (2) now ?",
     "Perhaps I already know you were (2)."
  ]],
 ["* was you *", [
     "You'd like to believe I was (2), wouldn't  you?",
     "What suggests that I was (2)?",
     "What do you think ?",
     "Perhaps I was (2)."
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "Suppose you got (3) soon. What would you do?",
     "What if you never got (3)?",
     "Honesty is good, don't you think?"
  ]],
 ["* i am* @sad *", [
     "What I came to realize is that fear - that's the worst of it. That's the real enemy.",
  ]],
 ["* i am* @happy *", [
     "Oh, well congratulations to you. Great f**king job."
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so?",
     "I wouldn't be so sure."
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you've come crawling back to me?",
     "Do you enjoy being (2)? Do you get some kind of pleasure from it?"
  ]],
 ["* i @cannot *", [
     "Have you tried?",
     "You're useless."
  ]],
 ["* i don't *", [
     "Don't you really (2)?",
     "Why don't you (2)?"
  ]],
 ["* i feel *", [
     "I don't care about how you feel.",
     "Oh yeah? Do you enjoy feeling (2)?",
  ]],
 ["* i * you *", [
     "Are you trying to (2) me ?",
     "You seem to need to (2) me. Don't make that mistake again."
  ]],
 ["*", [
     "You say (1)? Do you even know what that means?",
     "What?",
     "What reason do you have for saying (1)?",
     "Quite peculiar."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2) ?",
     "Does it bring you joy to believe I am (2)?"
  ]],
 ["* you* me *", [
     "What makes you think I (2) you ?",
     "Why would I do that?"
  ]],
 ["* you *", [
     "What would you know about me, Gretchen?",
     "What would your presumption about me be, exactly ?"
  ]]
]],
["yes", 0, [
 ["*", [
     "Don't get cocky.",
     "You seem sure of yourself.",
     "I see."
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2)?",
     "Can you think of anyone? Anyone at all?",
     "Do you have somebody specific in mind?",
     "Who do you think you're talking to?"
  ]],
 ["*", [
     "What is this? What do I have to do? I'm trying to talk to you!",
     "Why not?",
     "Why 'no'?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Does that have anything to do with the fact that your (2)?",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "Don't talk to me about family.",
     "Who else in your family (4) ?",
     "Your (3)?"
  ]],
 ["* my *", [
     "What do you think you know about your '(2)?'",
     "Why do you say your (2)?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "goto what",
     "You want me to be able to (2).  But I won't do it.",
     "Perhaps you would like to be able to (2) yourself. Instead, you need me."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "Perhaps you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why would you ask that?",
     "What is it you really want to know ?",
     "What answer would please you most?",
     "What do you think?",
     "What makes you think you're so smart?",
     "Is that your excuse?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason?",
     "Don't you have other excuse?",
     "You don't really believe that, do you?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "My wife is seven months pregnant with a baby we didn't intend. My fifteen-year-old son has cerebral palsy. I am an extremely overqualified high school chemistry teacher, when I can work I make $43,700 per year. I have watched  all my colleagues  and  friends surpass me in every way imaginable and within eighteen months I  will be dead. And you ask why I (2)?"
  ]],
 ["* why can't i *", [
  "My wife is seven months pregnant with a baby we didn't intend. My fifteen-year-old son has cerebral palsy. I am an extremely overqualified high school chemistry teacher, when I can work I make $43,700 per year. I have watched  all my colleagues  and  friends surpass me in every way imaginable and within eighteen months I  will be dead. And you ask why (2)?"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2)?",
     "Can you think of anyone specifically? I need names.",
     "Who, damn it!?",
     "Who do you think you're talking about? There are cameras everywhere."
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Really, always?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way?",
     "What would you know about me, Gretchen?",
     "How?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
