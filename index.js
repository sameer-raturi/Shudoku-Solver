
let a=document.querySelector('#shudoku');

const slv_btn=document.querySelector(".col.solve");
const rst_btn=document.querySelector(".col.reset");

slv_btn.addEventListener("click", shudokusolver);
rst_btn.addEventListener("click",refreshPage);

function refreshPage(){
    window.location.reload();
}



let table = "<table>"
// table.setAttribute();

for(let i=0; i < 9 ; i++)
{
    table+=`<tr class="row" id=${String(i)}>`;
    
    for(let j=0;j<9;j++){
        table+=`<td class="col form-outline">
        <input type="number" class="form-control" id=${String(i)+String(j)}>
      </td>`;

    }
    table+="</tr>"

}

table+="</table>";

a.innerHTML=table;

function takeInput(){
    let shudoku=new Array(9);

    for(let i=0; i<9; i++)
    {
        shudoku[i]=new Array(9);
    }

    for(let i = 0; i<9; i++)
    {
        for(let j = 0; j < 9 ; j++)
        {
            shudoku[i][j]=Number(document.getElementById(String(i)+String(j)).value) ?? 0;
        }

    }
    return shudoku;

}


function isValid(shudoku,i,j,val){

    let row = i - i%3, column = j - j%3;
    for(let x=0; x<9; x++){
        if(shudoku[x][j] == val) 
            return false;
    } 
    
    for(let y=0; y<9; y++){
        if(shudoku[i][y] == val) 
            return false;
    } 
    
    for(let x=0; x<3; x++){
        for(let y=0; y<3; y++){
            if(shudoku[row+x][column+y] == val) 
                return false;
        }   
    }
    return true;
}

function solve(shudoku,i,j){

    if(i==9) return true;
    if(j==9) return solve(shudoku, i+1, 0);
    if(shudoku[i][j] != 0) return solve(shudoku, i, j+1);

    for(let c=1; c<=9; c++)
    {
        if(isValid(shudoku, i, j, c))
        {
            shudoku[i][j] = c;
            if(solve(shudoku, i, j+1)) return true;
            shudoku[i][j] = 0;
        }
    }
        
    return false;
}


function showAns(shudoku){

    for(let i = 0; i<9; i++)
    {
        for(let j = 0; j < 9 ; j++)
        {
            document.getElementById(String(i)+String(j)).value = shudoku[i][j];
        }
    }
}



function shudokusolver(){

    let shudoku=takeInput();    

    if(solve(shudoku,0,0))
    setTimeout(showAns(shudoku), 5000);
    else
    alert('wrong input');

}

