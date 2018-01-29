 

Calculadora ={
	numbers:['7','8','9','4','5','6','1','2','3','.','0'],
	operators:['÷','×','-','+'],
	functions:['=','C','CE'],
	array:[],
	writeNumber: function(n){
		if (document.getElementById('pantalla').innerHTML === '÷' || document.getElementById('pantalla').innerHTML === '×' || document.getElementById('pantalla').innerHTML === '+' || document.getElementById('pantalla').innerHTML === '-') {
			document.getElementById('pantalla').innerHTML = '';
			document.getElementById('pantalla').innerHTML += n;
		} else 
		if (document.getElementById('pantalla').innerHTML === '0' && n !== '.') {
			document.getElementById('pantalla').innerHTML = '';
			document.getElementById('pantalla').innerHTML += n;
		}else{
			document.getElementById('pantalla').innerHTML += n;
		}
	},
	operator: function(o){
		var firstNumber = parseFloat(document.getElementById('pantalla').innerHTML);
		document.getElementById('pantalla').innerHTML = o;
		this.array = [firstNumber, o];
	},
	equal: function(){
		var secondNumber = parseFloat(document.getElementById('pantalla').innerHTML);
		var restult;
		switch(this.array[1]){
				case '÷':
				result = this.array[0]/secondNumber;
				break;
				case '×':
				result = this.array[0]*secondNumber;
				break;
				case '-':
				result = this.array[0]-secondNumber;
				break;
				case '+':
				result = this.array[0]+secondNumber;
				break;
			}
		document.getElementById('pantalla').innerHTML = result;
	},
	deleteSoft: function(){
		var number = document.getElementById('pantalla').innerHTML;
		var idx = number.length - 1;
		document.getElementById('pantalla').innerHTML = number.substr(0, idx);

	},
	deleteHard: function(){
		document.getElementById('pantalla').innerHTML = '0';
		this.array = [0,'']
	},
	init: function(){

		var divContainer = document.createElement('div');
		divContainer.id = 'container';
		var divResultado = document.createElement('div');
		divResultado.id = 'resultado';
		var divBtn = document.createElement('div');
		divBtn.id = 'btnContainer';
		var divBtnIz = document.createElement('div');
		divBtnIz.id = 'btnIzContainer';
		var divBtnDer = document.createElement('div');
		divBtnDer.id = 'btnDerContainer';
		var divBtnAbajo = document.createElement('div');
		divBtnAbajo.id = 'btnAbajoContainer';
		var resultado = document.createElement('p');
		var resultadoText = document.createTextNode('0');
		resultado.id = 'pantalla';
		resultado.appendChild(resultadoText);
		divContainer.appendChild(divResultado);
		divContainer.appendChild(divBtn);
		divBtn.appendChild(divBtnIz);
		divBtn.appendChild(divBtnDer);
		divContainer.appendChild(divBtnAbajo);
		divResultado.appendChild(resultado);

		this.numbers.forEach(function (data) {
			var button = document.createElement('button');
			var btnText = document.createTextNode(data);
			button.setAttribute('class', 'btnIz');
			button.setAttribute('onclick', 'Calculadora.writeNumber("' + data + '")');
			button.id = data;
			button.appendChild(btnText);
			divBtnIz.appendChild(button);
		})


		this.operators.forEach(function(data){
			var button = document.createElement('button');
			var btnText = document.createTextNode(data);
			button.setAttribute('class', 'btnDer');
			button.appendChild(btnText);	

			switch(data) {
				case '÷':
				button.setAttribute('onclick', 'Calculadora.operator("'+data+'")');
				button.id = 'div';
				break;
				case '×':
				button.setAttribute('onclick', 'Calculadora.operator("'+data+'")');
				button.id = 'mul';
				break;
				case '-':
				button.setAttribute('onclick', 'Calculadora.operator("'+data+'")');
				button.id = 'menos';
				break;
				case '+':
				button.setAttribute('onclick', 'Calculadora.operator("'+data+'")');
				button.id = 'mas';
				break;
			}	 

			divBtnDer.appendChild(button);
		})

		this.functions.forEach(function(data){
			var button = document.createElement('button');
			var btnText = document.createTextNode(data);
			button.setAttribute('class', 'btnAbajo');
			button.appendChild(btnText);	

			switch(data) {
				case '=':
				button.setAttribute('onclick', 'Calculadora.equal()');
				button.id = 'igual';
				break;
				case 'C':
				button.setAttribute('onclick', 'Calculadora.deleteSoft()');
				button.id = 'borrar';
				break;
				case 'CE':
				button.setAttribute('onclick', 'Calculadora.deleteHard()');
				button.id = 'borrar';
				break;

			}	 
			
			divBtnAbajo.appendChild(button);
		})

		document.getElementsByTagName('body')[0].appendChild(divContainer);

	}
}


window.onload = function(){

	Calculadora.init();
	
 }
