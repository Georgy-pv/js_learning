document.addEventListener('DOMContentLoaded', function(){





                            // Игра Виселица
//  //---------------------------------------------------------------------------------
 
  		// Обозначение canvas
	let canvas = document.getElementById('canvas');
	let ctx = canvas.getContext("2d");
	ctx.lineWidth = 4;

    //Выбор случайного слова  
    function pickWord(randomWords) {
        return randomWords[Math.floor(Math.random() * words.length)]; 
    };

    // Возвращает итоговый массив из заданного слова
    function setupAnswerArray(word) {
        let arr = [];
        for(var i = 0; i < word.length; i++){
           arr[i] = "_"
        }
        return arr;
    };

    // Отображает текущее состояние игры
    function showPlayerProgress(answer) {
        alert(answer.join(" "));
    }

    // Запрашивает вариант ответа у игрока
    function getGuess() {
        return prompt("Угадайте букву или нажмите Отмена для выхода из игры").toLowerCase();
    }

    //Обновление данных
    function updateGameState(guess, word, answerArr) {
        for(var j = 0; j < word.length; j++){
            if (guess === answerArr[j]) {
                alert("Эта буква уже есть");
            } else if(word[j] === guess){
                answerArr[j] = guess;
                remainingLetters--;
            }
        }
        return remainingLetters;
    }

    // Поздравление или поражение. Итог
    function showAnswerAndCongratulatePlayer() {
          alert(answerArr.join(" "));
            // Проверка попыток
            if (lives === 0){
            	alert(`К сожалению, вы проиграли, это было слово ${word}`);
            } else if (remainingLetters === 0){
                alert(`Отлично! Было угадано слово ${word}`);
            }
    }

    // Загаданное слово
    let words = ["программа", "компьютер", "борщ", "макака", "учёба", "университет"],  // Массив слов
        word = pickWord(words);

    // Массив с ответом
    let answerArr = setupAnswerArray(word);
    
            // свётчик правильных ответов
    let remainingLetters = word.length;

        //попытки
    let newRemainingLetters = remainingLetters;
    let lives = 6;

         
    // Игровой массив
    while((remainingLetters > 0) && (lives !== 0)){
        showPlayerProgress(answerArr);

        // Запрос варианта ответа
        let guess = getGuess();
        if (guess === null){
            break;  // Выход из игры
        } else if (guess.length !== 1){
            alert("Введите одну букву");
        } else {
            // Обновление состояния игры
            let correctGuesses = updateGameState(guess, word, answerArr);
        }

        if(remainingLetters === newRemainingLetters){
        	lives--;
        		// Отрисовка человечка
        		if (lives == 5) {
        			//голова
                	ctx.strokeRect(100, 10, 40, 40);
                };
                if (lives == 4) {
                	//туловище
                	ctx.beginPath();
					ctx.moveTo(120, 50);
					ctx.lineTo(120, 180);
					ctx.stroke();
                } 
                if (lives == 3) {
                	//левая рука
                	ctx.beginPath();
					ctx.moveTo(120, 80);
					ctx.lineTo(70, 48);
					ctx.stroke();
                }
                if (lives == 2) {
                	//правая рука
                	ctx.beginPath();
					ctx.moveTo(120, 80);
					ctx.lineTo(170, 48);
					ctx.stroke();
                }  
                if (lives == 1) {
                	//левая нога
                	ctx.beginPath();
					ctx.moveTo(120, 179);
					ctx.lineTo(70, 240);
					ctx.stroke();
                }
                if (lives == 0) {
                	//правая нога
                	ctx.beginPath();
					ctx.moveTo(120,179);
					ctx.lineTo(170, 240);
					ctx.stroke();
                }
        }
        newRemainingLetters = remainingLetters;
    }  

 
  showAnswerAndCongratulatePlayer();

             // КОНЕЦ кода игры;


});








 // mistakes++;
     //            if (mistakes == 1) {
     //            	ctx.strokeRect(100, 10, 40, 40);
     //            };
     //            if (mistakes == 2) {
     //            	ctx.beginPath();
					// 	//туловище
					// ctx.moveTo(120, 50);
					// ctx.lineTo(120, 180);
					// ctx.stroke();
     //            } 
     //            if (mistakes == 3) {
     //            	ctx.beginPath();
					// ctx.moveTo(120, 80);
					// ctx.lineTo(70, 48);
					// ctx.stroke();
     //            }
     //            if (mistakes == 4) {
     //            	ctx.beginPath();
					// ctx.moveTo(120, 80);
					// ctx.lineTo(170, 48);
					// ctx.stroke();
     //            }  
     //            if (mistakes == 5) {
     //            	ctx.beginPath();
					// ctx.moveTo(120, 179);
					// ctx.lineTo(70, 240);
					// ctx.stroke();
     //            }
     //            if (mistakes == 6) {
     //            	ctx.beginPath();
					// ctx.moveTo(120,179);
					// ctx.lineTo(170, 240);
					// ctx.stroke();
     //            }