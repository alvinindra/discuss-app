import Card from '@/components/Base/Card/Card'
import Navigation from '@/components/Navigation/Navigation'
import { asyncAddThread } from '@/states/discussions/action'
import { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function CreatePage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialFormCreateDiscuss = {
    title: '',
    body: '',
    category: '',
  }

  const [formCreateDiscuss, setFormCreateDiscuss] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    initialFormCreateDiscuss
  )

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setFormCreateDiscuss({ [name]: value })
  }

  const handleSubmitCreateDiscuss = (event) => {
    event.preventDefault()
    dispatch(asyncAddThread({ ...formCreateDiscuss }))
    navigate('/')
  }

  return (
    <div className="bg-brand-secondary">
      <div className="lg:container lg:px-4 mx-auto pt-[48px] min-h-100vh grid grid-cols-4">
        <div className="lg:col-span-3 col-span-3 px-4">
          <Card>
            <h1>Create new discussion</h1>
            <form className="flex flex-col" onSubmit={handleSubmitCreateDiscuss}>
              <div className="mb-6">
                <input
                  className="bg-gray-50 border border-solid border-gray-300 text-gray-900 lg:text-sm rounded-lg block w-full p-2.5"
                  type="text"
                  name="title"
                  placeholder="Title"
                  required
                  onChange={handleFormChange}
                />
              </div>
              <div className="mb-6">
                <input
                  className="bg-gray-50 border border-solid border-gray-300 text-gray-900 lg:text-sm rounded-lg block w-full p-2.5"
                  type="text"
                  name="category"
                  placeholder="Category"
                  onChange={handleFormChange}
                />
              </div>
              <div className="mb-6">
                <textarea
                  className="bg-gray-50 border border-solid border-gray-300 text-gray-900 lg:text-sm rounded-lg block w-full p-2.5"
                  placeholder="Content"
                  name="body"
                  rows={5}
                  required
                  onChange={handleFormChange}
                ></textarea>
              </div>
              <div className="ms-auto mb-6">
                <button
                  type="submit"
                  className="decoration-none bg-brand-primary w-100 border-0 py-3 border-rounded-2 text-white font-semibold text-center cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </Card>
        </div>
        <div className="lg:col-span-1 col-span-3 lg:ps-4 ps-8">
          <Navigation />
        </div>
      </div>
    </div>
  )
}

export default CreatePage
