const PosOrderItemComponent = () => {
  return (
    <div className='card bg-base-200 w-full my-2 cursor-grab active:cursor-grabbing'>
      <div className='card-body p-3 flex flex-row justify-between items-center'>
        <div className="flex flex-row">
          <img
            src='https://reqres.in/img/faces/1-image.jpg'
            width={40}
            height={40}
            alt=''
            className='rounded-xl'
          />
          <div className="mx-2">
            <div className='text-sm'>Fish</div>
            <div className='text-sm'>Rp. 50.4454</div>
          </div>
        </div>
        <div>
          <span className="bg-slate-600 text-white rounded-lg text-lg p-2 px-3.5 mx-1 cursor-pointer">-</span>
          <span className="bg-white text-black shadow rounded-lg text-lg p-2 px-3 mx-1">0</span>
          <span className="bg-slate-600 text-white rounded-lg text-lg p-2 px-3 mx-1 cursor-pointer">+</span>
        </div>
      </div>
    </div>
  )
};

export default PosOrderItemComponent;
