const Step = ({ step }) => {
  const newStep = step > 47 ? step + 1 : step
  const ctrl = newStep === 49 ? 'blue' : 'inherit'
  return (
    <section data-transition="none">
      <p
        className="r-fit-text"
        style={{
          color: ctrl,
        }}
      >
        sdxl, step {newStep}, cfg: 7.5, sampler: euler, scheduler: karras
      </p>
      <img
        className="r-stretch"
        data-src={`img/steps/becca_stepz_${step.toString().padStart(5, '0')}_.png`}
        alt={`Step ${newStep}`}
      />
    </section>
  )
}

export default Step
