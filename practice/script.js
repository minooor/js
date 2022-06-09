//円盤の枚数をn
//三本の柱をA,B,Cとする

const n = 5;
Hanoi(n, "A", "B", "C");

function Hanoi(n, A, B, C) {
    if(n >= 1) {
        Hanoi(n-1, A, C, B);
        console.log(n + "を" + A + "から" + B + "へ移動");
        Hanoi(n-1, C, B, A);
    }
}
