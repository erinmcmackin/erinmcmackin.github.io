// console.log($);

$(()=>{

  const boardArr = [];

  const createGameBoard = ()=>{
    for(i = 1; i <= 50; i++){
      boardArr.push(i);
      const $div = $('<div>').attr('class', 'square').appendTo('#game-board');
    };
    console.log(boardArr);
  };

    createGameBoard();
});
