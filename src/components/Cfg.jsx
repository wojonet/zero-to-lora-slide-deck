const Cfg = ({ cfg }) => {
  const src = `img/cfg/bs_cfg_${cfg.toFixed(1).toString().replace('.', '')}.png`
  const ctrl = cfg === 7.5 ? 'blue' : 'inherit'
  return (
    <section data-transition="none">
      <p
        className="r-fit-text"
        style={{
          color: ctrl,
        }}
      >
        sdxl, step 49, cfg: {cfg}, sampler: euler, scheduler: karras
      </p>
      <img className="r-stretch" data-src={src} alt={`Cfg value ${cfg}`} />
    </section>
  )
}

export default Cfg
