function Addition(){
     myTable.innerHTML = ""
     for (let i = 1; i <=colNumber.value; i++) {
        solution = "<tr>"
        for(let j= 1; j <=rowNumber.value; j++) {
            solution +=` 
            <td>${i}+${j}=${i+j}</td>
            `
        }

        solution += "</tr>"
        myTable.innerHTML += solution
        myTable.style.fontsize="15px"
     }

}

function Subtraction(){
    myTable.innerHTML = ""
    for (let i = 1; i <=colNumber.value; i++) {
       solution = "<tr>"
       for(let j= 1; j <=rowNumber.value; j++) {
           solution +=` 
           <td>${i}-${j}=${i-j}</td>
           `
       }

       solution += "</tr>"
       myTable.innerHTML += solution
       myTable.style.fontsize="15px"
    }

}

function Multiplication(){
    myTable.innerHTML = ""
    for (let i = 1; i <=colNumber.value; i++) {
       solution = "<tr>"
       for(let j= 1; j <=rowNumber.value; j++) {
           solution +=` 
           <td>${i}*${j}=${i*j}</td>
           `
       }

       solution += "</tr>"
       myTable.innerHTML += solution
       myTable.style.fontsize="15px"
    }

}

function Division(){
    myTable.innerHTML = ""
    for (let i = 1; i <=colNumber.value; i++) {
       solution = "<tr>"
       for(let j= 1; j <=rowNumber.value; j++) {
           solution +=` 
           <td>${i}/${j}=${parseFloat(i/j).toFixed(2)}</td>
           `
       }

       solution += "</tr>"
       myTable.innerHTML += solution
       myTable.style.fontsize="15px"
    }

}