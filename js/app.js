// console.log($);

$(()=>{

  const boardArr = [];
  const $modalBkgrd = $('#modal-bkgrd');
  const $modalWin = $('#modal-win');
  const $modalDelay = $('#modal-delay');
  const $modalPropel = $('#modal-propel');
  const $square = $('.square');
  const $player = $('<img>').attr('src', 'css/images/shopping-cart-hi.png').addClass('player');
  const $player2 = $('<img>').attr('src', 'css/images/shopping-cart-wh.png').addClass('player');
  const $closeLoadBtn = $('#close-load-btn');
  const $instructionsBtn = $('#instructions');
  const $closeInstBtn = $('#close-inst-btn');
  const $startBtn = $('#start');
  const $rollBtn = $('#roll').prop('disabled', true);
  const $resetBtn = $('#reset').prop('disabled', true);
  const $rollBtn2 = $('#roll2').prop('disabled', true);
  const $playAgainBtn = $('#play-again');
  const delayArr = [
    {
      delayName: ' slipped on spilled milk.',
      delayHit: 1
    },
    {
      delayName: '\'re trapped by a family blocking the aisle.',
      delayHit: 3
    },
    {
      delayName: '\'re blocked by a clerk stocking shelves.',
      delayHit: 2
    }
  ];
  let newPlace;
  let newPlace2;
  let randNum;
  let randNum2;
  let prevPlace = 0;
  let prevPlace2 = 0;

  const createGameBoard = ()=>{
    // creates the board divs
    for(i = 0; i <= 29; i++){
      const $div = $('<div>').attr('class', 'square').attr('id', i).appendTo('#game-board');
      boardArr.push($div);
    };
    $('.square').eq(boardArr.length - 1).css('background', 'url("css/images/cake-transp.png")').css('background-size', 'cover');
    $('.square').eq(0).css('background', 'url("css/images/doors.png")').css('background-size', 'cover');
    // console.log(boardArr);
  };

  // ===========
  // FUNCTIONS
  // ===========


  const functions = {

    displayModalBkgrd: ()=>{
      $modalBkgrd.css('display', 'flex');
      $modalBkgrd.children().hide();
    },

    hideModalBkgrd: ()=>{
      $modalBkgrd.hide();
    },

    onLoadClose: ()=>{
      // closes the on laod modal
      $modalBkgrd.css('display', 'none');
      $('#modal-on-load').css('display', 'none');
    },

    instructionsOpen: ()=>{
      // opens the instructions modal
      // $('#modal-inst-bkgrd').css('display', 'block');
      $modalBkgrd.css('display', 'flex');
      $('#modal-instructions').css('display', 'flex');
    },

    instructionsClose: ()=>{
      // closes the instructions modal
      // $('#modal-inst-bkgrd').css('display', 'none');
      $modalBkgrd.css('display', 'none');
      $('#modal-instructions').css('display', 'none');
    },

    start: ()=>{
      // starting state for gameboard
      $startBtn.prop('disabled', true);
      $rollBtn.prop('disabled', false);
      $rollBtn2.prop('disabled', false);
      $resetBtn.prop('disabled', false);
      $player.appendTo($('.square').eq(0));
      $player2.appendTo($('.square').eq(0));
    },

    winPlayer1: ()=>{
      $player.appendTo($('.square').eq(boardArr.length - 1));
      $modalWin.find('h2').text('Player 1 Wins!');
      $modalWin.find('p').text('Player 1 takes the cake. Better luck next time, Player 2.');
      functions.displayModalBkgrd();
      $modalWin.css('display', 'flex');
      $rollBtn.prop('disabled', true);
      $rollBtn2.prop('disabled', true);
    },

    winPlayer2: ()=>{
      $player2.appendTo($('.square').eq(boardArr.length - 1));
      $modalWin.find('h2').text('Player 2 Wins!');
      $modalWin.find('p').text('Player 2 takes the cake. Better luck next time, Player 1.');
      functions.displayModalBkgrd();
      $modalWin.css('display', 'flex');
      $rollBtn.prop('disabled', true);
      $rollBtn2.prop('disabled', true);
    },

    writeRoll: ()=>{
      // display the number rolled by Player 1 in the player's console
      $('#roll-num').empty();
      $('<p>').text(randNum).appendTo($('#roll-num'));
    },

    writeRoll2: ()=>{
      // display the number rolle by Player 2 in the player's console
      $('#roll-num2').empty();
      $('<p>').text(randNum2).appendTo($('#roll-num2'));
    },

    delayPlayer1: ()=>{
      const randI = Math.floor(Math.random() * 3);
      // console.log(delayArr[randI].delayName);
      // alert('Move back ' + delayArr[randI].delayHit);
      $modalDelay.find('h2').text('You' +  delayArr[randI].delayName);
      $modalDelay.find('p').text('Move back ' + delayArr[randI].delayHit + ' spots.');
      functions.displayModalBkgrd();
      $modalDelay.css('display', 'flex');
      setTimeout(functions.hideModalBkgrd, 2000);
      newPlace = newPlace - delayArr[randI].delayHit;
      $player.appendTo($('.square').eq(newPlace));
      $rollBtn.prop('disabled', true);
      $rollBtn2.prop('disabled', false);
    },

    delayPlayer2: ()=>{
      const randI = Math.floor(Math.random() * 3);
      // console.log(delayArr[randI].delayName);
      // alert('Move back ' + delayArr[randI].delayHit);
      $modalDelay.find('h2').text('You' +  delayArr[randI].delayName);
      $modalDelay.find('p').text('Move back ' + delayArr[randI].delayHit + ' spots.');
      functions.displayModalBkgrd();
      $modalDelay.css('display', 'flex');
      setTimeout(functions.hideModalBkgrd, 2000);
      newPlace2 = newPlace2 - delayArr[randI].delayHit;
      $player2.appendTo($('.square').eq(newPlace2));
      $rollBtn2.prop('disabled', true);
      $rollBtn.prop('disabled', false);
    },

    propelPlayer1: ()=>{
      // console.log('You found the Red Bull aisle! Move forward an extra 3 spots!');
      $modalPropel.find('h2').text('You found the energy drink aisle!');
      $modalPropel.find('p').text('Sprint forward 3 spots.');
      functions.displayModalBkgrd();
      $modalPropel.css('display', 'flex');
      setTimeout(functions.hideModalBkgrd, 2000);
      newPlace += 3;
      $player.appendTo($('.square').eq(newPlace));
      $rollBtn.prop('disabled', true);
      $rollBtn2.prop('disabled', false);
    },

    propelPlayer2: ()=>{
      // console.log('You found the Red Bull aisle! Move forward an extra 3 spots!');
      $modalPropel.find('h2').text('You found the energy drink aisle!');
      $modalPropel.find('p').text('Sprint forward 3 spots.');
      functions.displayModalBkgrd();
      $modalPropel.css('display', 'flex');
      setTimeout(functions.hideModalBkgrd, 2000);
      newPlace2 += 3;
      $player2.appendTo($('.square').eq(newPlace2));
      $rollBtn2.prop('disabled', true);
      $rollBtn.prop('disabled', false);
    },

    battle: ()=>{
      const shallWeDual = prompt('You\'ve caught up to Player 2. You can knock down a display to try to slow them down, or nod and carry on. What will you do?', 'knock display down / nod');
      if (shallWeDual === 'knock display down'){
        // console.log('knocked down display');
        const randNumDual = Math.floor(Math.random() * 10 + 1);
        console.log(randNumDual);
        if (randNumDual > 4){
          console.log('You tripped Player 2! You get to take their next roll');
          $rollBtn.prop('disabled', false);
          $rollBtn2.prop('disabled', true);
        } else {
          console.log('They were too fast to trip!');
          $rollBtn.prop('disabled', true);
          $rollBtn2.prop('disabled', false);
        }
      } else {
        console.log('what a whimp');
        $rollBtn.prop('disabled', true);
        $rollBtn2.prop('disabled', false);
      }
    },

    battle2: ()=>{
      const shallWeDual = prompt('You\'ve caught up to Player 1. You can knock down a display to try to slow them down, or nod and carry on. What will you do?', 'knock display down / nod');
      if (shallWeDual === 'knock display down'){
        // console.log('knocked down display');
        const randNumDual = Math.floor(Math.random() * 10 + 1);
        console.log(randNumDual);
        if (randNumDual > 4){
          console.log('You tripped Player 1! You get to take their next roll');
          $rollBtn.prop('disabled', true);
          $rollBtn2.prop('disabled', false);
        } else {
          console.log('They were too fast to trip!');
          $rollBtn.prop('disabled', false);
          $rollBtn2.prop('disabled', true);
        }
      } else {
        console.log('what a whimp');
        $rollBtn.prop('disabled', false);
        $rollBtn2.prop('disabled', true);
      }
    },

    ifStatements: ()=>{
      // win logic
      if(newPlace >= boardArr.length - 1){
        functions.winPlayer1();
      } else if(newPlace > 0 && newPlace === newPlace2){
        console.log('same spot');
        functions.battle();
      } else if (newPlace % 5 === 0){
        setTimeout(functions.delayPlayer1(), 800);
      } else if (newPlace === 18){
        setTimeout(functions.propelPlayer1(), 800);
      } else {
        $rollBtn.prop('disabled', true);
        $rollBtn2.prop('disabled', false);
      }
    },

    ifStatements2: ()=>{
      // win logic
      if(newPlace2 >= boardArr.length - 1){
        functions.winPlayer2();
      } else if(newPlace2 > 0 && newPlace2 === newPlace){
        console.log('same spot 2');
        functions.battle2();
      } else if (newPlace2 % 5 === 0){
        setTimeout(functions.delayPlayer2, 800);
      } else if (newPlace2 === 18){
        setTimeout(functions.propelPlayer2, 800);
      } else {
        $rollBtn2.prop('disabled', true);
        $rollBtn.prop('disabled', false);
      }
    },

    // roll a random number for Player 1
    roll: ()=>{
      // generate random number between 1 and 5
      randNum = Math.floor(Math.random() * 5 + 1);
      functions.writeRoll();
      newPlace = prevPlace + randNum;
      // move the player to the new square (previous location plus random number rolled)
      // setTimeout gives time for the rolled number to show before moving
      setTimeout(function(){
        $player.appendTo($('.square').eq(newPlace));
      }, 600);
      // functions.movePlayer();
      prevPlace = newPlace;
      setTimeout(function(){
        functions.ifStatements();
      }, 1000);
    },

    // roll a random number for Player 2
    roll2: ()=>{
      // generate random number between 1 and 5
      randNum2 = Math.floor(Math.random() * 5 + 1);
      functions.writeRoll2();
      newPlace2 = prevPlace2 + randNum2;
      // move the player to the new square (previous location plus random number rolled)
      // setTimeout gives time for the rolled number to show before moving
      setTimeout(function(){
        $player2.appendTo($('.square').eq(newPlace2));
      }, 600);
      prevPlace2 = newPlace2;
      setTimeout(function(){
        functions.ifStatements2();
      }, 1000);
    },

    resetGame: ()=>{
      // console.log('hiii - RESET INITIATED');
      $('.square').empty();
      $('#roll-num').empty();
      $('#roll-num2').empty();
      prevPlace = 0;
      prevPlace2 = 0;
      $rollBtn.prop('disabled', true);
      $rollBtn2.prop('disabled', true);
      $resetBtn.prop('disabled', true);
      $startBtn.prop('disabled', false);
    },

    playAgain: ()=>{
      $modalBkgrd.css('display', 'none');
      functions.resetGame();
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
  $playAgainBtn.on('click', functions.playAgain)

});
