var campo = $(".campo-digitacao");
var tempoInicial = $("#tDigitacao").text();

$(document).ready(function(){
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	$("#botao-reiniciar").click(reiniciaJogo);

	});

var atualizaTamanhoFrase = function(){
	var frase = $(".frase").text();
	var numeroPalavras = frase.split(" ").length;
	$("#nPalavras").text(numeroPalavras);
};


var inicializaContadores = function(){
	campo.on("input", function(){
	var conteudo = campo.val();
	var contPalavras = conteudo.split(/\S+/).length -1;
	$("#contador-palavras").text(contPalavras);
	var contCaracteres = conteudo.length;
	$("#contador-caracteres").text(contCaracteres);
});

};


var inicializaCronometro = function(){
	var tRestante = $("#tDigitacao").text();
	$("#botao-reiniciar").attr("disabled", true);
	campo.one("focus", function(){
		var cronometroID = setInterval(function(){
			tRestante--;
			console.log(tRestante);
			$("#tDigitacao").text(tRestante);
			if(tRestante < 1){
				clearInterval(cronometroID);
				campo.attr("disabled", true);
				$("#botao-reiniciar").attr("disabled", false);
			}
		},1000);

	});

};


var reiniciaJogo = function(){
		campo.val("");
		campo.attr("disabled", false);
		$("#contador-caracteres").text("0");
		$("#contador-palavras").text("0");
		$("#tDigitacao").text(tempoInicial);
		inicializaCronometro();
	};	



