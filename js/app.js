// console.log($);

$(()=>{

  const boardArr = [];
  const $square = $('.square');
  const $player = $('<img>').attr('src', 'https://png.pngtree.com/element_pic/17/01/04/4a21813fa12293173cb5fbfbc0157339.jpg').addClass('player');
  const $startBtn = $('#start');
  const $rollBtn = $('#roll');


  const createGameBoard = ()=>{
    for(i = 1; i <= 50; i++){
      boardArr.push(i);
      const $div = $('<div>').attr('class', 'square').appendTo('#game-board');
    };
    // console.log(boardArr);
  };

    createGameBoard();

  const functions = {

    start: ()=>{
      $player.appendTo($('.square').eq(0));
    },

    roll: ()=>{
      // console.log('oh haiiii');
      const randNum = Math.floor(Math.random() * 6);
      console.log(randNum);
      $player.appendTo($('.square').eq(randNum));
    }

  };

  $startBtn.on('click', functions.start);
  $rollBtn.on('click', functions.roll);

});
