# TripleByte Interview

# ice-breaker 
The person asked if I moved to bay-area at some point or if I was born and raised there. How did I like being in bay-area. He shared his eperience of living in Georgia(Russia). I think we spent like 5 mins talking about the pros-cons of SF bay. He said he didn't like San Francisco that much but couldn't quite put his finger on why.

He had a considerable Russian accent which made it difficult to understand what he was saying. I had to ask him to repeat himself( sometimes twice) many times. He didn't seem to be annoyed by this and repeated whenever I asked.

# Coding Round : Screenshare ( I picked javascript for this)
* Design a class to implement Spreadsheet. It takes in number of rows and columns and has two methods
 update and
eg.
Alice|5|foo
Bob|10|
||
||
* pretty_print - Left aligned, dynamically assigned width
Alice |5 |foo
Bob   |10|


# Short conceptual questions: VERBAL
## Database
 * What is a normalized db
 * What is foreign key
 * How is foreign key useful to normalize db
 * what are indices
 * How are indices implemented
 * what are the advantages/disadvantages of having indices
 * What are composed indices
 * How do you measure performance of a query ( what tools would you use, what output does it provide that is relevant to you)
## System Level
* What is a mutex
* What is deadlock
* What are reader/writer locks
## Data structures
### Hashes and Maps
* How are they implemented
* What are collisions
* If you have 64000 values getting stored using a hash function that has 64 possible outputs, how would you store them.
* What is Bloom Filter
* How do we store passwords in tables
* What is hashing and salting
* Where is salt value stored
https://brilliant.org/wiki/bloom-filter/
* How does malloc function works in C ( what parameters you pass to it and what is the output)
* How does free function work
### Binary Search Trees
* Search time Big O, Worst case search time
* How to you find kth smallest element ( preorder traversal?)
* How is preorder traversal implemented ( I tried to explain it but found it hard to do it verbally probably because I didn't remember the algorithm very well)
# Debugging Round: Screenshare ( I picked Ruby for this)
Find bugs in Web Crawler. They provided nice specs for it.
Make sure to run passing specs after each fix, it's possible to fail passing specs while you THINK you fixed the failing specs ( which would be awful).
# System Architecture :VERBAL
HTTP
Difference between GET and POST requests
How does caching work, what is load balancing?


 Q. A colleague has given you data scraped from Craigslist on used cars.
It contains data about many million cars and has their make, model, color, miles, location etc.
You have to design a system that would query the data and return the details about cars. What would be the API endpoints of this system?
Example - All the red hondas, between 30000 - 50000 miles located in Baltimore.

# Personal Questions
  * Q. Number of years of experience in software
  * Q. What did you work on
  * Q. What are you looking for in your next job
        ( The interviewer commented on my desired job being 180 degree to my previous job)
  * Q. What kind of company I would prefer
  * Q. If I had any questions other than the next steps
  
  
# Feedback from TripleByte ( Provided two days later)
Hey Anshu,
Thank you for taking our practice interview! We've prepared some feedback on how you did, so you know what areas to work on for your final interview.
We're really glad that we had the chance to talk to you, and we hope that the interview was a good experience for you. We learn a lot from every candidate we talk to. You demonstrated a great understanding of how database indexes are used, and we liked your explanation of what a binary search tree is. And you were friendly and we enjoyed talking to you.
Here are the areas we think you could improve. We didn't ultimately see the coding proficiency we were looking for during the coding section - you didn't make very much progress. You didn't seem very comfortable in JavaScript. During the debugging section, you had a lot of trouble navigating an unfamiliar codebase and zeroing in on the parts that were important to investigate. You didn't go into much depth when we talked about relational databases, specifics of web systems, low level systems, and data structures. During the used car API design problem, you didn't convey a strong understanding of how to design web systems.
Here's our advice. We're erring on the side of volume rather than specificity here - we aren't saying that you'd need to learn all of this in order to get through our process, and we certainly aren't saying that you need to know all of this in order to get a job. We do, however, genuinely believe that these recommendations might be valuable to you, which is why we wanted to include them.
You'd do better during interviews if you were faster at writing small-scale code from scratch. There are two easy ways of getting better at that. Firstly, you could practice writing small programs. Exercism.io is a great source of small problems to practice with. Secondly, you might enjoy taking the time to read the documentation of the APIs of JavaScript's collection objects - this a great way to familiarize yourself with methods that might come in handy when you're coding. This will also help get you better at debugging, which will be useful during interviews that have a debugging portion (like this one).
If you want to practice interview-style problems under time pressure, you might want to try doing problems from LeetCode or HackerRank. Quickly implementing small-scale programming logic is a useful and distinct skill, and it can be valuable to practice it directly.
You should try to debug more systematically. We have some brief notes on that here.
It might also be useful for you to to learn more about database indexing and performance concerns. If this interests you, we recommend taking a look at "Use The Index, Luke!", which covers just about everything developers need to know about indexes.
If you’re interested in a high-level overview of HTTP concepts, we recommend checking out the Web Developer Roadmap. It’s a great place to start if you want to get a better understanding of HTTP fundamentals.
You should practice answering system design questions. Our favorite source for advice on answering system design questions is this gist.
We recommend you study algorithms more deeply. The Algorithm Design Manual is a particularly good and practically-oriented algorithms textbook, and it's freely available on the internet. Reading the third chapter, which is about how to think about data structures, would be particularly helpful when it comes to taking interviews similar to ours. There are also many algorithms MOOCs: doing one of these would be good practice. Similarly good resources include this page (which contains advice about studying algorithms), Interview Cake (a course that focuses specifically on learning the right ways to think about the kinds of algorithms and data structures problems that come up in technical interviews) and this Data Structures and Algorithms Guide (a down-to-earth overview of the most essential concepts).
Coursera and Udacity offer free, high-quality online courses on a wide variety of subjects, allowing you to both get a broad overview of topics and selectively focus on subjects you’re less familiar with. We recommend making a broad sweep of most subjects covered by our interview (relational databases, back-end web development, data structures, and low-level systems) and then diving deeper into whatever interests you. Educative, while not free, also has some great courses that can help you brush up on what you need to know for most technical interviews. When preparing for future interviews, you might find Mastering Data Structures: An interview refresher and Recursion for Coding Interviews particularly helpful.
Doing a bootcamp can be a very good way of quickly moving into web programming. We have observed that coding bootcamp graduates learn a lot from the experience. Coding bootcamps aren't just for people who want to learn to code; they're also beneficial for experienced engineers who want to expand and hone their skills.
As a reminder, you will be able to book your final interview in two weeks; to do so, log into your account and you will be directed to book a time. In the interim, take some time to brush up on the topics above. We look forward to talking with you again soon!
Best,
Triplebyte Team
