const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
const canvasOverlay = document.getElementById('tetrisOverlay');
const overlayCtx = canvasOverlay.getContext("2d");
const nextPieceCanvas = document.getElementById('nextPiece');
const nextPieceCtx = nextPieceCanvas.getContext("2d");

//scale up

//work on fixing scale so that 1px = 32px
context.scale(20, 20);
nextPieceCtx.scale(20, 20);
//overlayCtx.scale(3, 3);

function arenaSweep(){
    let rowCount = 1;
    outer: for (let y = arena.length - 1; y > 0; --y){
                for(let x = 0; x < arena[y].length; ++x){
                    if(arena[y][x] === 0){
                        continue outer;
                    };
                };
                const row = arena.splice(y, 1)[0].fill(0);
                arena.unshift(row);
                ++y;

                player.score += rowCount * 10;
                rowCount *= 2;
            };
};

function collide(arena, player){
    const [m, o] = [player.matrix, player.pos];
    for(let y = 0; y < m.length; ++y){
        for(let x = 0; x < m[y].length; ++x){
            if(m[y][x] !== 0 &&
                (arena[y + o.y] &&
                arena[y + o.y][x + o.x]) !== 0){
                return true;
            };
        };
    };
    return false;
};

function createMatrix(w, h){
    const matrix = [];
    while(h--){
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
};

function createPiece(type){
    player.nextPieceType = type;

    if(type === 'T'){
        return [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0]
        ];
    }else if(type === 'O'){
        return [
            [2, 2],
            [2, 2],
        ];
    }else if(type === 'L'){
        return [
            [3, 0, 0],
            [3, 0, 0],
            [3, 3, 0],
        ];
    }else if(type === 'J'){
        return [
            [0, 4, 0],
            [0, 4, 0],
            [4, 4, 0],
        ];
    }else if(type === 'I'){
        return [
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0],
        ];
    }else if(type === 'S'){
        return [
            [0, 0, 0],
            [0, 6, 6],
            [6, 6, 0],
        ];
    }else if(type === 'Z'){
        return [
            [7, 7, 0],
            [0, 7, 7],
            [0, 0, 0],
        ];
    };
};

function draw(){
    //clear canvas
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    nextPieceCtx.clearRect(0, 0, nextPieceCanvas.width, nextPieceCanvas.height);
    //draw arena
    drawMatrix(arena, {x: 0, y: 0});
    drawMatrix(player.matrix, player.pos);
    drawNextPieceMatrix(player.matrix);
    //nextPieceImage(player.pos);
};

function drawMatrix(matrix, offset){
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0){
                context.fillStyle = colors[value];
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            };
        });
    });
};

function drawNextPieceMatrix(matrix){
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0){
                nextPieceCtx.fillStyle = colors[value];
                nextPieceCtx.fillRect(x + 1, y + 1, 1, 1);
            };
        });
    });
};

function merge(arena, player){
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0){
                arena[y + player.pos.y][x + player.pos.x] = value;
            };
        });
    });
};

function nextPiece(){
    //get next pieces
    const pieces = 'ILJOTSZ';
    debugger;
    //generate piece for first time
    if(player.nextPiece === null){
        player.nextPiece = createPiece(pieces[pieces.length *  Math.random() | 0]);
        player.matrix = player.nextPiece;
    } else {
        player.matrix = player.nextPiece;
        player.nextPiece = createPiece(pieces[pieces.length *  Math.random() | 0]);
    }

    //nextPieceImage(player.pos);
};

function nextPieceImage(offset){
    var img = new Image();

    img.src = "img/L1.png";

    img.onload = function(){
        overlayCtx.clearRect(0, 0, canvasOverlay.width, canvasOverlay.height);
        overlayCtx.drawImage(img, (9.25 * offset.x) - 12, (9.25 * offset.y) - 3);
    }; 
};

function smashBlock(arena, player){
    debugger;
    const [m, o] = [player.matrix, player.pos];
    for(let y = 0; y < m.length; ++y){
        for(let x = 0; x < m[y].length; ++x){
            if(m[y][x] !== 0 &&
                (arena[y + o.y] &&
                arena[y + o.y][x + o.x]) !== 0){
                //goal is to set collisions from 1 to 0 and let block go through
                arena[y + o.y][x + o.x].fill(0);
                return true;
            };
        };
    };
    return false;
};

//Transpose + Reverse = Rotate
function rotate(matrix, dir){
    for(let y = 0; y < matrix.length; ++y){
        for(let x = 0; x < y; ++x){
            [
                matrix[x][y],
                matrix[y][x],
            ] = [
                matrix[y][x],
                matrix[x][y]
            ];
        };
    };

    if(dir > 0){
        matrix.forEach(row => row.reverse());
    }else{
        matrix.reverse();
    };

};

function playerDrop(){
    player.pos.y++;
    if(collide(arena, player)){
        player.pos.y--;
        merge(arena, player);
        playerReset();
        arenaSweep();
        updateScore();
    };
    dropCounter = 0;
};

function playerMove(dir){
    player.pos.x += dir;
    if(collide(arena, player)){
        player.pos.x -= dir;
    };
};

function playerReset(){
    nextPiece();
    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) - (player.matrix[0].length / 2 | 0);
    
    //reset if collide at top meaning game over
    if(collide(arena, player)){
        arena.forEach(row => row.fill(0));
        player.score = 0;
        updateScore();
    };
};

function playerRotate(dir){
    const pos = player.pos.x;
    let offset = 1;
    rotate(player.matrix, dir);
    while(collide(arena, player)){
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if(offset > player.matrix[0].length){
            rotate(player.matrix, -dir);
            player.pos.x = pos;
            return;
        };
    };
};

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time = 0){
    const deltaTime = time - lastTime;
    lastTime = time;
    
    dropCounter += deltaTime;
    if(dropCounter > dropInterval){
        playerDrop();
    }

    draw();
    requestAnimationFrame(update);
};

function updateScore(){
    document.getElementById('score').innerText = player.score;
};

const colors = [
    null,
    '#FF0D72',
    '#0DC2FF',
    '#0DFF72',
    '#F538FF',
    '#FF8E0D',
    '#FFE138',
    '#3877FF',
];

const arena = createMatrix(12, 20);

const player = {
    pos: {x: 0, y: 0},
    matrix: null,
    score: 0,
    nextPiece: null,
    nextPieceImage: null,
    nextPieceType: null,
}

document.addEventListener('keydown', event => {
    if(event.keyCode === 37){
        playerMove(-1);
    } else if(event.keyCode === 39){
        playerMove(+1);
    }else if(event.keyCode === 40){
        playerDrop();
    }else if(event.keyCode === 81){
        playerRotate(-1)
    }else if(event.keyCode === 87){
        playerRotate(1);
    };
});

playerReset();
updateScore();
update();