import { useState } from 'react'

function App() {
  const initial_articles = [
    'Smartphone',
    'Headphones',
    'Tablet',
    'TV',
    'PS5',
  ]

  const [newArticle, setNewArticle] = useState('')
  const [articles, setArticles] = useState(initial_articles)

  function handleSubmit (e) {
    e.preventDefault()
    console.log(newArticle);

    setArticles([...articles, newArticle])
  }

  return (
    <>

      <div className="container mt-5">
        <ul className='list-group'>
          {articles.map((article, index) => {
            return (
              <li key={index} className='list-group-item d-flex justify-content-between'>{article}
                <div className='d-flex gap-3'>
                  <button className='btn btn-primary'><i className="bi bi-pencil-fill"></i></button>
                  <button className='btn btn-danger'><i className='bi bi-trash3-fill'></i></button>
                </div>
              </li>
            )
          })}
        </ul>
        
        <form onSubmit={handleSubmit}>
          <div className="d-flex gap-3 mt-4">
            <input className='form-control' placeholder='Insert new article' type="text" value={newArticle} onChange={event => setNewArticle(event.target.value)} />
            <button type='submit' className='btn btn-success'>
              <i className='bi bi-floppy-fill'></i> Save
            </button>
          </div>
        </form>
      </div>

    </>
  )
}

export default App