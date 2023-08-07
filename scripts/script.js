let dataBox = document.querySelector('.data');
function createOrder() {
    dataBox.classList.remove('none');
    document.querySelector('nav').classList.add('blockEvents');
    document.querySelector('.information').classList.add('blockEvents');
    document.querySelector('.product-selection').classList.add('blockEvents');
    document.querySelector('footer').classList.add('blockEvents');
    document.querySelector('body').classList.add('overflowHidden');
};
function closeCreateOrder(event) {
	event.preventDefault(event);
    dataBox.classList.add('none');
    document.querySelector('nav').classList.remove('blockEvents');
    document.querySelector('.information').classList.remove('blockEvents');
    document.querySelector('.product-selection').classList.remove('blockEvents');
    document.querySelector('footer').classList.remove('blockEvents');
    document.querySelector('body').classList.remove('overflowHidden');
};
function printOrder(event) {
	event.preventDefault(event);
   	window.print();
};

// ==================================================




const mainForm = document.forms.main;


// Объявление переменных
let divElem = document.getElementById('catalog');
let BlockOpen1 = 0;
let closed1 = "Block3_0";
let openBlock2 = 'Block3_1';
let levelOne = 'Block3_1';
let sum = 0;
let closeBl4 = "Block3_1_0";
let price = 0;
let price1 = 0;
let VRadio = 0;
let BlkSelindex361 = 0;
let chboxTsup1Catalog = 0;
let chboxTsup2Catalog = 0;
let dopKompl = 0;
let systemName = "systemName";
let tableWidth = "";
let tableHeight = "";
let tablecontrol = "";
let tableNote = "";
let tableNote0 = "";
let tableNote1 = "";
let tableNote2 = "";
let index1 = "";
let systemName1 = "";
let systemName2 = "";
let systemName3 = "";



					// ОСНОВНОЙ БЛОК

divElem.addEventListener('change', function () { 
	BlockOpen1.selectedIndex = 0;							// level в 0 индекс 
		console.log(closed1);
		tableWidth = "";
		tableHeight = "";
		tablecontrol = "";
		tableNote = "";
		tableNote0 = "";
		tableNote1 = "";
		tableNote2 = "";
		if (closed1 === 'Block7') {
			console.log("закрытие ", closed1);
			closeBlock("Block7_1");
			closeBlock("num3");

		};
			if (closed1 === 'Block3') {
				closeBlock("Block3_1_1_1");
				closeBlock("Block3_1_1_2");
				closeBlock("Block3_1_1_999");
				closeBlock("num3");
			};

	thisSelIndex = this.selectedIndex;
	let levelIndexOpen = "Block";
	console.log(levelIndexOpen);
	closeBlock(closed1);
	index1 = this.selectedIndex;
	//console.log(index1);
	levelIndexOpen = "Block" + thisSelIndex;
	//console.log(levelIndexOpen);
	closed1 = openBlock(levelIndexOpen);
	console.log(closed1);
	systemName = '';
	console.log(systemName);
	let BlockOpen12 = "Bl" + thisSelIndex;
	BlockOpen1 = document.getElementById(BlockOpen12);
	console.log(BlockOpen1);

	changeMenu(BlockOpen1);
	closeBlock(openBlock2);
	closeBlock(closeBl4);
});

const changeMenu = function (BlockOpen1) {
	console.log(BlockOpen1);
	BlockOpen1.addEventListener('change', function () {
	console.log(' Выполнение changeMenu');
	console.log(index1);
if (index1 === 7) {
				
	thisSelIndex = this.selectedIndex;
	textObrazcStend = this[thisSelIndex].text;
	console.log(textObrazcStend);

				document.getElementById("num3").style.display = "Block";
				let amount = document.getElementById("kolich1");
				
				console.log(amount);
				openBlock("Block7_1");
				systemName = textObrazcStend;
			console.log(systemName);
				console.log(sum);
				sum = 0;
				amount.value = 1;
				
				let price = document.getElementById("Bl" + index1).value;
					console.log(price);
					
					price = Number(price);
					sum = price;
				let p = document.getElementById("num3");
				p.innerHTML = sum;
				tableNote = "Цена:" + price + "   *   " + 'кол-во:' + 1;
				console.log(tableNote);
				amount.addEventListener('change', function() {
					
					amount = document.getElementById("kolich1").value;
					console.log(amount);
					amount = Number(amount);
					console.log(thisSelIndex);
					sum = price * amount;
					tableNote = "Цена:" + price + "   *   " + 'кол-во:' + amount;
					console.log(tableNote);
					p = document.getElementById("num3");
					p.innerHTML = sum;
				})

				
				}else {
					thisSelIndex = this.selectedIndex;
		console.log(thisSelIndex);
		console.log(index1);
		//console.log(levelIndex2);
		closeBlock(levelOne);
		closeBlock(closeBl4);
		closeBlock("Block3_1_1_1");
		closeBlock("Block3_1_1_2");
		closeBlock("Block3_1_1_999");
		closeBlock("num3");

		let levelIndexOpen = "Block" + index1 + "_" + thisSelIndex;

		if (index1 === 1) {
			if (thisSelIndex > 0) {
				let h = 'Bl' + index1 + "_" + thisSelIndex;
				//console.log(h);
				let z = document.getElementById(h);
				//console.log(z);
				z.selectedIndex = 0;
				//console.log(levelIndexOpen);
				levelOne = openBlock(levelIndexOpen);
				openBlock2 = levelOne;
				return levelIndexOpen;
			};
		};

		if (index1 === 2) {
			if (thisSelIndex > 0) {
				let h = 'Bl' + index1 + "_" + thisSelIndex;
				//console.log(h);
				let z = document.getElementById(h);
				//console.log(z);
				z.selectedIndex = 0;
				//console.log(levelIndexOpen);
				levelOne = openBlock(levelIndexOpen);
				openBlock2 = levelOne;
				return levelIndexOpen;
			};
		};

			if (index1 === 3) {
				console.log(thisSelIndex);
				if (thisSelIndex > 0) {

					let BlSelindex = 'Bl' + index1 + "_" + thisSelIndex;
					
					console.log(BlSelindex);
					let z = document.getElementById(BlSelindex);
					
					z.selectedIndex = 0;
					
					levelOne = openBlock(levelIndexOpen);
					// let systemName2 = this.value;
					// console.log(systemName2);
					systemName1 = this.value;
					console.log(systemName1);
					openBlock2 = levelOne;
					console.log(BlSelindex);
					
					Level4(BlSelindex);
					return levelIndexOpen;
				};
			};

	};
});

};

const Level4 = function (BlSelindex) {
	BlSelindex = document.getElementById(BlSelindex);
	console.log(BlSelindex);
	
	BlSelindex.addEventListener('change', function () {
		closeBlock(closeBl4);
		closeBlock("Block3_1_1_1");
		closeBlock("Block3_1_1_2");
		closeBlock("Block3_1_1_999");
		closeBlock("num3");
		thisSelIndex4 = this.selectedIndex;
		console.log(thisSelIndex4);
		if (thisSelIndex4 > 0) {
			let BlockSelindex4 = 'Block' + index1 + "_" + thisSelIndex + "_" + thisSelIndex4;
			let BlkSelindex4 = 'Bl' + index1 + "_" + thisSelIndex + "_" + thisSelIndex4;
			let z = document.getElementById(BlkSelindex4);
			z.selectedIndex = 0;
			closeBl4 = openBlock(BlockSelindex4);
			systemName2 = this.value;
			console.log(systemName2);
			console.log(BlkSelindex4);
			Level35(BlkSelindex4);
		};
		console.log(price1);
		return price1;
	});
	console.log(price1);
					return price1;
};

const Level35 = function (BlSelindex) {
	
	BlSelindex = document.getElementById(BlSelindex);
	console.log(BlSelindex);
	
	BlSelindex.addEventListener('change', function () {
		
		thisSelIndex5 = this.selectedIndex;
		console.log(BlkSelindex361);
		BlkSelindex361 = 0;
		console.log(thisSelIndex5);
		console.log(price1);
		
		if (thisSelIndex4 > 0) {

			if (thisSelIndex4 > 1) {
				let BlkSelindex5 = 'Bl' + index1 + "_" + thisSelIndex + "_" + thisSelIndex4 + "_" + thisSelIndex5;
			console.log(BlkSelindex5);

			
			let z = document.getElementById("Bl3_1_1_2");
			z.selectedIndex = 0;
			closeBl5 = openBlock("Block3_1_1_2");
			closeBl35 = "Bl3_1_1_2"
			//closeBl6 = openBlock("Block3_1_1_999");
			openBlock("num3");
			systemName3 = this.value;
			console.log(systemName3);
					sum = 0;
					p = document.getElementById("num3");
					p.innerHTML = sum;

					price1 = Level361(closeBl35);
					console.log(price1);
					return price1;

			};
			//let BlockSelindex5 = 'Block' + index1 + "_" + thisSelIndex + "_" + thisSelIndex4 + "_" + thisSelIndex5;
			let BlkSelindex5 = 'Bl' + index1 + "_" + thisSelIndex + "_" + thisSelIndex4 + "_" + thisSelIndex5;
			console.log(BlkSelindex5);

			if (thisSelIndex4 = 1) {
				let z = document.getElementById("Bl3_1_1_1");
			z.selectedIndex = 0;
			closeBl5 = openBlock("Block3_1_1_1");
			closeBl35 = "Bl3_1_1_1"
			// tableWidth = this[]
			//closeBl6 = openBlock("Block3_1_1_999");
			openBlock("num3");
			systemName3 = this.value;
			console.log(systemName3);
					sum = 0;
					p = document.getElementById("num3");
					p.innerHTML = sum;

					price1 = Level361(closeBl35);
					console.log(price1);
					return price1;
			};

			let z = document.getElementById("Bl3_1_1_2");
			z.selectedIndex = 0;
			closeBl5 = openBlock("Block3_1_1_2");
			closeBl35 = "Bl3_1_1_2"
			//closeBl6 = openBlock("Block3_1_1_999");
			openBlock("num3");
					sum = 0;
					p = document.getElementById("num3");
					p.innerHTML = sum;

					price1 = Level361(closeBl35);
					console.log(price1);
					return price1;
		};
				
	});
	console.log(price1);
	return price1;
};

function Level361(closeBl35) {
	closeBl351 = closeBl35;
	closeBl35 = document.getElementById(closeBl35);
	console.log(closeBl35);
	closeBl35.addEventListener('change', function () {

		

		let z = document.getElementsByName("r1");
		console.log(z);
		chboxTsup1Catalog = 0;
		chboxTsup2Catalog = 0;
		
		closeBl6 = openBlock("Block3_1_1_999");
		

			z[0].checked = true;
			chbox1.checked = false;
			chbox2.checked = false;
			chboxTsup1Catalog = 0;
			chboxTsup2Catalog = 0;
			tableNote0 = '';
			tableNote1 = '';
			tableNote2 = '';

		BlkSelindex361 = this.selectedIndex;
		console.log(BlkSelindex361);
		tableWidth = this[BlkSelindex361].text;
		tableHeight = "160";
		tablecontrol = "(P)"
		console.log(closeBl351);

		let price1 = document.getElementById(closeBl351).value;
		
		price1 = Number(price1);
		console.log(price1);
		//let price1 = 0;
		price1 = myFunction(price1);
		
		console.log(price1);
		radior(price1);

		return price1;
	});
	console.log(price1);
	return price1;
};
	// Открытие блока
	const openBlock = function (Block) {
		console.log('Открытие блока N', Block);
		document.getElementById(Block).style.display = "Block";  // Вывод 2 блока
	};

	// Закрытие блока
	const closeBlock = function (Block) {
		console.log(" Закрытие блока ", Block);
		document.getElementById(Block).style.display = "none";
	};	

	// Функция Radios
	function radior(price1){
	let rad=document.getElementsByName('r1');
		
		for (let i = 0; i < rad.length; i++) {
			console.log(price1);
			console.log(rad);
			rad[i].onchange = myFuncti;
			//console.log(this.value);
			function myFuncti() {
				
				dopKompl = Number(this.value);
				console.log(BlkSelindex361);
				if (BlkSelindex361 === 0) {
					console.log(price1);
					//price1 = 0;
				};
				console.log(BlkSelindex361);
				console.log(dopKompl);
				tableNote0 = this.id;
				console.log(tableNote);

				console.log(chboxTsup1Catalog);
				sum = price1 + dopKompl + chboxTsup1Catalog + chboxTsup2Catalog;
				console.log(sum);
				sumWithdrawal(sum);
			};
	};
	};
	function myFunction(price1) {
		//let radios = document.querySelectorAll('input[type="radio"]');

			
			//radior(price1);
			console.log(price1);
			console.log(price1);
			sum = price1 + VRadio + chboxTsup1Catalog + chboxTsup2Catalog;
			console.log(sum);
			sumWithdrawal(sum);
			return price1;
	};

	
	const chbox1 = document.getElementById("Фиксатор цепи");
	const chbox2 = document.getElementById(' Груз цепи');

	function chboxTsup1() {
		console.log(" Все полчилось", price1, sum);
		
		if (chbox1.checked) {
			tableNote1 = "Фиксатор цепи, ";
			chboxTsup1Catalog = 0.2;
			console.log(chboxTsup1Catalog);
			sum = sum + chboxTsup1Catalog;
			//sum = sum.toFixed(2);
			console.log(sum);
			
			console.log('Выбран', sum);
			sumWithdrawal(sum);

		}
		else {
			console.log(sum);
			tableNote1 = "";
			chboxTsup1Catalog = 0;
			console.log(chboxTsup1Catalog);
			sum = sum - 0.2;
			console.log(sum);
			console.log('Не Выбран', sum);
			sumWithdrawal(sum);
			}
	}

	function chboxTsup2() {
		console.log(" Все полчилось", price1, sum);
		//const chbox2 = document.getElementById(' Груз цепи');
		if (chbox2.checked) {
			tableNote2 = "Груз цепи, ";
			chboxTsup2Catalog = 0.3;
			sum = sum + chboxTsup2Catalog;
			//sum = sum.toFixed(2);
			console.log(sum);
			console.log('Выбран', sum);
			sumWithdrawal(sum);
		}
		else {
			console.log(sum);
			tableNote2 = "";
			chboxTsup2Catalog = 0;
			console.log(chboxTsup2Catalog);
			sum = sum - 0.3;
			console.log(sum);
			console.log('Не Выбран', sum);
			sumWithdrawal(sum);
			}
	}
	

	// Функция Вывода в поле Общая стоимость
	function sumWithdrawal(c) {
		console.log(c);
		c = c.toFixed(2);
		p = document.getElementById("num3");
		p.innerHTML = c;
	}


	// Перебор 
// const add = function (BlockOpen) {

// 	console.log(" Выполнение функции add");
	
// 	levelIndex = divElem.selectedIndex;			// Индекс уровня
// 	productSelection.push(levelIndex);
// 	levelIndexOpen = BlockOpen + levelIndex;
// 	levelIndexOpen1 = levelIndex;
// 	product1 = [productSelection];

// 		const product = {
// 			product1 : [],
// 			add(tovar) {
// 				console.log(" 222");
// 				this.product1.push(tovar);
// 			}
// 		};
// 	product.add({index: levelIndex});
// 	console.table(product.product1);
// 	BlockOpen12 = "Bl" + levelIndex;
// 	BlockOpen1 = document.getElementById(BlockOpen12);
// 	BlockOpen12 = "Bl" + levelIndex;


// return levelIndex;

// };

// if (systemName = "Образцы и Стенды") {
// 		console.log(tableNote);
// 	} else {
// let systemName = "systemName";
// let tableWidth = "";
// let tableHeight = "";
// let tablecontrol = "";
// let tableNote = "";
// let tableNote0 = "";
// let tableNote1 = "";
// let tableNote2 = "";
// };


		$('table').append('<tr><th>Система и Название</th><th>Шир. мм.</th><th>Выс. мм.</th><th>Упр-е</th><th>Доп. компл. и примечание</th><th>Стоим-ть (дол.)</th><th>X</th></tr>');
		


//let tablePrice = "tablePrice";
//systemName = systemName1 + systemName2 + systemName3 + systemName4
//console.table(systemName);

		const zacazTable = [systemName, tableWidth, tableHeight, tablecontrol, tableNote, sum];

	// ПРИ НАЖАТИИ КНОПКИ " ДОБАВИТЬ В КОРЗИНУ"
$('#dobavit').submit(function(e){ //по клику на сабмит
	
   e.preventDefault(); //предотвращаем отправку формы
   //создаём внутри таблицы ячейки и выводим туда данные из формы
	console.table(tableNote);
	if (index1 === 7) {
		console.table(tableNote);
		
	} else {
		systemName = systemName1 + systemName2 + systemName3
		tableNote = tableNote0 + tableNote1 + tableNote2;
	};
	
	console.table(tableNote);
	sum = sum.toFixed(2);
	//const zacazTable = [systemName, tableWidth, tableHeight, tablecontrol, tableNote, sum];
	const zacazTable = [systemName, tableWidth, tableHeight, tablecontrol, tableNote, sum];
	
	

				




	// console.log(fabricTypconsole.table(zacazTable);eHeightVal);
	// console.log(fabricTypeControlVal);

		// if (n <= 1) {


   $('table').append('<tr> <td>' + zacazTable[0] +
		'</td> <td align="center">' + zacazTable[1] +
		'</td> <td align="center"> '+ zacazTable[2]+
		'</td> <td>' + zacazTable[3]+
		'</td> <td>' + zacazTable[4] +
		'</td> <td align="center">' + zacazTable[5] +
		'</td> <td class="delete"><b>X</b></td></tr>');
	// }
	// else {
	// $('table').append('<tr> <td>' + $('#catalog option:selected').text() +
	// '</td> <td>' + $('#Bl4').val() +
	// '</td> <td> '+ $('#Bl4_1').val()+
	// ' </td> <td>' + $(BNT).val() +
	// '</td> <td>' + $(gl).text() +
	// '</td> <td>' + $('#Bl4_1_1_0 option:selected').text() +
	// '</td> <td>' + $('#Bl4_1_1_10 option:selected').text() +
	// '</td> <td>' + `${VRadio1} ${Cl_id_1} ${Cl_id_2}`+
	// '</td> <td>' + $(gl).val()+
	// '</td><td class="delete"><b>X</b></td></tr>');};
	// $('input').not('[type="submit"]').val(''); //очищаем поля формы
	// n=n+1;
	// console.log(n);


	// $('table').append('<tr> <td>' + `${IzdelVal} ${nameSystems} ` +
	// '</td> <td>' + `$(Bl4).val() $('#Bl4_1').val()` +
	// '</td> <td> '+ $('#Bl4_1').val()+
	// '</td> <td>' + $(BNT).val() +
	// '</td> <td>' + $(gl).text() +
	// '</td> <td>' + $('#Bl4_1_1_0 option:selected').text() +
	// '</td> <td>' + $('#Bl4_1_1_10 option:selected').text() +
	// '</td> <td>' + `${VRadio1} ${Cl_id_1} ${Cl_id_2}` +
	// '</td> <td>' + $(gl).val()+
	// '</td><td class="delete"><b>X</b></td></tr>');






	// myFunction();
	// function myFunction() {
	// 	var rad=document.getElementsByName('r1');
	// 	for (var i=0;i<rad.length; i++) {
	// 	if (rad[i].checked) {
	// 		txt = document.getElementById(rad[i]);
			
	// 		alert('Выбран '+ txt +' radiobutton');
	// 			console.log(txt);
	// 		}
	// 		}
	// 		document.getElementById(txt).value = "You ordered a coffee with: " + txt;
	// 	}		

				let div = document.querySelector('article').createElement('div');
				div.className = "alert";
				div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
	

});

$('table').on('click', '.delete', function(){ //по клику на крестик удаляем строку
	$(this).closest('tr').remove();
	
});

// document.querySelector("#submit").onclick = function(){
// event.preventDefault();
// }


