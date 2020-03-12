var current = 0
var x = 0
var y = 0
var speed = 100
var speed2 = 2000

function initArray(n) {
this.length = n;
for (var i =1; i <= n; i++) {
this[i] = &apos; &apos;
}
}

typ = new initArray(4)
typ[0]="Tüm Turlarımızda Erken Rezervasyon şansı 31 Mart'a kadar devam ediyor"
typ[1]="dsadsadsdads"
typ[2]="fsafd"
typ[3]="asdsadsadasddsagfdgdsad"

function typnslide() {
var m = typ[current]

window.status = m.substring(0, x++)

if (x == m.length + 1) {
x = 0

setTimeout("typnslide2()", speed2)
}

else {
setTimeout("typnslide()", speed)
}
}

function typnslide2() {
var m = typ[current]

window.status = m.substring(m.length, y++)

if (y == m.length) {
y = 0
current++

if (current > typ.length - 1) {
current = 0
}
setTimeout("typnslide()", speed)
}

else{
setTimeout("typnslide2()", speed)
}
}

typnslide();
