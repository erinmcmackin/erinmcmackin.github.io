// console.log($);

$(()=>{

  const boardArr = [];
  const $square = $('.square');
  const $player = $('<img>').attr('src', 'https://png.pngtree.com/element_pic/17/01/04/4a21813fa12293173cb5fbfbc0157339.jpg').addClass('player');
  const $player2 = $('<img>').attr('src', 'https://vignette.wikia.nocookie.net/disney/images/a/a5/Bruce-FN.png/revision/latest?cb=20131111065729').addClass('player');
  const $closeLoadBtn = $('#close-load-btn');
  const $instructionsBtn = $('#instructions');
  const $closeInstBtn = $('#closeInstBtn');
  const $startBtn = $('#start');
  const $rollBtn = $('#roll').prop('disabled', true);
  const $resetBtn = $('#reset').prop('disabled', true);
  const $rollBtn2 = $('#roll2').prop('disabled', true);
  let newPlace;
  let newPlace2;
  let randNum;
  let randNum2;
  let prevPlace = 0;
  let prevPlace2 = 0;



  const createGameBoard = ()=>{
    // creates the board divs
    for(i = 0; i <= 49; i++){
      const $div = $('<div>').attr('class', 'square').attr('id', i).appendTo('#game-board');
      boardArr.push($div);
    };
    // console.log(boardArr);
  };

  const functions = {

    onLoadClose: ()=>{
      // closes the on laod modal
      $('#modal-load-bkgrd').css('display', 'none');
    },

    instructionsOpen: ()=>{
      // opens the instructions modal
      $('#modal-inst-bkgrd').css('display', 'block');
    },

    instructionsClose: ()=>{
      // closes the instructions modal
      $('#modal-inst-bkgrd').css('display', 'none');
    },

    start: ()=>{
      // starting state for gameboard
      $rollBtn.prop('disabled', false);
      $rollBtn2.prop('disabled', false);
      $resetBtn.prop('disabled', false);
      $player.appendTo($('.square').eq(0));
      $player2.appendTo($('.square').eq(0));
    },

    writeRoll: ()=>{
      // display the number rolled by Player 1 in the player's console
      $('#roll-num').empty(); $('<h3>').text(randNum).appendTo($('#roll-num'));
    },

    writeRoll2: ()=>{
      // display the number rolle by Player 2 in the player's console
      $('#roll-num2').empty();
      $('<h3>').text(randNum2).appendTo($('#roll-num2'));
    },

    // movePlayer: ()=>{
    //   const $clone = $player.clone(true).appendTo($('.square').eq(newPlace));
    //   $clone.hide();
    //   $player.css('position', 'absolute').animate(()=>{
    //     $player.hide('slow');
    //     $clone.show('slow');
    //   })
    // },

    // movePlayer: ()=>{
    //   for(i = 1; i < randNum; i++){
    //     $player.clone(true).css('display', 'none').appendTo($('.square').eq(prevPlace + i)).show('slow').hide('slow').delay(2000)
    //   }
    //   $player.appendTo($('.square').eq(newPlace));
    // },

    battle: ()=>{

    },

    // roll a random number for Player 1
    roll: ()=>{
      // generate random number between 1 and 5
      randNum = Math.floor(Math.random() * 5 + 1);
      functions.writeRoll();
      newPlace = prevPlace + randNum;
      // move the player to the new square (previous location plus random number rolled)
      $player.appendTo($('.square').eq(newPlace));
      // functions.movePlayer();
      prevPlace = newPlace;
      // win logic
      if(newPlace >= boardArr.length){
        $player.appendTo($('.square').eq(boardArr.length - 1));
        console.log('Player 1 wins!');
        $rollBtn.prop('disabled', true);
        $rollBtn2.prop('disabled', true);
      } else if(newPlace > 0 && newPlace === prevPlace2){
        // console.log('same spot');
        const shallWeDual = prompt('You\'ve caught up to your opponent. You can knock down a display to try to slow them down, or nod and carry on. What will you do?', 'knock display down / nod');
        if (shallWeDual === 'knock display down'){
          console.log('knocked down display');
        } else {
          console.log('what a whimp');
        }
      }
    },

    // roll a random number for Player 2
    roll2: ()=>{
      // generate random number between 1 and 5
      randNum2 = Math.floor(Math.random() * 5 + 1);
      functions.writeRoll2();
      newPlace2 = prevPlace2 + randNum2;
      // move the player to the new square (previous location plus random number rolled)
      $player2.appendTo($('.square').eq(newPlace2));
      prevPlace2 = newPlace2;
      // win logic
      if(newPlace2 >= boardArr.length){
        $player2.appendTo($('.square').eq(boardArr.length - 1));
        console.log('Player 2 wins!');
        $rollBtn.prop('disabled', true);
        $rollBtn2.prop('disabled', true);
      } else if(newPlace2 > 0 && newPlace2 === prevPlace){
        console.log('same spot 2');
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

  // event handlers
  $closeLoadBtn.on('click', functions.onLoadClose);
  $instructionsBtn.on('click', functions.instructionsOpen);
  $closeInstBtn.on('click', functions.instructionsClose);
  $startBtn.on('click', functions.start);
  $rollBtn.on('click', functions.roll);
  $rollBtn2.on('click', functions.roll2);
  $resetBtn.on('click', functions.resetGame);

});
