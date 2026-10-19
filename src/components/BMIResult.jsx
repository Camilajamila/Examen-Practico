import './BMIResult.css'

/**
 * Muestra el resultado del cálculo: valor del IMC y su categoría.
 * La categoría se resalta con un color según el rango obtenido.
 */
export default function BMIResult({ result }) {
  if (!result) {
    return (
      <div className="bmi-result bmi-result--empty" aria-live="polite">
        <p className="bmi-result__placeholder">
          El resultado de tu IMC aparecerá aquí.
        </p>
      </div>
    )
  }

  const { bmi, category } = result

  return (
    <div
      className={`bmi-result bmi-result--${category.key}`}
      aria-live="polite"
    >
      <p className="bmi-result__value">
        Tu IMC es <strong>{bmi}</strong>
      </p>
      <p className="bmi-result__category">{category.label}</p>
    </div>
  )
}
