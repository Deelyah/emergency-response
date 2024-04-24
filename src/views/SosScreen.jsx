const SosScreen = () => {
  return (
    <div className='w-full h-screen'>
      <div className='w-full'>
        <div className='w-full h-16 bg-primary flex items-center justify-center'>
          <p className='text-white font-semibold w-full text-center text-xl'>
            Emergency
          </p>
        </div>
      </div>
      <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
        <button className='rounded-full p-2.5 bg-[#f8dee1f5]'>
          <div className='rounded-full p-2.5 bg-[#fcb0b9]'>
            <div className='w-40 h-40 rounded-full bg-primary flex justify-center items-center'>
              <p className='text-6xl text-white font-semibold'>SOS</p>
            </div>
          </div>
        </button>
        <div className='w-3/4'>
          <p className='text-center mt-10 text-sm font-medium text-secondary'>
            After clicking the SOS button, we&apos;ll send an alert to UNN
            medical center as well to all your emergency contacts
          </p>
        </div>
      </div>
    </div>
  );
};

export default SosScreen;
