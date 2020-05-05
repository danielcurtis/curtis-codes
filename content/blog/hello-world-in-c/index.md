---
title: Hello World in C
date: '2020-05-04T22:12:03.284Z'
tags: ['c']
---

## Why C?

You've probably heard C has a steep learning curve. I don't believe that to be true. I believe other languages such as Python or JavaScript are easier because there are a lot more resources to learn them. Another reason is that there is virtually nothing pre-built in C, so it requires the learner to build their own data strucure or function like a hashmap (just a fancy way to store key-value pairs) instead of importing it and not truly understanding what's going on. So in that sense, C is harder because it requires understanding programming from first principles.

## The Main Function

C is a compiled language so it requires running code through a compiler like GCC which generates an executable. The executable can then be ran in the command line.

A C file always has a main function which is where the program is ran from. If the program ran as expected, we return 0. If it doesn't we return a different number. Every language has a way of printing, and C is no different. So holding true to tradition a Hello World program would look like this:

```C
#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}
```

Two notes: first what in the world is <stdio.h>? It's the library that has the printf function. When we compile the program, there is a stage that links the function from that library and inserts it into our code. Secondly, notice that to decalre the main function, I put `int`. Functions are declared by the "type" the return such as int for integer or char for character. Because we always end main functions by returning 0, we declare them as ints.
