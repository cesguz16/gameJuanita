const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const juanita = ["J", "U", "A", "N", "I", "T", "A"];
const blippi = ["B", "L", "I", "P", "P", "I"]

const init_board = (board,word) => {
    console.log(board);
    array_word = [...word];
    array_length =array_word.length
    console.log(array_length);
    let repeat = "repeat(" + array_length + ", 1fr)"
    board.css("grid-template-columns", repeat);
    array_word.forEach(element => {
        console.log(`Elemento: `,element,`abc`);
        let component = ''
        +'<div class="flip-card">'
        +'    <div class="flip-card-inner">'
        +'        <div class="flip-card-front">'
        +'            <span>¿CUAL SERA?</span>'
        +'        </div>'
        +'        <div class="flip-card-back">'
        +'            <h1>'+element+'</h1>'
        +'        </div>'
        +'    </div>'
        +'</div>`';
        let letter = $(component);
        
        board.append(letter);
    });
}

$(document).ready(function () {

    console.log('loaded');
    let board = $('.letters-board');
    init_board(board,"JUANITA");
})
