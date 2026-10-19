import './BMIForm.css'

/**
 * Formulario controlado con los campos de peso y altura.
 * Muestra mensajes de error accesibles (role="alert") cuando la
 * validación falla, e impide el envío con datos inválidos.
 */
export default function BMIForm({
  formData,
  errors,
  onChange,
  onSubmit,
  onReset,
  hasResult,
}) {
  return (
    <form className="bmi-form" onSubmit={onSubmit} noValidate>
      {/* Campo: Peso (kg) */}
      <div className={`field ${errors.peso ? 'field--error' : ''}`}>
        <label className="field__label" htmlFor="peso">
          Peso (kg)
        </label>
        <input
          className="field__input"
          type="number"
          id="peso"
          name="peso"
          inputMode="decimal"
          step="0.1"
          min="0.1"
          placeholder="Ej: 70.5"
          value={formData.peso}
          onChange={onChange}
          aria-invalid={errors.peso ? 'true' : 'false'}
          aria-describedby={errors.peso ? 'peso-error' : undefined}
        />
        {errors.peso && (
          <p className="field__error" id="peso-error" role="alert">
            {errors.peso}
          </p>
        )}
      </div>

      {/* Campo: Altura (m) */}
      <div className={`field ${errors.altura ? 'field--error' : ''}`}>
        <label className="field__label" htmlFor="altura">
          Altura (m)
        </label>
        <input
          className="field__input"
          type="number"
          id="altura"
          name="altura"
          inputMode="decimal"
          step="0.01"
          min="0.01"
          placeholder="Ej: 1.75"
          value={formData.altura}
          onChange={onChange}
          aria-invalid={errors.altura ? 'true' : 'false'}
          aria-describedby={errors.altura ? 'altura-error' : 'altura-help'}
        />
        <p className="field__help" id="altura-help">
          Usa metros y puntos decimales (ej: 1.75).
        </p>
        {errors.altura && (
          <p className="field__error" id="altura-error" role="alert">
            {errors.altura}
          </p>
        )}
      </div>

      {/* Acciones del formulario */}
      <div className="bmi-form__actions">
        <button className="btn btn--primary" type="submit">
          Calcular
        </button>
        <button
          className="btn btn--ghost"
          type="button"
          onClick={onReset}
          disabled={!hasResult && !formData.peso && !formData.altura}
        >
          Limpiar
        </button>
      </div>
    </form>
  )
}
