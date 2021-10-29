function hello(name){
    name = "Punto 1"
    console.log("Hola " + name);
}

//hello()

/* 2. Escribe una función que reciba dos parámetros, los sume e imprima en consola 
el resultado de la operación */

function add(){
    var num1 = 3
    var num2 = 4
    result = Number(num1) + Number(num2);
    if(num1 == null || num1 == "" || typeof num1 != "number" || num2 == null || num2 == "" || typeof num2 != "number"){
        console.log("Ingrese un valor numérico")
    }else{  
       console.log(result);
    }
    
}
//add()

function subtrac(){
    const num1 = 3
    const num2 = 4
    const result = Number(num1) + Number(num2);
    if(num1 == null || num1 == "" || typeof(num1) !== "number" || num2 == null || num2 == "" || typeof(num2) !== "number"){
        console.log("Ingrese un valor numérico")
    }else{
       console.log(result);
    }
    
}

//subtrac() 

/* 4. Escribe una función que reciba dos parámetros, los multiplique e imprima en consola 
el resultado de la operación.*/

function multiply(){
    const num1 = 3
    const num2 = 4
    const result = Number(num1) * Number(num2);
    if(num1 == null || num1 == "" || typeof(num1) !== "number" || num2 == null || num2 == "" || typeof(num2) !== "number"){
        console.log("Ingrese un valor numérico")
    }else{
       console.log(result);
    }
    
}

//multiply()

/* 5. Escribe una función que reciba dos parámetros, los divida e imprima en consola 
el resultado de la operación.*/

function divide(){
    const num1 = 3
    const num2 = 4
    const result = Number(num1) / Number(num2);
    if(num1 == null || num1 == "" || typeof(num1) !== "number" || num2 == null || num2 == "" || typeof(num2) !== "number"){
        console.log("Ingrese un valor numérico")
    }else{
       console.log(result);
    }
    
}

//divide()

function radioCircle(){
        var radio = 5;
        var PI = 3.1415;
        var area = PI * radio * radio;
        if(radio == null || radio == "" || typeof(radio) != "number"){
            console.log("Ingrese un valor numérico")
        }else{
        console.log(area);
        }
}

//radioCircle()

function metter(){
    const num1 = 1000
    const num2 = 4
    const result = num2 / num1.toFixed(2)
    if(num2 == null || num2 == "" || typeof num2 !== "number"){
        console.log("Ingrese un valor numérico")
    }else{
       console.log(result);
    } 
}

//metter()

function grade(){
    const num1 = 32
    const faren = 5
    const celsius = Number(faren * 9) / 5.0;
    const result = celsius + num1;
    if(faren == null || faren == "" || typeof(faren) !== "number"){
        console.log("Ingrese un valor numérico")
    }else{
       console.log(result);
    } 
}

//grade()

function MaxAndMin(list) {
    if (typeof (list) === "object" && list.length > 0){
        let max = list[0];
        let min = list[0];
        for (let i = 0; i < list.length; i++){
            if (list[i] > max){
                max = list[i];
            }
            if (list[i] < min){
                min = list[i];
            }
        }
        console.log("Max: " + max + " Min: " + min);
    }else{
        alert("Los parámetros no son correctos")
    }
}
//MaxAndMin([30,4,12,20,5])

function exponent(){
    const num1 = 3
    const num2 = 2
    result = Math.pow(Number(num1),num2);
    if(num1 == null || num1 == "" || typeof(num1) !== "number" || num2 == null || num2 == "" || typeof(num2) !== "number"){
        console.log("Ingrese un valor numérico")
    }else{   
       console.log(result);
    }
}

//exponent()

function countCountry(){
    let quantity =prompt("Numero de veces");

    if(quantity==null || quantity =="" || typeof(num2) !== "number"){
        alert("Ingrese información valida");
    }else{
        
        let countrys=[];
        for (let i = 0; i < quantity; i++) {
            let country=prompt("Ingrese país");
            if(country==null || country ==""){
                alert("Ingrese información");

            }else{
             countrys.push(country);
            }
        }

        for (let i = 0; i < countrys.length; i++) {
            
            alert(countrys[i]+" tiene " + countrys[i].length + " letras")
            
        }
    }
    
}

countCountry();