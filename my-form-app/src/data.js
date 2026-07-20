let students = [
  {
    prn: "101",
    name: "raj",
    email: "raj@tka.com ",
    m1: 33,
    m2: 44,
    m3: 55,
    total: 66,
    percent: 77,
  },
];

export const showAllStudents = () => students;

export const addStudent = (std) => {
  students = [...students, std];
};

export const deleteByPRN = (prn) => {
  const newAll = students.filter((s) => s.prn != prn);
  students = newAll;
};
