xquery version "1.0" encoding "UTF-8";

let $etudiants := doc("etudiants.xml")//etudiant
let $maxMoyenne := max($etudiants/moyenne)
for $etudiant in $etudiants
where $etudiant/moyenne = $maxMoyenne
return 
    <majeur>
        <nom>{ $etudiant/nom/text() }</nom>
        <moyenne>{ $etudiant/moyenne/text() }</moyenne>
        <niveau>{ $etudiant/niveau/text() }</niveau>
    </majeur>