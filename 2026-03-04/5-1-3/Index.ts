// 1. 기본 원시 타입과 배열
// 학생의 이름(문자열), 나이(숫자), 졸업여부(불리언), 수강과목(문자열 배열)
// 변수를 선언하세요.
let studentName: string = "이승주";
let studentAge: number = 34;
let isGraduated: boolean = false;
let subjects: string[] = ["Math", "English"];

// 2. 튜플
// 3차원 공간의 좌표 [x, y, z]를 나타내는 튜플 타입 `Point3D`를 선언하세요.
type Point3D = [number, number, number];
const myPoint: Point3D = [23, 44, 55];

// 3. 리터럴과 유니온
// 사용자 역할(Role)을 "admin", "manager", "user"
// 셋 중 하나만 가능하도록 선언하세요.
type Role = "admin" | "manager" | "user";
const myRole = "admin";

// 4. 객체와 Record
// 과목명(문자열)을 키로, 점수(숫자)를 값으로 갖는 `SubjectScores` 타입을
// Record로 선언하세요.
type SubjectScores = Record<string, number>;
const scores: SubjectScores = { 영어: 100 };

// 5. 교차 타입 (Intersection)
// BasicUser(이름, 나이)와 Contact(이메일, 전화번호) 객체 타입을 선언하고,
// 두 타입을 합친 `EmployeeProfile` 타입을 만드세요.
type BasicUser = { name: string; age: number };
type Contact = { email: string | number; contact: string };
type EmployeeProfile = BasicUser & Contact;

// 6. 함수 시그니처와 매개변수 타입
// EmployeeProfile 객체를 받아서, "해고됨" 또는 "승진함" 문자열을 반환하는
// 화살표 함수 `evaluateEmployee`를 선언하고 알맞은 타입을 지정하세요.
let evaluateEmployee = (emp: EmployeeProfile): "해고됨" | "승진함" => {
  if (emp.age > 33) return "승진함";
  return "해고됨";
};
