// =============
// Stuff I'm thinking about and don't want to lose in case it's useful later
// =============

$(()=>{

  const boardArr = [
    [],
    [],
    [],
    [],
    []
  ];

  // const createGameBoard = ()=>{
  //   for(i = 0; i <= 4; i++){
  //     boardArr.push(i);
  //     const $div = $('<div>').attr('class', 'square').appendTo('#game-board');
  //   };
  //         console.log(boardArr);
  // };
  //


  // testing forEach

  const createGameBoard = ()=>{
      boardArr.forEach(()=>{
        for(i = 0; i < 4; i++){
          const $div = $('<div>').attr('class', 'square').appendTo('#game-board');
        }
      });
    };
    console.log(boardArr);

});


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


    $(()=>{

      const boardArr = [];
      const $square = $('.square');
      let $player1 = $('<img>').attr('src', 'https://png.pngtree.com/element_pic/17/01/04/4a21813fa12293173cb5fbfbc0157339.jpg').addClass('player').addClass('player1');
      let $player2 = $('<img>').attr('src', 'https://vignette.wikia.nocookie.net/disney/images/a/a5/Bruce-FN.png/revision/latest?cb=20131111065729').addClass('player').addClass('player2');
      const $closeLoadBtn = $('#close-load-btn');
      const $instructionsBtn = $('#instructions');
      const $closeInstBtn = $('#closeInstBtn');
      const $startBtn = $('#start');
      const $rollBtn = $('#roll').prop('disabled', true);
      const $resetBtn = $('#reset').prop('disabled', true);
      const $rollBtn2 = $('#roll2').prop('disabled', true);
      const delayArr = [
        {
          delayName: 'banana',
          delayHit: 1
        },
        {
          delayName: 'family blocking aisle',
          delayHit: 3
        },
        {
          delayName: 'clerk stocking shelves',
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
        for(i = 0; i <= 49; i++){
          const $div = $('<div>').attr('class', 'square').attr('id', i).appendTo('#game-board');
          boardArr.push($div);
          $player1.clone().appendTo($div).hide();
          $player2.clone().appendTo($div).hide();
        };
        // console.log(boardArr);
      };


      // ===========
      // Testing adding class to div instead of appending player
      // ===========


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
          // console.log($square.eq(0).children());
          // $square.eq(0).children().show('slow');
          // $square.eq(0).children().show('slow');
          $('.square').eq(0).children().show('slow');
        },

        winPlayer1: ()=>{
          $('.square').eq(newPlace).children('.player1').hide();
          $('.square').eq(boardArr.length - 1).children('.player1').show('slow');
          console.log('Player 1 wins!');
          $rollBtn.prop('disabled', true);
          $rollBtn2.prop('disabled', true);
        },

        winPlayer2: ()=>{
          $('.square').eq(newPlace2).children('.player2').hide();
          $('.square').eq(boardArr.length - 1).children('.player1').show('slow');
          console.log('Player 2 wins!');
          $rollBtn.prop('disabled', true);
          $rollBtn2.prop('disabled', true);
        },

        writeRoll: ()=>{
          // display the number rolled by Player 1 in the player's console
          // $('#roll-num').empty();
          $('<h3>').text(randNum).appendTo($('#roll-num'));
        },

        writeRoll2: ()=>{
          // display the number rolle by Player 2 in the player's console
          // $('#roll-num2').empty();
          $('<h3>').text(randNum2).appendTo($('#roll-num2'));
        },

        delayPlayer1: ()=>{
          const randI = Math.floor(Math.random() * 2);
          console.log(delayArr[randI].delayName);
          alert('Move back ' + delayArr[randI].delayHit);
          newPlace = newPlace - delayArr[randI].delayHit;
          $('.square').eq(prevPlace).children('.player1').hide();
          $('.square').eq(newPlace).children('.player1').show('slow');
          $rollBtn.prop('disabled', true);
          $rollBtn2.prop('disabled', false);
        },

        delayPlayer2: ()=>{
          const randI = Math.floor(Math.random() * 2);
          console.log(delayArr[randI].delayName);
          alert('Move back ' + delayArr[randI].delayHit);
          newPlace2 = newPlace2 - delayArr[randI].delayHit;
          $('.square').eq(prevPlace2).children('.player2').hide();
          $('.square').eq(newPlace2).children('.player2').show('slow');
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

        // roll a random number for Player 1
        roll: ()=>{
          // generate random number between 1 and 5
          randNum = Math.floor(Math.random() * 5 + 1);
          functions.writeRoll();
          newPlace = prevPlace + randNum;
          // move the player to the new square (previous location plus random number rolled)
          // setTimeout gives time for the rolled number to show before moving
          $('.square').eq(prevPlace).children('.player1').hide();
          setTimeout(function(){
            $('.square').eq(newPlace).children('.player1').show('slow');
          }, 800);
          // functions.movePlayer();
          prevPlace = newPlace;
          // win logic
          if(newPlace >= boardArr.length - 1){
            functions.winPlayer1();
          } else if(newPlace > 0 && newPlace === prevPlace2){
            // console.log('same spot');
            functions.battle();
          } else if (newPlace2 % 3 === 0 || newPlace2 % 5 === 0){
            setTimeout(functions.delayPlayer1(), 800);
          }else {
            $rollBtn.prop('disabled', true);
            $rollBtn2.prop('disabled', false);
          }
        },

        // roll a random number for Player 2
        roll2: ()=>{
          // generate random number between 1 and 5
          randNum2 = Math.floor(Math.random() * 5 + 1);
          functions.writeRoll2();
          newPlace2 = prevPlace2 + randNum2;
          // move the player to the new square (previous location plus random number rolled)
          // setTimeout gives time for the rolled number to show before moving
          $('.square').eq(prevPlace2).children('.player2').hide();
          setTimeout(function(){
            $('.square').eq(newPlace2).children('.player2').show('slow');
          }, 800);
          prevPlace2 = newPlace2;
          // win logic
          if(newPlace2 >= boardArr.length - 1){
            functions.winPlayer2();
          } else if(newPlace2 > 0 && newPlace2 === prevPlace){
            // console.log('same spot 2');
            functions.battle2();
          } else if (newPlace2 % 3 === 0 || newPlace2 % 5 === 0){
            setTimeout(functions.delayPlayer2(), 800);
          } else {
            $rollBtn2.prop('disabled', true);
            $rollBtn.prop('disabled', false);
          }
        },

        resetGame: ()=>{
          // console.log('hiii - RESET INITIATED');
          $('.square').children().hide();
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
