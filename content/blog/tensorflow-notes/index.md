---
title: RSA Encryption Tutorial
date: '2020-01-10T22:12:03.284Z'
tags: ['tensorflow', 'machine-learning']
---

**These are my study notes based off Coursera's [Intro to TensorFlow for AI, ML, and Deep Learning](https://www.coursera.org/learn/introduction-tensorflow/), which I would highly recommend for getting started in TensorFlow. After getting the basics down, I used the tutorials and challenges on TensorFlow's documentation site to keep learning.**

## What is Machine Learning

In traditional programming, programmers solve problems by breaking them down into steps that a computer can do. In machine learning, programmers solve problems by teaching the computer how they problem solve. Instead of giving the computer a problem and the steps to solve it, we give the computer a problem and an answer to let the computer solve it for itself.

In order for the machine to learn what’s right and wrong, it iterates over data using a loss function and optimizer. The loss function measures how "good" the current guess is on its answer. The optimizer generates a new and improved guess. The act of getting very close to the right answer is known as convergence.

> Loss function calculates how bad the iteration was
> Optimizer implements changes based on loss function

Convergence is the process of iterating over data and getting very close to the target.

To make machine learning work effectively, we need data. In order for the machine to understand what the data is, we must label the data.

Neural Networks are the most popular method of Deep Learning which is a subset of Machine Learning itself. A Dense is a layer of connected neurons. In TensorFlow, model.fit trains the neural network to fit one set of values to another.

## Neural Network in with TensorFlow

Below is a simple example of a Neural Network implementation in TensorFlow. The `xs` is the data and the `xy` is the label or "answer." The correlation between the data and answer is easy to figure out. However, instead of figuring it out, we just have to give the data and label to the machine to figure out and predict what the answer would be for 10.

```python
# Import TensorFlow, NumPy, and Keras
import tensorflow as tf
import numpy as np
from tensorflow import keras

# Create model. Think "shape" of data in a matrix.
model = tf.keras.Sequential([keras.layers.Dense(units=1, input_shape=[1])])

# Compile model
# Optimizer: stochastic gradient descent
# Loss func: calculated as the average of the squared differences between the
#            predicted and actual values
model.compile(optimizer='sgd', loss='mean_squared_error')

# Create data
xs = np.array([1, 2, 3, 4, 5], dtype=float)
# Create labels
ys = np.array([2, 4, 6, 8, 10], dtype=float)

# xs == data, xy == label, epochs == iterations
model.fit(xs, ys, epochs=500)

# Get an answer for a number
print(model.predict([10]))
```

## Diving Deeper into Data

The first example is pretty simple. Typically, we'll be handling a lot more data than an array of five numbers. If we have a dataset of a million faces, we would use maybe 80% of them to train the model like the arrays above. And then we could use the remaining 20% to test our model.

Let's say we were creating a computer vision API that can tell if somebody is smiling, frowning or straightfaced. Our `xs` dataset would be the image faces. The `ys` would be our "answers" known as the label. But instead of labeling every image as frowning, smiling or straightface, we would use a 1, 2 or 3 because it removes bias and computers handle numbers better.

How does it remove bias? Say instead we're labeling types of soda. Well if you're from my neck of the woods, we would actaully be labeling pop. And if we were from the south, we would be labeling coke as coke and sprite as coke because everything's coke! That's a silly example but it is extremely important that our models do not include our own biases.
