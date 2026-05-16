// グーを押した時
$("#gu-btn").on("click", function(){
     $("#player_hands").html("✊"); 
    var num = Math.floor(Math.random() * 3);
    var pc = "";

    if (num === 0) { pc = "✊"; }
    else if (num === 1) { pc = "✌"; }
    else if (num === 2) { pc = "🖐️"; }

    $("#pc_hands").html(pc);

    if (pc === "✊") {
        $("#judgement").html("あいこ");
    } else if (pc === "✌") {
        $("#judgement").html("勝ち！");
    } else if (pc === "🖐️") {
        $("#judgement").html("負け...");
    }
});

// チョキを押した時
$("#sc-btn").on("click", function(){
     $("#player_hands").html("✌"); 
    var num = Math.floor(Math.random() * 3);
    var pc = "";

    if (num === 0) { pc = "✊"; }
    else if (num === 1) { pc = "✌"; }
    else if (num === 2) { pc = "🖐️"; }

    $("#pc_hands").html(pc);

    if (pc === "✊") {
        $("#judgement").html("負け...");
    } else if (pc === "✌") {
        $("#judgement").html("あいこ");
    } else if (pc === "🖐️") {
        $("#judgement").html("勝ち！");
    }
});

// パーを押した時
$("#pa-btn").on("click", function(){
     $("#player_hands").html("🖐️"); 
    var num = Math.floor(Math.random() * 3);
    var pc = "";

    if (num === 0) { pc = "✊"; }
    else if (num === 1) { pc = "✌"; }
    else if (num === 2) { pc = "🖐️"; }

    $("#pc_hands").html(pc);

    if (pc === "✊") {
        $("#judgement").html("勝ち！");
    } else if (pc === "✌") {
        $("#judgement").html("負け...");
    } else if (pc === "🖐️") {
        $("#judgement").html("あいこ");
    }
});