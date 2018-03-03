// console.log($);

$(()=>{

  const boardArr = [];
  const $square = $('.square');
  const $player = $('<img>').attr('src', 'https://png.pngtree.com/element_pic/17/01/04/4a21813fa12293173cb5fbfbc0157339.jpg').addClass('player');
  const $startBtn = $('#start');
  const $rollBtn = $('#roll');
  let prevPlace = 0;


  const createGameBoard = ()=>{
    for(i = 0; i <= 49; i++){
      const $div = $('<div>').attr('class', 'square').attr('id', i).appendTo('#game-board');
      boardArr.push($div);
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
      const randNum = Math.floor(Math.random() * 5 + 1);
      console.log(randNum);
      let newPlace = prevPlace + randNum;
      console.log('new place is ' + newPlace);
      // console.log(prevPlace);
      // $player.appendTo($('.square').eq(randNum));
      $player.appendTo($('.square').eq(newPlace));
      prevPlace = newPlace;
      if(newPlace > boardArr.length){
        $player.appendTo($('.square').eq(boardArr.length));
        console.log('Player wins!');
        $rollBtn.prop('disabled', true);
      }
    }

  };

  $startBtn.on('click', functions.start);
  $rollBtn.on('click', functions.roll);

});
