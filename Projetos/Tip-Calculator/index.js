function formatMoney(value) {
  value = Math.ceil(value * 100) / 100;

  value = value.toFixed(2);
  return "R$ " + value;
}

function formatSplit(value) {
  if (value == 1) return value + " pessoa";
  return value + " pessoas";
}

function update() {
  const billValue = Number(document.getElementById("yourBill").value);
  const tipPercent = document.getElementById("tipInput").value;
  const split = document.getElementById("splitInput").value;
  const splitValue = document.getElementById("splitValue");
  // calculando a gorjeta e dividindo pela quantidade de pessoas
  const tipValue = billValue * (tipPercent / 100);
  const totalValue = billValue + tipValue;
  const eachValue = totalValue / split;
  //   exibindo a porcentagem no html
  document.getElementById("tipPercent").innerHTML = tipPercent + "%";
  //   exibindo o valor da gorjeta no html
  document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
  //   exibindo o valor total no html
  document.getElementById("totalWithTip").innerHTML = formatMoney(totalValue);
  //   exibindo o valor de cada pessoa no html
  document.getElementById("splitValue").innerHTML = formatSplit(split);
  document.getElementById("billEach").innerHTML = formatMoney(eachValue);
}
