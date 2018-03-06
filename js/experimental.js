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
