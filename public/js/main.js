var campo = $(".campo-digitacao");
var tempoInicial = $("#tDigitacao").text();

$(document).ready(function(){
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	inicializaMarcadores();
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
				//campo.css("background-color","lightgrey");
				campo.toggleClass("campo-desativado");
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
		campo.toggleClass("campo-desativado");
		campo.removeClass("borda-verde");
		campo.removeClass("borda-vermelha");
	};	

var inicializaMarcadores = function(){
	var frase = $(".frase").text();
	campo.on("input", function(){
		var digitado = campo.val();
		var comparavel = frase.substr(0, digitado.length);		

		if(digitado == comparavel){
			campo.addClass("borda-verde");
			campo.removeClass("borda-vermelha")
		}else{
			campo.addClass("borda-vermelha");
			campo.removeClass("borda-verde");
		}


	});

}



