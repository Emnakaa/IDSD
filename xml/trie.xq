xquery version "3.1";

let $etudiants := doc("etudiants.xml")//etudiant
let $resultats := 
  for $etudiant in $etudiants
  where $etudiant/moyenne >= 16
  let $matieres := 
    for $matiere in $etudiant/matieres/matiere
    where $matiere/note > 15
    return <matiere>
             <nom>{ $matiere/nom/text() }</nom>
             <note>{ $matiere/note/text() }</note>
           </matiere>
  order by $etudiant/moyenne descending
  return <etudiant>
           <nom>{ $etudiant/nom/text() }</nom>
           <moyenne>{ $etudiant/moyenne/text() }</moyenne>
           <niveau>{ $etudiant/niveau/text() }</niveau>
           <matieres>{ $matieres }</matieres>
         </etudiant>
return <resultats>{ $resultats }</resultats>