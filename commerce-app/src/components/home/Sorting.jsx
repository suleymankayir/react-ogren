import React from 'react'

const Sorting = () => {
  return (
    <div className='my-5 p-5 bg-gray-100 flex items-center justify-end'>
      <select className='bg-white py-3 px-5' name="" id="">
        <option disabled value="">Seçiniz</option>
        <option value="Inc">Artan</option>
        <option value="Dec">Azalan</option>
      </select>
    </div>
  )
}

export default Sorting