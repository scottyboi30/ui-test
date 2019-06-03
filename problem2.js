/**
  Write a function that uses recursion to log a Fibonacci sequence of n length.
    The Fibonacci Sequence is a series of numbers:
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
    The next number is found by adding up the two numbers before it.
**/

const fibonacciSequence = n => {
  if (n <= 2) 
  {
      return [0,1];
  }
  else 
  {
    var sequence = fibonacciSequence(n - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
  }
};

export default fibonacciSequence