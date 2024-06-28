function guardrail(mathFunction) {
  const arr = [];
  try {
    arr.push(mathFunction());
  } catch (error) {
    arr.push(`Error: ${error.message}`);
  } finally {
    arr.push('Guardrail was processed');
  }
  return arr;
}
export default guardrail;
