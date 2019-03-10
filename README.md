# js-unDo-async
Illustrates the problem when a operation expected to be done in sequence is called asynchronous.

badcode.js will undo out of sequence (at random). An output example is:

Execution order: 2, 4, 3, 1, :-)

Console:
Execution order:
done unDoing: 2 latency:1056.590923427904
done unDoing: 4 latency:2161.006775329756
done unDoing: 3 latency:2259.808023979279
done unDoing: 1 latency:2975.1528753788775


gooCode.js which enqueues the promises calls, produces the sequential output:

Execution order: 1, 2, 3, 4, :-)

Console:

