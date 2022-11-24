for (let i = 0;  i<=50;  i++) {
    console.log(i);

    if(i % 10 === 0) {
        console.log(`今${i}回ループしました。`)
    }else if (i % 4 === 0) {
        console.log(`4で割れる数字です。` + [i])
    }
}

alert("50回カウントが終わりました。")
