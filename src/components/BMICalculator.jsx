import { useState } from 'react'
import BMIForm from './BMIForm.jsx'
import BMIResult from './BMIResult.jsx'
import {
  validateBMIForm,
  calculateBMI,
  getBMICategory,
} from '../utils/bmi.js'
import './BMICalculator.css'

/** Estado inicial del formulario (campos vacíos). */
const INITIAL_FORM = { peso: '', altura: '' }

/**
 * Componente principal de la calculadora.
 * Gestiona con useState: los datos del formulario, los errores de
 * validación y el resultado del cálculo del IMC.
 */
export default function BMICalculator() {
  // Datos controlados del formulario
  const [formData, setFormData] = useState(INITIAL_FORM)
  // Mensajes de validación por campo
  const [errors, setErrors] = useState({})
  // Resultado del cálculo: { bmi, category }
  const [result, setResult] = useState(null)

  /**
   * Maneja los cambios de los inputs controlados.
   * Limpia el error del campo mientras el usuario escribe.
   */
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  /**
   * Valida los datos y, si son válidos, calcula el IMC.
   * Si hay errores, los muestra y NO realiza el cálculo.
   */
  const handleSubmit = (event) => {
    event.preventDefault()

    // 1) Validaciones estrictas
    const validationErrors = validateBMIForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setResult(null)
      return
    }

    // 2) Cálculo del IMC con valores numéricos
    const peso = Number(formData.peso)
    const altura = Number(formData.altura)
    const bmi = calculateBMI(peso, altura)
    const category = getBMICategory(bmi)

    setErrors({})
    setResult({ bmi, category })
  }

  /** Restablece formulario, errores y resultado. */
  const handleReset = () => {
    setFormData(INITIAL_FORM)
    setErrors({})
    setResult(null)
  }

  return (
    <section className="calculator" aria-labelledby="calculator-heading">
      <h2 id="calculator-heading" className="sr-only">
        Formulario de cálculo de IMC
      </h2>

      <BMIForm
        formData={formData}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onReset={handleReset}
        hasResult={Boolean(result)}
      />

      <BMIResult result={result} />
    </section>
  )
}
