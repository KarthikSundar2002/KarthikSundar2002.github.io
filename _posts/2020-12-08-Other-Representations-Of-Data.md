---
layout: post
title: Other Representations of Data
description: Discovering other representations of Data
keywords: Binary,floating,ASCII
categories: [Under The Hood]
permalink: /:title
comments: true
---

![Other Representations of Data]({{"/public/images/Other-forms-of-Data-Type.png" | relative_url}})
# Other data types and representations


We have already seen how integers are stored in binary form. However to truly cement the idea that computers store all kinds of information in 0s and 1s, I will show some more representations.

## Floating Point

This is another representation to store numbers. You may wonder we already have integers to represent numbers then why do we need another. The Reason is we will need an awfully high number of bits to store large number such as the Avagadro's Number( 6.023 * 10^23). 

To solve this, our predecessors have come to an representation which will suffice. Nowadays, there are different types of floating point data types such as double. The basic one is called float. Float data type has 32 bits. The first bit is for sign. The following 8 bits represent the exponent part. The remaining 23 bits represent the fractional part.


## ASCII

If you use a computer, then it's obvious that you will use your keyboard. How to represent your key presses? 

Our predecessors all sat together and came to a representation to represent each key in the keyboard. This representation is called ASCII. A singular ASCII code consists of 8 bits. You may ask what does ASCII stands for? It's American Standard Code for Information Interchange. 

Nowadays there is another representation called Unicode which is a superset containing ASCII and along with it some extra stuff. It even has representations for the emojis you send.

By now, you should be able to believe that all data in computers are stored in binary form.

