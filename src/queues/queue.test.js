import Queue from './index';

describe('Queue Tests', () => {
  test('Enqueue', () => {
    const myQueue = new Queue();

    myQueue.enqueue('first');
    myQueue.enqueue('second');

    expect(myQueue.last.value).toBe('second');
  });

  test('Length', () => {
    const myQueue = new Queue();
    myQueue.enqueue('first');
    myQueue.enqueue('second');
    myQueue.enqueue('third');

    expect(myQueue.length).toBe(3);
  });

  test('Dequeue', () => {
    const myQueue = new Queue();
    myQueue.enqueue('first');
    myQueue.enqueue('second');

    myQueue.dequeue();

    expect(myQueue.length).toBe(1);
    expect(myQueue.last.value).toBe('second');
  });

  test('Peek', () => {
    const myQueue = new Queue();
    let node = null;
    myQueue.enqueue('first');
    myQueue.enqueue('second');

    node = myQueue.peek();

    expect(node.value).toBe('first');
    expect(myQueue.length).toBe(2);
    expect(myQueue.first.value).toBe('first');
  });
});
