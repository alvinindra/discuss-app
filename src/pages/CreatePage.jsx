import Card from '@/components/Base/Card/Card'
import Navigation from '@/components/Navigation/Navigation'
import Tags from '@/components/Tags/Tags'

function CreatePage() {
  return (
    <div className="bg-brand-secondary">
      <div className="sm:container mx-auto pt-[78px] min-h-100vh grid grid-cols-4">
        <div className="sm:col-span-3 col-span-3 px-4">
          <Card>
            <h1>Create new discussion</h1>
            <form className="flex flex-col">
              <div className="mb-6">
                <input
                  className="bg-gray-50 border border-solid border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  type="text"
                  placeholder="Title"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  className="bg-gray-50 border border-solid border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  type="text"
                  placeholder="Category"
                />
              </div>
              <div className="mb-6">
                <textarea
                  className="bg-gray-50 border border-solid border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="Content"
                  rows={5}
                  required
                ></textarea>
              </div>
              <div className="ms-auto mb-6">
                <button
                  type="button"
                  className="decoration-none bg-brand-primary w-100 border-0 py-3 border-rounded-2 text-white font-semibold text-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </Card>
        </div>
        <div className="sm:col-span-1 col-span-3 sm:ps-4 ps-8">
          <Navigation />
          <Tags />
        </div>
      </div>
    </div>
  )
}

export default CreatePage
