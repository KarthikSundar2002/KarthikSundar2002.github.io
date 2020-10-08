---
layout: post
title: Understanding 0 and 1
description: Binary and operations of bits
keywords: Binary,Bitwise,1,0,Computing
categories: [Under The Hood]
permalink: /:title
comments: true
---
![Understanding 0 and 1]({{"/public/images/Understanding-0-and-1.png" | relative_url}})

We all know computers don't understand the languages we speak, and we also know that they understand a language which is made up of 0s and 1s. What does this mean? To answer that, we need to start with more fundamental questions.

Fundamentally, how does the computer operate? It operates on the flow of electrons. What makes the electron flow from one point to another? ..Voltage

### How does 0 and 1 come into picture?

0 represents absence of voltage while 1 represents presence of voltage. To be precise, 0 tells that the voltage is *close* to 0 and 1 tells that the voltage is *far* from 0. Here, Voltage is regulated by electric components called transistors(more on them in a later post).

### What is the use of these 0s and 1s?

Combinations of these are used together to store data in various forms called data types. We can also perform various operations on these data.

### What are they called?

As there are two components 0 and 1, this system is called *binary* system. An individual 0 or 1 is called as a bit.

### Why was the binary system chosen?

Computers weren’t designed to use binary system , but instead binary system turned out to be the effective one.

Imagine thousand bulbs of varying brightness, it is quite easy to group dim-lighted bulbs and bright-lighted bulbs(0 and 1). However, it is quite difficult if we want to group them as dim-lighted, moderate and bright-lighted.

i.e, It is easy to differentiate them into 2 states than 3.

There is also the case of technological feasibility. The maximum number of states a transistor can be present in is 2. (Note: It may change with the advent of Quantum Computers, but more on them in the future.)

In the next-post, we will look at a data-type called integer.