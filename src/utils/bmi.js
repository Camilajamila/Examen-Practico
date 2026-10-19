/**
 * Utilidades de negocio para el cálculo del Índice de Masa Corporal (IMC).
 * Fórmula: IMC = peso (kg) / (altura (m) * altura (m))
 */

/** Rangos estándar de IMC (adultos) y sus metadatos de presentación. */
export const BMI_RANGES = [
  { max: 18.5, label: 'Bajo peso', key: 'bajo-peso' },
  { max: 25, label: 'Peso normal', key: 'normal' },
  { max: 30, label: 'Sobrepeso', key: 'sobrepeso' },
  { max: Infinity, label: 'Obesidad', key: 'obesidad' },
]

/**
 * Valida los campos del formulario.
 * @param {{ peso: string, altura: string }} values - Valores crudos del formulario
 * @returns {Object} Objeto con los mensajes de error (vacío si todo es válido)
 */
export function validateBMIForm({ peso, altura }) {
  const errors = {}

  // Validación de peso
  if (peso.trim() === '') {
    errors.peso = 'El peso es obligatorio.'
  } else if (Number.isNaN(Number(peso)) || Number(peso) <= 0) {
    errors.peso = 'El peso debe ser un número mayor a cero.'
  }

  // Validación de altura
  if (altura.trim() === '') {
    errors.altura = 'La altura es obligatoria.'
  } else if (Number.isNaN(Number(altura)) || Number(altura) <= 0) {
    errors.altura = 'La altura debe ser un número mayor a cero.'
  }

  return errors
}

/**
 * Calcula el IMC con la fórmula oficial.
 * @param {number} peso - Peso en kilogramos
 * @param {number} altura - Altura en metros
 * @returns {number} IMC redondeado a un decimal
 */
export function calculateBMI(peso, altura) {
  const bmi = peso / (altura * altura)
  return Math.round(bmi * 10) / 10
}

/**
 * Determina la categoría del IMC según los rangos estándar.
 * @param {number} bmi - Valor del IMC
 * @returns {{ label: string, key: string }} Categoría y clave de estilo
 */
export function getBMICategory(bmi) {
  const range = BMI_RANGES.find((r) => bmi < r.max)
  return { label: range.label, key: range.key }
}
