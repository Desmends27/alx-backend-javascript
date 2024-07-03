export default function updateStudentGradeByCity(arr, city, newGrades) {
  if (Array.isArray(arr) && Array.isArray(newGrades)) {
    return arr.filter((obj) => obj.location === city).map((obj) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === obj.id);
      return {
        ...obj,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
  }
  return [];
}
