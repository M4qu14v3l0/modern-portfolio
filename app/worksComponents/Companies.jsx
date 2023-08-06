
const companies = [
  { name: 'Analytic', date: '03/2023', dateEnd: 'current' },
  { name: 'Motion Pulse', date: '05/2023', dateEnd: 'current' },
  { name: 'Workana', date: '04/2022', dateEnd: 'current' },
  { name: 'No-Country', date: '05/2022', dateEnd: '03/2023' }

]

export default function Companies () {
  return (
    <section>
      <h3>I've work in...</h3>
      <div className='sub-section'>
        {
companies.map((company, index) => (
  <div className='header-company' key={index}>
    <h2> {company.name} </h2>
    <div className='date-work'>
      <span>{company.date}</span>
      <span> - </span>
      <span>{company.dateEnd}</span>
    </div>
  </div>
))
}
      </div>

    </section>
  )
}
