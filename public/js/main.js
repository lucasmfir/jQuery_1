var frase = $(".frase").text();
var numeroPalavras = frase.split(" ").length;
$("#nPalavras").text(numeroPalavras);

var campo = $(".campo-digitacao");

campo.on("input", function(){
	var conteudo = campo.val();
	var contPalavras = conteudo.split(/\S+/).length -1;
	$("#contador-palavras").text(contPalavras);

	var contCaracteres = conteudo.length;
	$("#contador-caracteres").text(contCaracteres);
});

var tRestante = $("#tDigitacao").text();

campo.one("focus", function(){
	var cronometroID = setInterval(function(){
		tRestante--;
		console.log(tRestante);
		$("#tDigitacao").text(tRestante);
		if(tRestante < 1){
			clearInterval(cronometroID);
			campo.attr("disabled", true);
		}
	},1000);

});

