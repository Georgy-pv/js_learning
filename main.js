document.addEventListener('DOMContentLoaded', function(){

    let div = document.querySelector('.result');



        // Циклы и условия. Замена букв символами
    // let input = "javascript is awesome",
    //     output = "";

    // for(var i = 0; i < input.length; i++){
      
    //     if(input[i]==="a"){
    //         output += "4";
    //     } else if(input[i]==="e"){
    //         output += "3"
    //     } else if(input[i]==="i"){
    //         output += "1"
    //     } else if(input[i]==="o"){
    //         output += "0"
    //     } else {
    //         output += input[i]
    //     }
    // }
    // div.innerHTML = output;





                            // Игра Виселица
//  //---------------------------------------------------------------------------------
 
  
  //   //Выбор случайного слова  
  //   function pickWord(randomWords) {
  //       return randomWords[Math.floor(Math.random() * words.length)]; 
  //   };

  //   // Возвращает итоговый массив из заданного слова
  //   function setupAnswerArray(word) {
  //       let arr = [];
  //       for(var i = 0; i < word.length; i++){
  //          arr[i] = "_"
  //       }
  //       return arr;
  //   };

  //   // Отображает текущее состояние игры
  //   function showPlayerProgress(answer) {
  //       alert(answer.join(" "));
  //   }

  //   // Запрашивает вариант ответа у игрока
  //   function getGuess() {
  //       return prompt("Угадайте букву или нажмите Отмена для выхода из игры").toLowerCase();
  //   }

  //   //Обновление данных
  //   function updateGameState(guess, word, answerArr) {
  //       for(var j = 0; j < word.length; j++){
  //           if (guess === answerArr[j]) {
  //               alert("Эта буква уже есть"); 
  //           } else if(word[j] === guess){
  //               answerArr[j] = guess;
  //               remainingLetters--;
  //           }
  //       }
  //       attempt--;
  //       return remainingLetters;
  //   }

  //   // Поздравление или поражение. Итог
  //   function showAnswerAndCongratulatePlayer() {
  //         alert(answerArr.join(" "));
  //           // Проверка попыток
  //           if (attempt > 0){
  //               alert(`Отлично! Было угадано слово ${word}`);
  //           } else {
  //               alert(`К сожалению, вы проиграли, это было слово ${word}`);
  //           }
  //   }

  //   // Загаданное слово
  //   let words = ["программа", "компьютер", "борщ", "макака", "учёба", "университет"],  // Массив слов
  //       word = pickWord(words);

  //   // Массив с ответом
  //   let answerArr = setupAnswerArray(word);
    
  //           // свётчик правильных ответов
  //   let remainingLetters = word.length,
  //       //попытки
  //       attempt = word.length + 6;  
         


  //   // Игровой массив
  //   while(remainingLetters > 0 && attempt > 0){
  //       showPlayerProgress(answerArr);

  //       // Запрос варианта ответа
  //       let guess = getGuess();
  //       if (guess === null){
  //           break;  // Выход из игры
  //       } else if (guess.length !== 1){
  //           alert("Введите одну букву");
  //       } else {
  //           // Обновление состояния игры
  //           let correctGuesses = updateGameState(guess, word, answerArr);
  //       }
  //   }  

  // showAnswerAndCongratulatePlayer();

  //            // КОНЕЦ кода игры;

  // //---------------------------------------------------------------------------------
   


                                //АНИМАЦИИ
  //   //-----------------------------------------------------------------------------------


  // let myFriend = ["Люся", "Катя", "Маша", "Вика"];
  //   $('#title').text("Мои друзья");
  //   for(var i = 0; i < myFriend.length; i++){

  //   $('body').append(`<p> ${myFriend[i]} </p>`);
  // };
  //   $('p').hide();
  //   $('p').fadeIn(5000);
  //   $('p').append("Лучший!");
    
  //   for(var j = 0; j < 5; j++){
  //       $('#title').fadeOut(500).fadeIn(500);
  //   }

  //   $('#title').fadeOut(500).delay(5000).fadeIn(500);
  //   $('#title').fadeTo(3000, 0.1)

  //   //-----------------------------------------------------------------------------------



                                // СОБЫТИЯ
    //    //-----------------------------------------------------------------------------------
    // let topOffset = 200,
    //     rightOffset = 0,
    //     bottomOffset = 0,
    //     leftOffset = 200;

    // function move() {
    //     $('#title').offset({top: bottomOffset})
    //     bottomOffset++;
    //     if (bottomOffset > 200) {
    //         $('#title').offset({
    //              top: 200,
    //             left: rightOffset
    //         })
    //         rightOffset++;
    //     }
    //     if(rightOffset > 200){
    //         $('#title').offset({
    //             left: 200,
    //             top: topOffset
    //         })
    //         topOffset--;
    //     }
    //     if (topOffset < 0) {
    //         $('#title').offset({
    //             top: 0,
    //             left: leftOffset
    //         })
    //         leftOffset--;
    //     }
    //     if (leftOffset < 0) {
    //         bottomOffset = 0;
    //         $('#title').offset({
    //             left: 0,
    //             top: 0
    //         });
    //     }
    // }

    // let moveAnimation = setInterval(move, 5);
    // let count = 1;


    // $('#title').click(function() {
    //     // clearInterval(moveAnimation);
    //     // let fast = setInterval(move, 10);
    //     console.log(`Вы кликнули по заголовку раз: ${count++}`);
    //     if(count > 10){
    //         $('#title').text('Вы победили!')
    //         // clearInterval(fast);
    //         clearInterval(moveAnimation);
    //     }
    // });


    // -----------------------------------------------------------------------------------



                         // Объектно-Ориентировочное Программирование
    // -----------------------------------------------------------------------------------


    let speak = function () {
        div.innerHTML += `${this.sound}! Меня зовут ${this.name}!`
    };

    let dog = {
      name: "Lucky",
      age: 6,
      sound: "Гав",
      speak: speak
    };

    let cat = {
      name: "Пушистик",
      age: 4,
      sound: "Мяу",
      speak: speak
    };

    
    cat.speak();
    dog.speak();



});