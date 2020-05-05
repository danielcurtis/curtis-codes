---
title: Data Types in C
date: '2020-05-04T22:12:03.284Z'
tags: ['c']
---

## Data Types

### Integers

There aren't a whole lot of data types in C. Basic types include **integers** which are whole numbers that can be negative, and they are signed by default. There are also **unsigned integers** which are non-negative integers.

Memory manipulation is a powerful component of C. Signed integers are typically stored in 2's complement (more on this below). Unsigned integers are stored in binary.

> Two's complement is a clever way of storing signed integers in _binary_ so that performing math on them is easy.
> For 0, use all 0s. For positive ints, count up to a max of 2^(bits-1) - 1. For negative ints, do the same thing but
> swap 0s and 1s. So `0` would be `0000`, `1` would be `0001`, and `-1` would be `1111`.

If this doesn't make sense, don't worry too much. The important takeaway is that it's a clever way to represent negative numbers in binary so we can perform math on them easily. In the table below, you may notice that chars (characters) are included. C stores characters in memroy as an integer instead of a string. For this reason, they can also be signed or unsigned. It's weird to think about characters as integers, but it can be very powerful after getting used to it. There are a few differnet integer types that are the same as int but are just defined as having a different size.

_I list the "typical" size and value range. However, this can vary depending on the computer. Use `sizeof` to check your local machine._

| Data Type        | Description             | Size    | Value Range                                             |
| ---------------- | ----------------------- | ------- | ------------------------------------------------------- |
| `char`           | Characters              | 1 byte  | -128 to 127                                             |
| `unsigned char`  | Non-negative characters | 1 byte  | 0 to 255                                                |
| `int`            | Whole numbers           | 4 bytes | -2,147,483,648 to 2,147,483,647                         |
| `unsigned int`   | Non-negative whole nums | 4 bytes | 0 to 4,294,967,295                                      |
| `short`          | Smaller than ints       | 2 bytes | -32,768 to 32,767                                       |
| `unsigned short` | Non-negative short      | 2 bytes | 0 to 65,535                                             |
| `long`           | Bigger than ints        | 8 bytes | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| `unsigned long`  | Non-negative long       | 8 bytes | 0 to 18,446,744,073,709,551,615                         |

### Floating Point Numbers

Integers are whole numbers. Floating point numbers are numbers with decimals or fractions. There's a few different types which are comparable to integers.

| Data Type     | Description       | Size     | Value Range            |
| ------------- | ----------------- | -------- | ---------------------- |
| `float`       | Think int         | 4 bytes  | 1.2E-38 to 3.4E+38     |
| `double`      | Think long        | 8 bytes  | 2.3E-308 to 1.7E+308   |
| `long double` | Think bigger long | 10 bytes | 3.4E-4932 to 1.1E+4932 |

### Booleans

For a long time there weren't booleans (true/false) in C, and we just used 0 for false and 1 for true. They exist now, but require the `stdbool.h` header file. Or we can use `typedef` to create our own data type (more on typedef later). Here's an example:

```c
#include <stdio.h>
// Include the header file
#include <stdbool.h>

// Or create the bool data type with typedef (don't do both like me!)
typedef enum {false, true} bool;

int main() {
  bool is_schrodingers_cat_alive = true;

  if (is_schrodingers_cat_alive)
    printf("ALIVE!");
  else
    printf("DEAD!");

  return 0;
}
```

### Arrays

Coming soon...
