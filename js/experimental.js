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
