dineroCofla = prompt ("¿Cuanto dinero tienes Cofla?");
dineroRoberto = prompt ("¿Cuanto dinero tienes Roberto?");
dineroPedro = prompt ("¿Cuanto dinero tienes Pedro?");

dineroCofla = parseInt(dineroCofla);
dineroPedro = parseInt(dineroPedro);
dineroRoberto = parseInt(dineroRoberto);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla Comprate el palito helado de agua");
    alert("y te sobran" + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla Comprate el palito helado de crema");
    alert("y te sobran" + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla Comprate el helado marca Heladix");
    alert("y te sobran" + (dineroCofla - 1.6));
}
else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Cofla Comprate el helado marca Heladovich");
    alert("y te sobran" + (dineroCofla - 1.7));
}
else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("Cofla Comprate el helado marca Helardo");
    alert("y te sobran" + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9) {
    alert("Cofla Comprate el helado con confites o el pote de 1/4kg");
    alert("y te sobran" + (dineroCofla - 2.9));
}
else {
alert("Cofla Lo siento, no te alcanza para ningun helado");
}




if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, Comprate el palito helado de agua");
    alert("y te sobran" + (dineroRoberto - 0.6));
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto, comprate el palito helado de crema");
    alert("y te sobran" + (dineroRoberto - 1));
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto, comprate el helado marca Heladix");
    alert("y te sobran" + (dineroRoberto - 1.6));
}
else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("Roberto, comprate el helado marca Heladovich");
    alert("y te sobran" + (dineroRoberto - 1.7));
}
else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("Roberto, comprate el helado marca Helardo");
    alert("y te sobran" + (dineroRoberto - 1.8));
}
else if (dineroRoberto >= 2.9) {
    alert("Roberto, comprate el helado con confites o el pote de 1/4kg");
    alert("y te sobran" + (dineroRoberto - 2.9));
}
else {
alert("Roberto, lo siento, no te alcanza para ningun helado");
}




if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, comprate el palito helado de agua");
    alert("y te sobran" + (dineroPedro - 0.6));
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro, comprate el palito helado de crema");
    alert("y te sobran" + (dineroPedro - 1));
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro, comprate el helado marca Heladix");
    alert("y te sobran" + (dineroPedro - 1.6));
}
else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Pedro, comprate el helado marca Heladovich");
    alert("y te sobran" + (dineroPedro - 1.7));
}
else if(dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("Pedro, comprate el helado marca Helardo");
    alert("y te sobran" + (dineroPedro - 1.8));
}
else if (dineroPedro >= 2.9) {
    alert("Pedro, comprate el helado con confites o el pote de 1/4kg");
    alert("y te sobran" + (dineroPedro - 2.9));
}
else {
alert("Pedro, lo siento, no te alcanza para ningun helado");
}