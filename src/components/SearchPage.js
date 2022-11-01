import { useContext } from "react"
import { Context } from "./Context"
import Card from './Card'

const SearchResults = () => {

    const {state} = useContext(Context)

    const results = state.products.filter(item => item.title.includes(state.searchText))
  return (
    <div className='flex justify-center items-center flex-wrap gap-[20px]'>
        {
            results.map((item, idx) => <Card key={idx} product={item}/>)
        }
    </div>
  )
}

export default SearchResults