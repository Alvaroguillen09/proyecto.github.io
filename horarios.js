function MiNombreFuncion()
{
document.writeln("<h1 align=\"center\">Horario escolar</h1>");
document.writeln("    <table align=\"center\" border=\"4\" bordercolor=\"purple\"");
document.writeln("    cellpadding=\"10\" cellspacing=\"20\">");
document.writeln("      <tr>");
document.writeln("        <th bgcolor=\"yellow\">Hora</th><th>Lunes</th><th>Martes</th><th>Miércoles</th>");
document.writeln("<th>Jueves</th><th>Viernes</th>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td>8-10</td><td align=\"center\" colspan=\"3\">Mate</td><td>Compu</td><td>Mate</td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td>10-12</td><td>Geografía</td><td>Historia</td><td>Geografía</td>");
document.writeln("<td>Historia</td><td>Geografía</td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td>12-14</td><td>Física</td><td>Inglés</td><td>Física</td><td align=\"center\" rowspan=\"2\">Inglés<br>y<br>Computación</td><td>Física</td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td>15-17</td><td>Anatomía</td><td>Karate</td><td>Karate</td><td>Karate</td></tr>");
document.writeln("</table>");
}