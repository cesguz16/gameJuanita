let selected_item = null;
const level = 4;
const color = ['red', 'orange', 'yellow', 'green', "blue", "purple", "brown", "pink"];
const colors = [{ id: 0, color: "red" }
    , { id: 1, color: "orange" }
    , { id: 2, color: "yellow" }
    , { id: 3, color: "green" }
    , { id: 4, color: "blue" }
    , { id: 5, color: "purple" }
    , { id: 6, color: "brown" }
    , { id: 7, color: "pink" }]

var selected = null;


const jugar = () => {
    
    console.log("jugar fuera");
    let board = $('.board');
    board.empty();
    
    let name = $("#name").val();
    let level = $("#level").val();
    console.log('level:', level);
    let hg = 90 / level;
    let height = hg + "vh";
    let repeat = "repeat(" + level + ", 1fr)"
    board.css("grid-template-columns", repeat);
    board.css("grid-template-rows", repeat);

    let board_size = level * level;
    let size = board_size / 2;
    
    let colors = shuffle_colors(size);
    
    colors.forEach(element => {
        let item = $("<div class='square'></div>");
        item.css("background-color", element.color);
        item.css("height", height);
        board.append(item);
        item.on('click', () => {
            move(item, element);
            
        });
    });
    board.show();
}

const move = (item, current) => {
    console.log(selected);
    console.log(current);
    if (selected == null){
        console.log('Primera opción');
        item.css("border", "1px solid purple");
        selected={color: current, item:item};
    }
    else if(selected.color.color === current.color && selected.item !== item){
        console.log('COLORES IGUALES');
        alert('equals!!! 😀');
        item.css("background-color", "transparent");
        selected.item.css("background-color", "transparent");
        selected.item.css("border", "1px solid white");
        selected = null;
    } else {
        console.log('COLORES DIFERENTES');
        alert('No equals 😢');

        item.css("border", "1px solid white");
        selected.item.css("border", "1px solid white");
        selected = null;
    }
}

const shuffle_colors = (size) => {
    let sorted = colors.sort((a, b) => {
        return 0.5 - Math.random();
    });
    let group = sorted.slice(0, size);
    let board = group.concat(group);

    return board;
}
$(document).ready(function () {

    console.log('loaded');
    let board = $('.board');
    board.hide();

    $("#play").on("click", jugar);

    /*
    const items = level*level;
    let index = [0,1,2,3,4,5,6,7];
    let index_colours = index.sort((a,b) =>{
        return 0.5 - Math.random();
    });
    console.log(index_colours);
    
    for(i=0; i<items; i++){
        let item = $("<div class='square'></div>");
        let board = $('.board');
        item.on('click',()=>{
            let current_item = item;
            console.log('current_item',current_item.css("background-color"));
            if(selected_item != null && (current_item.css("background-color") === selected_item.css("background-color"))){
                alert('equals!!! 😀');
                console.log('equals colors');
                current_item.css("background-color","transparent");
                selected_item.css("background-color","transparent");
                selected_item.css("border","1px solid white");
                selected_item = null;
            }
            else if(selected_item == null){
                console.log('first option');
                selected_item = current_item;
                item.css("border","1px solid purple");
            } else {
                
                alert('No equals 😢');
                console.log('no equals');
                item.css("border","1px solid white");
                selected_item.css("border","1px solid white");
                current_item.css("border","1px solid white");
                selected_item = null;
            }
            
            
        });
        
        index.forEach(element => {
            item.css("background-color",color[element]);    
        });
        //item.css("background-color",color[j]);
        j++;
        if(j == level*2){
            j=0;
        } 
        board.append(item);
        
    }*/
})

