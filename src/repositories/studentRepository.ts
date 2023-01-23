import { connection } from "../database/db.js";
import { Student } from "../protocols/student.js";

export function insertStudent(student: Student) {
	connection.query(
		`
            INSERT INTO
                students (name, cpf, birthday)
            VALUES
                ($1, $2, $3)
        `,
		[student.name, student.cpf, student.birthday]
	);
}

export async function isNewStudent(cpf: string): Promise<boolean> {
	const response = await connection.query(
		`
        SELECT
            NOT EXISTS(
                SELECT
                    true
                FROM
                    students
                WHERE
                    cpf = $1
            ) AS "existingStudent";
    `,
		[cpf]
	);
	const output: boolean = response.rows[0].existingStudent;
	return output;
}

export async function getStudentInfoByCpf(cpf: string) {
	return connection.query(
		`
        SELECT
            name, TO_CHAR(birthday, 'DD-MM-YYYY') AS birthday, TO_CHAR(enrollment, 'DD-MM-YYYY HH24:MI:SS') AS enrollment
        FROM
            students
        WHERE
            cpf = $1
    `,
		[cpf]
	);
}

export function updateStudent(cpf: string, newName: string, newBirthday: Date) {
	connection.query(
		`
        UPDATE
            students
        SET
            name= $1, birthday =$2
        WHERE
            cpf = $3
        `,
		[newName, newBirthday, cpf]
	);
}

export function deleteStudent(cpf: string) {
	connection.query(
		`
        DELETE FROM
            students
        WHERE
            cpf=$1
        `,
		[cpf]
	);
}
