import BMICalculator from './components/BMICalculator.jsx'

/**
 * Componente raíz de la aplicación.
 * Encapsula el encabezado y el formulario calculadora de IMC.
 */
export default function App() {
  return (
    <main className="app">
      <header className="app__header">
        <h1 className="app__title">Calculadora de IMC</h1>
        <p className="app__subtitle">
          Ingresa tu peso y tu altura para conocer tu Índice de Masa Corporal
          y la categoría en la que te encuentras.
        </p>
      </header>

      <BMICalculator />

      <footer className="app__footer">
        <p>
          Referencia: rangos de IMC para adultos según la OMS. Esta
          herramienta es orientativa y no sustituye una evaluación médica.
        </p>
      </footer>
    </main>
  )
}
