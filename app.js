

// じゃんけんのシステム
// 分岐① 入力されたものがグーチョキパーかそれ以外か？
// グーチョキパーとキャンセルのいずれか→続きの処理にいく
// いずれでもない場合、while文でalertの表示と入力フォームを再表示する。繰り返し処理
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);

// 結果の分岐→処理の結果勝ち負けを表示する or キャンセルの場合の出力処理を記述
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

function getJShand(){
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand;
  if (js_hand_num == 0){
    hand = "グー";
  } else if (js_hand_num == 1){
    hand = "チョキ";
  } else if (js_hand_num == 2){
    hand = "パー";
  }
  return hand;
}


// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;
  if (user == "グー"){
    if (js == "グー"){
      winLoseStr = "あいこ";
    } else if (js == "チョキ"){
      winLoseStr = "勝ち";
    } else if (js == "パー"){
      winLoseStr = "負け";
    }
  } else if (user == "チョキ"){
    if (js == "グー"){
      winLoseStr = "負け";
    } else if (js == "チョキ"){
      winLoseStr = "あいこ";
    } else if (js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if (user == "パー"){
    if (js == "グー"){
      winLoseStr = "勝ち";
    } else if (js == "チョキ"){
      winLoseStr = "負け";
    } else if (js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}

// じゃんけんの手をランダムに選択する関数を追加していく
// function getJShand(){
//   let js_hand_num = Math.floor( Math.random() * 3);

//   if(js_hand_num == 0){
//     js_hand = "グー";
//   } else if(js_hand_num == 1){
//     js_hand = "チョキ";
//   } else if(js_hand_num == 2){
//     js_hand = "パー";
//   }

//   return js_hand;
// }


// 複数の関数を定義する
// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// alert('あなたの選んだ手は' + user_hand + 'です');




// 入力ダイアログで値を入力してもらう
// let promptStr = prompt('何か好きな文字を入力してください。');

// alert(promptStr);


// 関数：簡単な引数を記述してみる
// let alertString;

// alertString = addString("WebCamp");
// alert(alertString);

// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr
// }

// 繰り返し処理 for文→繰り返し処理の回数を決める
// let i;
// let num = 0;
// let limit = 500

// for(i = 1; i < limit; i++){
//   num = num + i;
// }

// alert ('1から' + limit + 'まで足し算した結果は' + num + 'です');

// 繰り返し処理 while文→trueである限り処理を実行し続ける
// let max = 1000;
// let num = 1;
// let count = 0;

// while (num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// 条件分岐を使って出力までしてみる
// let orange = 30000;
// let apple = 120;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// } else if (orange == apple){
//   alert('みかんとりんごは同じ値段');
// } else {
//   alert('みかんの値段がりんごより高い');
// }

// 変数を利用して、変数同士を連結させて文字列を表示する
// let word1 = 'You are ';
// let word2 = 'Amazing!!';
// alert(word1 + word2);

// 文字列を連結させてみる
// alert('Hello' + ' World');

// 変数に計算結果を入れて出力してみる
// let cal = (8 + 3);
// alert(cal)

// 四則計算で結果を表示する
// alert(8 + 3);
// alert(8 * 5);
// alert(8 / 4);
// alert(2*6);


// 足し算をしてくれる
// alert(4 + 3);

// 文字列を代入して、変数として処理→文字列を表示する
// let word = 'Congraturation!! You hava amazing skill!';
// alert(word);

// // 変数の代入練習
// let int1 = 1;
// alert(int1);

// let int2 = 2;
// alert(int2);

// let int3 = 3;
// alert(int3);

// let str1 = 'Javascriptを覚えよう';

// 変数代入と出力する
// let int1 = 1;
// alert(int1)

// let hello = 'Hello World';
// alert(hello);

// 任意のものをアラートとして表示してくれる機能 alert( )
// alert('Hello World');
