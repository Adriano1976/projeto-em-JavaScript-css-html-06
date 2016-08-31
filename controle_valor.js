function calcular_troco(valor_total,valor_pago)
{
	var troco = valor_total - valor_pago;
	return troco;
}

function mostrar_troco(form)
{
	var troco = calcular_troco	
		(parseFloat(form.valor_total.value),
		parseFloat(form.valor_pago.value)); 

		if (troco > 0)
			alert("Falta pagar R$ " + Math.abs(troco))
		if (troco < 0)
			alert("Seu troco é R$ " + Math.abs(troco))
		if (troco == 0)
			alert("Muito Obrigado e volte sempre!")
		
}