const Scheduler = ({ scheduler }) => {
  const ctrl = scheduler.name === 'karras' ? 'blue' : 'inherit'
  return (
    <section data-transition="none">
      <p
        className="r-fit-text"
        style={{
          color: ctrl,
        }}
      >
        sdxl, step 49, cfg: 7.5, sampler: euler, scheduler: {scheduler.name}
      </p>
      <img
        className="r-stretch"
        data-src={`img/scheduler/bs_sch_${scheduler.item.toString().padStart(5, '0')}_.png`}
        alt={`Scheduler ${scheduler.name}`}
      />
    </section>
  )
}

export default Scheduler
