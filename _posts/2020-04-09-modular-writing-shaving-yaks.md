---
layout:     post
title:      "Modular writing and shaving yaks"
subtitle:   "Writing words and writing code have a lot in common"
categories: [writing, software, meta]
author:     Lane Rettig
date:       2020-04-09 10:49:00 -0400
image:      /assets/sean-martin-CnWM3njCU60-unsplash.jpg
imagealt:   Close-up of a yak
imagetxt:   'This yak could use a shave. But first we need to find a yak razor. Let me go find my car keys... Photo by <a href="https://unsplash.com/@joeavocado?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sean Martin</a> on Unsplash.'
issue_id:   24
---
By training, I’m a computer scientist and a software developer. I tend to look at the world through the lens of software, systems, and processes. I look for structure and patterns, and for ways to optimize those processes. As one example, waiting in line to check out at a grocery store is infuriating, because the system feels so broken and inefficient—why would you split everyone up into a bunch of tiny lines, where some move much faster than others? (Whole Foods, at least, seems to have figured this out.)

One such interesting pattern is “[yak shaving](https://en.wiktionary.org/wiki/yak_shaving).” The name may be unfamiliar, but the concept isn’t. You set out to do something simple and straightforward—say, cooking dinner. Then you realize that an ingredient is missing. So you set out to go to the shop, which means driving, but the car needs gas. So you plan to stop for gas on the way—but that means you’ll need the loyalty card you use to buy gas. Etc.[[^1]] This process can continue for quite some time, and should sound familiar to any computer scientist: it’s identical to the recursive process of descending down the rabbit hole of subroutine calls and stack frames, “pushing” down deeper and deeper until you (hopefully) reach the bottom. Just as in a computer program, if you go too deep, you may completely lose the original context and never complete the task you set out to do in the first place! (The gamers among us may prefer to think of these as side quests, which can be quite engaging in their own right! 🤓)

I ran into a particularly acute case of yak shaving the other day. I was trying to log into my bank account. Simple enough, right? In order to do that, I needed access to a multi factor auth token. I happened to be on the road at the time, without access to the device that stores the token (it’s an account I don’t use often). I had access to a backup authentication method, but it required that I use a particular app, and that app was already linked to a different identity on the device I was using. I tried creating another account on the device (which required access to yet another set of credentials for another third party account) and using the app there, but it didn’t appear. So I tried installing it again under the second account. For some reason, it wouldn’t let me install it again, probably because it was already installed on the device under another account.

<div class="float-left">
  <img src="/assets/yakshaving.jpg" class="float-left" alt="A book on yak shaving"/>
  <p class="sub-image"><sub>A seminal text indeed. (<a href="https://medium.com/vena-engineering/how-to-shave-a-yak-5310570f424a">Source</a>)</sub></p>
</div>

At this point I considered giving up, but I decided to give it one last shot. I thought I'd try running the app inside a container as an alternative. Running the container required special software which didn’t work out of the box. I won’t bore you with the details of what happened at this point—I had to chase a long list of dependencies and workarounds to get the container running—but, finally, after more than an hour, I got the app running, and was able to access the account. The yak was successfully shaved, and I felt proud of myself (even though I had wasted an hour or two on a wild ~~goose~~ yak chase).

<hr/>

I’ve noticed recently that something similar happens when I’m writing. I’ll get a flash of inspiration and set out to write a piece about a relatively high-level topic—say, a particular dilemma in blockchain governance. I’ll merrilly begin writing, but after a while, I’ll notice one of two things. Either the piece I’m writing has gotten too long and complicated because I’m spending too much time explaining concepts that are _required_ for understanding the article but are _orthogonal_ to its main thrust, or else I’m assuming too much prior knowledge and, thus, only subject-matter experts will be able to follow what I’m writing (which is not how I want to write). At this point I’m faced with three options:

1. Give up trying to write about complex, technical topics. In a sense, this was part of my motivation for creating this blog, since I write about more complex topics [elsewhere](https://www.etherean.org/).
2. Attempt to include all of the necessary information, or enough of it anyway that a motivated reader should be able to follow it, and resign myself to the fact that the article will be very long, too long for most readers. (Pocket tells me that [one piece I wrote recently](https://www.etherean.org/blockchain/community/governance/2020/03/04/autonocrats-anthropocrats.html) is a 40 minute read. I intended it to be a 15 minute read.)
3. Break the piece into a number of shorter pieces. Temporarily set aside the “main point,” and write a series of shorter articles that explain the core ideas that are essential to understanding the “main point.” In the “top” article, I can point the reader to these shorter sub-articles—or, better yet, turn the whole thing into a series with a logical, easy-to-follow progression of ideas. (Sometimes, of course, in the process of writing a shorter piece, the whole process repeats itself and I recurse yet another level deeper!)

As I was pondering this phenomenon today while trying to write a high level, “big idea” piece, I realized that this, too, is yak shaving. And it’s a lot like writing software! In software, rather than trying to explain a high-level concept to a reader, we’re trying to explain a high-level task (i.e., an algorithm) to a computer. And, just as a writer has broadly the three options I described above, a programmer has three corresponding options to choose among.

1. Give up trying to to write complex programs. Write short, simple ones instead. This is often a good idea, as simpler programs are easier to understand, reason about, and test. You can still compose such simple programs into a more complex system—the components are called [microservices](https://en.wikipedia.org/wiki/Microservices), and this style of architecture is called [SOA](https://en.wikipedia.org/wiki/Service-oriented_architecture).[[^2]]
2. Write one gigantic, complicated, monolithic program. This is typically a bad idea in software for the same reason that it’s a bad idea in writing more generally: it’s difficult for anyone to understand code that’s structured this way. It’s difficult to maintain or extend programs like this. No one sets out to write this sort of program, but plenty of them exist anyway because they started small, then grew big, acquired lots of [technical debt](https://en.wikipedia.org/wiki/Technical_debt), and were never refactored into something better.
3. Break the program into neat, self-contained sub-programs. Each time you encounter a task that’s well-defined and used more than once, break it off into a separate, shorter, more focused piece of code—these are called subroutines and modules. This common design pattern is called [separation of concern](https://en.wikipedia.org/wiki/Separation_of_concerns), and it’s good practice because it makes complicated applications much easier to understand (thanks to the magic of abstraction).[[^3]]  It’s interesting to note that, like writing, modular programming is more of an art than a science, and two experienced programmers often disagree about where these lines should be drawn!

Looking at it in this way, I’m beginning to understand that my goal when I write is to choose option #1 whenever possible, and option #3 when it’s not. In other words, I strive to write short, logical, self-contained pieces that are easy to understand, but that fit together into a more complete whole (which, over time, might begin to resemble a book). Of course, from time to time, I do also want to write about more complex topics. When I do that, I want to take the time to identify the important sub-topics and sub-ideas that those complex topics embed and make sure that I independently explain them as clearly as possible.

In this respect, I’m beginning to think of this blog as a library of useful modules, each of which explains one independent, interesting thought or idea (and, where necessary, links to other sub-ideas). That’s probably a novel way of thinking about a blog, but there are definitely wikis that are [designed this way](https://wiki.lesswrong.com/index.php?title=Special:AllPages&hideredirects=1).

I wonder, how do other writers think about this?

[^1]: This helpful example comes from [a delightful article](https://joi.ito.com/weblog/2005/03/05/yak-shaving.html) on this topic by Joi Ito.
[^2]: This does make me wonder, what’s the natural language equivalent of microservices and SOA? It would probably look something like [Paul Graham’s essays](http://www.paulgraham.com/articles.html): a series of focused, approachable articles that collectively contain a great deal of systematic wisdom about the world.
[^3]: Incidentally, modular design like this also makes unit testing much easier. If there’s one thing that sets well-engineered software apart from the rest, it’s a thorough and well-designed suite of tests.