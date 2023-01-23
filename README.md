# poc-typescript

## Routes:

### POST: /student
Body: {"name":"Vladmir José","cpf":"12345678945", "birthday":"1956-11-25"}
- name: string
- cpf: string
- birthday: string on the IsoDate format
<hr/>

### GET: /student
Body: {"cpf":"98745612345"} 

<hr/>

### PUT: /student/{cpf}
{cpf} : Inform cpf on route using only numbers.

Body: {"name":"Rosa Maria", birthday:"1970-02-15"}

Obs1: It is not possible to alter the CPF of a student, only the name and/or their birth date.

Obs: If you wish to change only one of the fields of a student's record, repeat the already recorded value of the field you wish to stay the same while sending the body.

Exemple: In order to change the birth date of a student called "Antonio Gallardo" from "1983-05-14" to "1983-03-15":

Body:{"name":"Antonio Gallardo", "birthday":"1983-03-15"}
<hr/>

### DELETE: /student/{cpf}
{cpf} : Inform cpf on route using only numbers.