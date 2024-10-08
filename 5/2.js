"use strict";

/*
Необходимо из объекта post, вывести значения, к которым приписан комментарий, 
в консоль.
*/

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

// Здесь пишем решение, данный комментарий необходимо стереть.

console.log(post.author); // Выводим значение свойства "author"

console.log(post.comments[0].rating.dislikes); // Выводим значение свойства "dislikes" из первого комментария

console.log(post.comments[1].userId); // Выводим значение свойства "userId" из второго комментария

console.log(post.comments[1].text); // Выводим значение свойства "text" из второго комментария