//Ejer1

function Num() {
	let respuesta = document.getElementById('E1')
	let table = document.createElement("table");
	let tcuerpo = document.createElement("tbody");
	let fila = document.createElement("tr");
	let celdaTh = document.createElement("th");

	txt = document.createTextNode("Numero");
	celdaTh.appendChild(txt);
	fila.appendChild(celdaTh);
	celdaTh = document.createElement("th");
	txt = document.createTextNode("Cuadrado");
	celdaTh.appendChild(txt);
	fila.appendChild(celdaTh);
	tcuerpo.appendChild(fila);
	let y = 1;
	for (let y = 1; y < 51; y++) {
		for (let f = 0; f < 2; f++) {
			fila = document.createElement("tr");
			let celda = document.createElement("td");
			let contcel = document.createTextNode(y);
			
			celda.appendChild(contcel);
			fila.appendChild(celda);
			celda = document.createElement("td");
			contcel = document.createTextNode(y * y);
			celda.appendChild(contcel);
			fila.appendChild(celda);
		}
		tcuerpo.appendChild(fila);
	}
	table.appendChild(tcuerpo);
	respuesta.appendChild(table);
}
//Ejer2

function PareImpar(){
	let respuesta = document.getElementById('E2')
	let numP =[];
	let numI=[];
	for (var i = 0; i <= 100; i+=2) {
		numP.push(i);
	}
	for (var j = 101; j <= 200; j+=2) {
		numI.push(j)
	}
	numP.shift()
	numI.shift()
	let finalNum = numP.concat(numI)
	respuesta.innerHTML = finalNum;
}

//Ejer3

function ParDesc() {
	let num = document.getElementById('valor').value;
	let respuesta = document.getElementById('E3')
	if(num%2!=0){
		num-=1
	}
	let salida=[]
	for (let i = num; i >= 2; i-=2) {
		salida.push(i)
	}
	respuesta.innerHTML = salida;
}

//Ejer4

function Promedio() {
	let num = document.getElementById('valor2A').value;
	let peso = document.getElementById('valor2B').value;
	let respuesta = document.getElementById('E4')


	let array = String(num).split(",").map((num) => {
		return Number(num)
	})
	let pesos = String(peso).split(",").map((peso) => {
		return Number(peso)
	})
	console.log(array);
	console.log(pesos);
	if (array.length === pesos.length) {
		let nuevoNum = 0;
		let nuevoPes = 0;
		for (let i = 0; i < array.length; i++) {
			nuevoNum += array[i] * pesos[i];
			nuevoPes += pesos[i];
		}
		nuevoNum = nuevoNum / nuevoPes;
		respuesta.value = nuevoNum;
	}else{
		alert("cantidades no coinciden");
	}
}
//Ejer5

let ar = 0;
function CrearArreglo() {
    let muestra = document.getElementById("E5G");
    let arr1 = Array.from({ length: 15 }, () => Math.floor(Math.random() * 10));
    ar =arr1;
    muestra.value = arr1;
}


function BuscarArreglo() {
    let lista = ar;
    let search = parseInt(document.getElementById("valor3").value);
    let muestra = document.getElementById("E5B");

    function busca(dato, index, pos) {

        if (dato == search) {
            d = true
        } else {
            d = d
        }
    }
    let contesta=" ";
    d = false
    lista.forEach(busca);
    let r = lista.indexOf(search)
    if (d == false) {
        contesta="numero no se encontro";
        muestra.innerHTML = contesta;
    } else if (d == true) {
        contesta = "El numero esta en posicion " + (r+1) + "<br/>";
        muestra.innerHTML = contesta;
    }
}
//Ejer6

function CreArreglo() {
	let longitud = parseInt(document.getElementById('longitud').value);
	let max = parseInt(document.getElementById("max").value);
	let min = parseInt(document.getElementById("min").value);
	let respuesta = document.getElementById('E6')
	let array = []

	for (let i = 0; i < longitud; i++) {
		array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
	}

	respuesta.value = array;
}
//Ejer7

function numeroRepetido() {
    let valor = document.getElementById("valor4").value;
    let resultado = document.getElementById("E7");
    let arr1 = Array.from({ length: 15 }, () => Math.floor(Math.random() * 10));
    let contestacion = " ";

    console.log(arr1);
    contador = 0;
    for (i = 0; i < arr1.length; i++) {
        if (valor == arr1[i]) {
            contador++;
        } else {
            contador = contador
        }
    }
    if (contador == 0) {
        contestacion = "El numero " + valor + " no existe";
        resultado.value = contestacion;
    } else {
        if (contador == 1) {
            contestacion = "Numero " + valor + " aparece " + contador + " vez.";
            resultado.value = contestacion;
        } else {
            contestacion = "Numero " + valor + " aparece " + contador + " veces.";
            resultado.value = contestacion;
        }
    }

}
//Ejer8

function convertiraBinario() {
    let num = parseInt(document.getElementById("valor5").value);
    let respuesta = document.getElementById("E8");

    bin = []
    while (num >= 1) {
        if ((num % 2) == 0) {
            bin.push(0);
            num = num / 2;
        } else {
            bin.push(1);
            num = Math.floor(num / 2);
        }
    }

    respuesta.value = bin.reverse().join("");
}

//Ejer9

const binaryInput = document.getElementById("binario");

binaryInput.addEventListener("keypress", function (event) {
    const key = event.which || event.keyCode; // Obtener el código de la tecla presionada
    const value = String.fromCharCode(key); // Obtener el valor de la tecla presionada

    if (value !== "0" && value !== "1") {
        event.preventDefault(); // Prevenir la entrada de cualquier otro valor
    }
});


function convertiraDec() {
    let search = binaryInput.value

    let bin = String(search).split("").map((search) => {
        return Number(search)
    })

    while (bin.length < 8) {
        bin.splice(0, 0, 0)
    }

    let num = [128, 64, 32, 16, 8, 4, 2, 1]
    let numFinal = 0
    for (i = 0; i < num.length; i++) {
        let newNum = num[i] * bin[i]
        if (newNum != 0) {
            numFinal += newNum;
        }
    }
    const resultado = document.getElementById("resultado");

    resultado.value = numFinal;

}
//Ejer10

function multiplicar() {
	let arr1=document.getElementById('arr1').value;
	let arr2=document.getElementById('arr2').value;
	let respuesta = document.getElementById('E10')

	let uno = String(arr1).split(",").map((arr1) => {
        return Number(arr1)
    })

    let dos = String(arr2).split(",").map((arr2) => {
        return Number(arr2)
    })

    let operacion=[]

    if (uno.length!=dos.length){
    	alert("los arreglos no son de igual tamaño")
    }else{
    	for (var i = 0; i < uno.length; i++) {
    		operacion.push(uno[i]*dos[i])
    	}
    	respuesta.value = operacion;

    }
}
//Ejer11

function productoPunto() {
    let Luno = String(document.getElementById("arr3").value).split(",").map((arr1) => {
        return Number(arr1)
    })
    let Ldos = String(document.getElementById("arr4").value).split(",").map((arr2) => {
        return Number(arr2)
    })
    let resultado = document.getElementById("E11");

    while (Luno.length < Ldos.length || Ldos.length < Luno.length) {
        if (Luno.length < Ldos.length) {
            Luno.push(0);
        } else {
            Ldos.push(0);
        }
    }
    console.log(Ldos,Luno)
    let Nlista = 0;

    for (let i = 0; i < Luno.length; i++) {
        Nlista += (Luno[i] * Ldos[i]);
    }

    resultado.value = Nlista;
}
//Ejer12

function poblacion() {
    let resultado = document.getElementById('E12');

    let A = 25.0;
    let B = 18.9;

    let TA = 0.02;
    let TB = 0.03;

    let AF=0;
    let BF=0;
 
    let n = 0;
    console.log(A,B);
    while (BF<=AF) {
        AF = A * Math.pow((1 + TA), n);
        BF = B * Math.pow((1 + TB), n);
        n++;
    }
    let agno = 2022 + n;
    resultado.value = agno;
}
//Ejer13

function sumarSecuencia() {
	let limite = parseInt(document.getElementById('valor6').value);
	let resultado = document.getElementById("E13");

	let num = 1;
	let sum = 0;
	let secuencia = [];
	while(sum < limite){
		secuencia.push(sum);
		sum += num*num;
		num++;
	}
	let i = 0
	let newSec = [];
	while(i<secuencia.length-1){
		newSec.push(secuencia[i+1]-secuencia[i]);
		i++
	}
	
	let text = newSec.join(" + ");
	resultado.value = text;
}
//Ejer14

function forAwhile() {
    let respuesta = document.getElementById("E14");
    let a = 0;
    let b = 0;

    let A = [];
    let B = [];

    while (a < 7) {
        A.push(a);
        B.push(b);
        a++;
        b += 2;
    }
    console.log(A, B);

    let table = document.createElement("table");
    let tcuerpo = document.createElement("tbody");
    let y = 0;
    while (y < 7) {
        let fila = document.createElement("tr");
        let celda = document.createElement("td");
        let contcel = document.createTextNode(A[y]);
        celda.appendChild(contcel);
        fila.appendChild(celda);
        celda = document.createElement("td");
        contcel = document.createTextNode(B[y]);
        celda.appendChild(contcel);
        fila.appendChild(celda);
        tcuerpo.appendChild(fila);
        table.appendChild(tcuerpo);
        respuesta.appendChild(table);
        y++;
    }


}

//Ejer15

function GenerarLista() {
	let muestra = document.getElementById("E15G");
    let arr1 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

    muestra.innerHTML = arr1;
}
function NumPrimo() {
    let lista = document.getElementById("E15G").innerHTML;
    let arr1 = String(lista).split(",").map((lista) => {
        return Number(lista)
    })
    let respuesta = document.getElementById("E15B");


    let primos=[2,3,5,7];
    let num=0;
    let val = 0;
    while(num<100){
    	
    	if ((num%2)==0) {
    		val=val;
    	}else if((num%3)==0) {
    		val=val;
    	}else if((num%5)==0){
    		val=val;
    	}else if((num%7)==0){
    		val=val;
    	}else{
    		val=1;
    	}
    	if(val==1){
    		primos.push(num)
    	}
    	num++;
    	val = 0;
    }


    num = 0;
    let j = true;
    let responde = "";
	while(num <= arr1.length && j==true){
		let i = 0;
		while(i<primos.length && j==true){
			if(arr1[num]==primos[i]){
				responde = "Primo numero " + arr1[num] + " en posicion " + (num+1);
				j=false;
			}
			i++;
		}
		num++;
	}  
	respuesta.value = responde;

}
//Ejer16 

function MaxComDiv() {
    let num1 = parseInt(document.getElementById("valor8").value);
    let num2 = parseInt(document.getElementById("valor9").value);
    let respuesta = document.getElementById("C16");

    let mcd = 0;
    let lista = [];
    while (mcd == 0) {
        if ((num1 % 2) == 0 && (num2 % 2) == 0) {
            console.log(num1 = num1 / 2)
            num2 = num2 / 2
            lista.push(2);
            mcd = mcd;
        } else if ((num1 % 3) == 0 && (num2 % 3) == 0) {
            num1 = num1 / 3
            num2 = num2 / 3
            lista.push(3);
            mcd = mcd;
        } else if ((num1 % 5) == 0 && (num2 % 5) == 0) {
            num1 = num1 / 5
            num2 = num2 / 5
            lista.push(5);
            mcd = mcd;
        } else if ((num1 % 7) == 0 && (num2 % 7) == 0) {
            num1 = num1 / 7
            num2 = num2 / 7
            lista.push(7);
            mcd = mcd;
        } else {
            mcd = 1;
        }
    }
    let i = 0;
    let maxDiv = 1;
    while (i < lista.length) {
        maxDiv *= lista[i];
        i++;
    }
    console.log(maxDiv);
    respuesta.value = maxDiv;
}

//Ejer17

function Seriefibonacci(){
    let final = document.getElementById("valor10").value;
    
    let serie = [1,1];
    let i = 1;
    while (i < final) {
        serie.push(serie[i-1]+serie[i]);
        i++;
    }
    console.log(serie);
}

//Ejer18

function SumarEnt(){
    let valor = document.getElementById("valor12").value;
    let respuesta = document.getElementById("E17")

    if(valor>0 ){
        let myFunc = num => Number(num);
        let listaNum = Array.from(String(valor), myFunc);
        let suma = 0;

        let i = 0;
        while(i<listaNum.length){
            suma+=listaNum[i];
            i++;
        }
        respuesta.value = suma;

    }else{
        alert("ingrese un valor valido");
    }
    
}

//Ejer19

function NumAle() {
    let muestra = document.getElementById("E18G");
    let arr1 = Array.from({ length: 20 }, () => Math.floor(Math.random() * 50));

    muestra.innerHTML = arr1;
}


function ordenarArreglo() {
    let lista = document.getElementById("E18G").innerHTML;
    let respuesta = document.getElementById("E18O");

    let arr = String(lista).split(",").map((lista) => {
        return Number(lista)
    })
    let x = 0;
    while(x < arr.length){
        let i = 0;
        while(i < arr.length){
            let aux = 0;
            if(arr[i] > arr[i+1]){
                aux += arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = aux;
                aux = 0;
                i++;
            }else{
                i++;
            }
        }
        x++;
    } 
    
    respuesta.value = arr.join(" ");
}

///Ejer20

function BuscarLetra() {
    let frase = document.getElementById("valor13").value;
    let letra = document.getElementById("valor14").value;

    let arFrase = frase.split("");
    let i = 0;
    while (i < arFrase.length) {
        if (arFrase[i] == letra) {
            console.log("encontrado en posicion " + i);
            i++;
        } else {
            console.log("no se encuentra");
            i++;
        }
    }
}

//Ejer21

function BuscarLetra() {
    let frase = document.getElementById("valor13").value;
    let letra = document.getElementById("valor14").value;

    let arFrase = frase.split("");
    let i = 0;
    while (i < arFrase.length) {
        if (arFrase[i] == letra) {
            console.log("encontrado en posicion " + i);
            i++;
        } else {
            console.log("no se encuentra");
            i++;
        }
    }
}

//Ejer22

let mt = 0;
function CreMatriz(){
    let muestra = document.getElementById("valor16");
    muestra.innerHTML = " "
    let table = document.createElement("table");
    let tcuerpo = document.createElement("tbody");
    let matriz = [];
    let h = 0;
    while (h < 6) {

        matriz.push(Array.from({ length: 6 }, () => Math.floor(Math.random() * 30)));
        h++;
    }
    for (const f in matriz) {
        let fila = document.createElement("tr");
        for (const c in matriz[f]) {
            let celda = document.createElement("td");
            let contcel = document.createTextNode(matriz[f][c]);
            celda.appendChild(contcel);
            celda.id = 'cell-' + f + '-' + c;
            fila.appendChild(celda);
        }
        tcuerpo.appendChild(fila);
    }
    table.appendChild(tcuerpo);
    muestra.appendChild(table);
    mt = matriz;
}

function OrdenarMatriz(){
    let m1 = mt;
    let ub = parseInt(document.getElementById("valor17").value)-1;
    let ot = document.getElementById("sel").value;
    let respuesta = document.getElementById("E20");
    let color  = "rgb("+Math.floor(Math.random() * 230)+","+Math.floor(Math.random() * 230)+","+Math.floor(Math.random() * 230)+")"

    function compara(a,b){return a-b}
    if(ot == 0){
        m1= mt;
        let nuevo = m1[ub].sort(compara);
        let y = 0;
        while(y<6){
            document.getElementById('cell-' + ub + '-' + y).style.background = color;
            y++;
        }
        respuesta.value = nuevo;
    }else{
        let nm1=[]
        let x = 0;
        while(x<6){
            m1= mt;
            nm1.push(m1[x][ub])
            document.getElementById('cell-' + x + '-' + ub).style.background = color;
            x++;
        }
        let nuevo = nm1.sort(compara);
        respuesta.value = nuevo;
    }
}

//Ejer23

let mtA = 0;
let mtB = 0;

function CrearA(){
    let muestra = document.getElementById("valor18");
    muestra.innerHTML = " "
    let table = document.createElement("table");
    let tcuerpo = document.createElement("tbody");
    let matriz = [];
    let h = 0;
    while (h < 4) {

        matriz.push(Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)));
        h++;
    }
    for (const f in matriz) {
        let fila = document.createElement("tr");
        for (const c in matriz[f]) {
            let celda = document.createElement("td");
            let contcel = document.createTextNode(matriz[f][c]);
            celda.appendChild(contcel);
            celda.id = 'cellA-' + f + '-' + c;
            fila.appendChild(celda);
        }
        tcuerpo.appendChild(fila);
    }
    table.appendChild(tcuerpo);
    muestra.appendChild(table);
    mtA = matriz;
}

function CrearB(){
    let muestra = document.getElementById("valor19");
    muestra.innerHTML = " "
    let table = document.createElement("table");
    let tcuerpo = document.createElement("tbody");
    let matriz = [];
    let h = 0;
    while (h < 4) {

        matriz.push(Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)));
        h++;
    }
    for (const f in matriz) {
        let fila = document.createElement("tr");
        for (const c in matriz[f]) {
            let celda = document.createElement("td");
            let contcel = document.createTextNode(matriz[f][c]);
            celda.appendChild(contcel);
            celda.id = 'cellB-' + f + '-' + c;
            fila.appendChild(celda);
        }
        tcuerpo.appendChild(fila);
    }
    table.appendChild(tcuerpo);
    muestra.appendChild(table);
    mtB = matriz;
}

function nuevaMatriz(){
    CrearA();
    CrearB();
 
    setTimeout(() => {
        compara()
    }, 1000);
}

function compara(){
    let m1 = mtA;
    console.log(m1);
    let m2 = mtB;
    let respuesta = document.getElementById("E21");

    let estado = 0;
    for (const f in m1) {
        for (const c in m1[f]) {
            if(m1[f][c]==m2[f][c]){
                document.getElementById('cellA-' + f + '-' + c).style.background = "#5cf05c";
                document.getElementById('cellB-' + f + '-' + c).style.background = "#5cf05c";
                estado ++;
            }
        }
    }
    console.log(estado);
    let Mt = (estado/16)*100;
    if(Mt == 0){
        respuesta.value = "No existen coincidencias";  
    }else{
        respuesta.value = "Coinciden en un "+ Mt +"%";
    }
}

//Ejer24

function magic() {
    let mat = [];
    let val = true;

    for (let f = 0; f < 4; f++) {
        let arr = [];
        for (let c = 0; c < 4; c++) {
            let num = parseInt(document.getElementById("mg" + f + "-" + c).value);
            if(num>=1 && num<=16  || num!=NaN || num!=" "){
                arr.push(num)
                val =val;
            }else{
                val = false

            }  
        }
        mat.push(arr)
    }

    let f1 = 0
    let f2 = 0
    let f3 = 0
    let f4 = 0
    let c1 = 0
    let c2 = 0
    let c3 = 0
    let c4 = 0
    let d1 = 0
    let d2 = 0

    let a = 0;
    while (a <= 3) {
        d1 += mat[a][a]
        
        f1 += mat[0][a]
        c1 += mat[a][0]

        f2 += mat[1][a]
        c2 += mat[a][1]

        f3 += mat[2][a]
        c3 += mat[a][2]

        f4 += mat[3][a]
        c4 += mat[a][3]

        a++
    
    }
    a = 3
    while(a>=0){
        d2 +=mat[a][a]
        a--
    }


    if(d2>=0){
        document.getElementById("d2").innerHTML = d2;
    }
    if(d1>=0){
        document.getElementById("d1").innerHTML = d1;
    }
    if(c1>=0){
        document.getElementById("c1").innerHTML = c1;
    }
    if(c2>=0){
        document.getElementById("c2").innerHTML = c2;
    }
    if(c3>=0){
        document.getElementById("c3").innerHTML = c3;
    }
    if(c4>=0){
        document.getElementById("c4").innerHTML = c4;
    }
    if(f1>=0){
        document.getElementById("f1").innerHTML = f1;
    }
    if(f2>=0){
        document.getElementById("f2").innerHTML = f2;
    }
    if(f3>=0){
        document.getElementById("f3").innerHTML = f3;
    }
    if(f4>=0){
        document.getElementById("f4").innerHTML = f4;
    }
    
}

//Ejer25

function CreaA() {
    let flA = parseInt(document.getElementById("flA").value);
    let clA = parseInt(document.getElementById("clA").value);
    let muestra = document.getElementById("valor20");
    muestra.innerHTML = " "
    let table = document.createElement("table");
    let tcuerpo = document.createElement("tbody");
    let matriz = [];
    let h = 0;
    while (h < flA) {

        matriz.push(Array.from({ length: clA }, () => Math.floor(Math.random() * 10)));
        h++;
    }
    for (const f in matriz) {
        let fila = document.createElement("tr");
        for (const c in matriz[f]) {
            let celda = document.createElement("td");
            let contcel = document.createTextNode(matriz[f][c]);
            celda.appendChild(contcel);
            celda.id = 'cellA-' + f + '-' + c;
            fila.appendChild(celda);
        }
        tcuerpo.appendChild(fila);
    }
    table.appendChild(tcuerpo);
    muestra.appendChild(table);
    return matriz;
}

function CreaB() {
    let flB = parseInt(document.getElementById("flB").value);
    let clB = parseInt(document.getElementById("clB").value);
    let muestra = document.getElementById("valor21");
    muestra.innerHTML = " "
    let table = document.createElement("table");
    let tcuerpo = document.createElement("tbody");
    let matriz = [];
    let h = 0;
    while (h < flB) {

        matriz.push(Array.from({ length: clB }, () => Math.floor(Math.random() * 10)));
        h++;
    }
    for (const f in matriz) {
        let fila = document.createElement("tr");
        for (const c in matriz[f]) {
            let celda = document.createElement("td");
            let contcel = document.createTextNode(matriz[f][c]);
            celda.appendChild(contcel);
            celda.id = 'cellB-' + f + '-' + c;
            fila.appendChild(celda);
        }
        tcuerpo.appendChild(fila);
    }
    table.appendChild(tcuerpo);
    muestra.appendChild(table);
    return matriz;
}


function Multip2matrices() {
    let respuesta = document.getElementById("valor22");
    respuesta.innerHTML = " "
    let flA = parseInt(document.getElementById("flA").value);
    let clA = parseInt(document.getElementById("clA").value);
    let flB = parseInt(document.getElementById("flB").value);
    let clB = parseInt(document.getElementById("clB").value);

    let A = CreaA()
    let B = CreaB()
    if (clA === flB) {
        console.log("la matriz resultante es  de " + flA + "x" + clB);
        //crea la nueva matriz vacia con 0
        let C = []
        for (let i = 0; i < A.length; i++) {
            C[i] = [];
            for (let j = 0; j < B[0].length; j++) {
                C[i][j] = 0;
            }
        }
        // hacer la multiplicacion
        for (let x = 0; x < A.length; x++) {
            for (let y = 0; y < B[0].length; y++) {
                for (let z = 0; z < B.length; z++) {
                    C[x][y] += A[x][z] * B[z][y];
                }
            }
        }

        //imprimir la matriz
        let table = document.createElement("table");
        let tcuerpo = document.createElement("tbody");
        for (const fl in C) {
            let fila = document.createElement("tr");
            for (const cl in C[fl]) {
                let celda = document.createElement("td");
                let contcel = document.createTextNode(C[fl][cl]);
                celda.appendChild(contcel);
                celda.id = 'cellC-' + fl + '-' + cl;
                fila.appendChild(celda);
            }
            tcuerpo.appendChild(fila);
        }
        table.appendChild(tcuerpo);
        respuesta.appendChild(table);

    } else {
        respuesta.innerHTML = "no es posible esta operacion";
    }


}
