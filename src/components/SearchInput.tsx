import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export default function SearchInput() {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className="focus:ring-indigo-500 max-w-xl xl:max-w-none focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-xl"
          placeholder="Pesquisar evento"
        />
      </div>
    </div>
  )
}