document.getElementById("speakButton").addEventListener("click", function() {
       const text = "ずんだが大好きなのだ！"; // 読み上げるテキストの内容
       const speech = new SpeechSynthesisUtterance(text); // 読み上げるためのオブジェクトを作る
       speechSynthesis.speak(speech); // 音声を再生する
   });