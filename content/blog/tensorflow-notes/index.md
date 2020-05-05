---
title: RSA Encryption Tutorial
date: '2020-01-10T22:12:03.284Z'
tags: ['tensorflow', 'machine-learning']
---

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
