// console.log($);

$(()=>{

  const boardArr = [];
  const $square = $('.square');
  const $player = $('<img>').attr('src', 'https://png.pngtree.com/element_pic/17/01/04/4a21813fa12293173cb5fbfbc0157339.jpg').addClass('player');
  const $player2 = $('<img>').attr('src', 'http://i.dailymail.co.uk/i/pix/2014/12/19/24297E7B00000578-0-image-a-11_1419023832559.jpg').addClass('player');
  const $instructionsBtn = $('#instructions');
  const $closeInstBtn = $('#closeInstBtn');
  const $startBtn = $('#start');
  const $rollBtn = $('#roll').prop('disabled', true);
  const $resetBtn = $('#reset').prop('disabled', true);
  const $rollBtn2 = $('#roll2').prop('disabled', true);
  let prevPlace = 0;
  let prevPlace2 = 0;


  const createGameBoard = ()=>{
    for(i = 0; i <= 49; i++){
      const $div = $('<div>').attr('class', 'square').attr('id', i).appendTo('#game-board');
      boardArr.push($div);
    };
    // console.log(boardArr);
  };

  const functions = {

    instructionsOpen: ()=>{
      $('#modal-bkgrd').css('display', 'block');
    },

    instructionsClose: ()=>{
      $('#modal-bkgrd').css('display', 'none');
    },

    start: ()=>{
      $rollBtn.prop('disabled', false);
      $rollBtn2.prop('disabled', false);
      $resetBtn.prop('disabled', false);
      $player.appendTo($('.square').eq(0));
      $player2.appendTo($('.square').eq(0));
    },

    roll: ()=>{
      // console.log('oh haiiii');
      const randNum = Math.floor(Math.random() * 5 + 1);
      console.log(randNum);
      let newPlace = prevPlace + randNum;
      console.log('new place is ' + newPlace);
      $player.appendTo($('.square').eq(newPlace));
      prevPlace = newPlace;
      if(newPlace >= boardArr.length){
        $player.appendTo($('.square').eq(boardArr.length - 1));
        console.log(boardArr.length - 1);
        console.log('Player 1 wins!');
        $rollBtn.prop('disabled', true);
        $rollBtn2.prop('disabled', true);
      }
    },

    roll2: ()=>{
      // console.log('oh haiiii');
      const randNum = Math.floor(Math.random() * 5 + 1);
      console.log(randNum);
      let newPlace2 = prevPlace2 + randNum;
      $player2.appendTo($('.square').eq(newPlace2));
      prevPlace2 = newPlace2;
      if(newPlace2 >= boardArr.length){
        $player2.appendTo($('.square').eq(boardArr.length - 1));
        console.log('Player 2 wins!');
        $rollBtn.prop('disabled', true);
        $rollBtn2.prop('disabled', true);
      }
    },

    resetGame: ()=>{
      // console.log('hiii - RESET INITIATED');
      $('.square').empty();
      $rollBtn.prop('disabled', true);
      $rollBtn2.prop('disabled', true);
      $resetBtn.prop('disabled', true);
    }

  };

  createGameBoard();

  $instructionsBtn.on('click', functions.instructionsOpen);
  $closeInstBtn.on('click', functions.instructionsClose);
  $startBtn.on('click', functions.start);
  $rollBtn.on('click', functions.roll);
  $rollBtn2.on('click', functions.roll2);
  $resetBtn.on('click', functions.resetGame);

});
