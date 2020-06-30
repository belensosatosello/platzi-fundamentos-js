// Clase 16 - Switch 
var signo = prompt('Cual es tu signo?')

console.log(signo);


switch(signo){
  case 'aries':
    console.log('Prepárese, ya que transitará por una jornada repleta de muchas sorpresas de una persona que no esperaba. No permita que el mal humor interfiera en su éxito personal.');
    break
  case 'tauro':
    console.log('Seguramente en esta jornada, se cruce con gente un poco agresiva. Despreocúpese, porque muchas de las ironías y las críticas que le hagan lo tendrán sin cuidado.');
    break
  case 'geminis':
  case 'géminis':
    console.log('Aprenda que siempre hay que mirar hacia delante por más que nos equivoquemos. Todo lo que paso es parte del paso, no se empecine en revisar minuciosamente los detalles.');
    break
  case 'cancer':
  case 'cáncer':
    console.log('Debería tomar todos los recaudos de aquellas personas que repentinamente le ofrecen todo tipo de ayuda. Su percepción le hará descubrir la verdad.');
    break
  case 'leo':
    console.log('No es momento para desvalorizarse frente a los demás. Comience a mirar a la gente que lo rodea y comprobará que usted tiene las mismas oportunidades.');
    break
  case 'virgo':
    console.log('Esté precavido en estos días, ya que una persona externa a su vida podría alejarlo de sus objetivos más soñados. Observe bien con quién se relaciona.');
    break
  case 'libra':
    console.log('Durante esta jornada deberá mantenerse tranquilo, de contrario, no estará apto para solucionar ninguno de los problemas. Relájese, así podrá solucionar todo.');
    break
  case 'escorpio':
    console.log('En este día, la melancolía podría apoderarse por completo de usted. Si deja de pensar en cosas tristes, encontrará la forma adecuada para enfrentarla.');
    break
  case 'sagitario':
    console.log('Deberá ser más cuidadoso y más selectivo en las relaciones que tiene. Evite depositar la confianza en todas las personas que lo rodean habitualmente.');
    break
  case 'capricornio':
    console.log('Deje de obstinarse en que todo se haga a su modo. Permita que los demás manifiesten sus opiniones, de lo contrario, será rechazado por la gente que lo rodea.');
    break
  case 'acuario':
    console.log('Probablemente sus propios temores lo amenazarán con disuadirlo. Hoy, será el momento para dejar de lado la prudencia y enfrentarse a ciertos riesgos.');
    break
  case 'piscis':
    console.log('Durante la tarde, tendrá un encuentro asombroso con alguien que no esperaba conocer y que podría cambiarle la vida. Esté preparado para la ocasión.');
    break
  default:
    console.log('Signo Invalido')
    break
}
