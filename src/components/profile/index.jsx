import ProfileForm from './ProfileForm';

const Index = () => {
  return (
    <div>
      <div className='flex flex-col items-center mt-5'>
        <div className='w-28 h-28 rounded-full flex justify-center items-center mr-2 border bg-primary text-6xl text-white font-semibold'>
          C
        </div>
        <p className='text-secondary mt-3 text-lg'>Ukpai Cordelia</p>
        <p className='text-sm text-[#313A51] font-medium'>cordelia@gmail.com</p>
      </div>
      <ProfileForm formIsDiabled={true} />
    </div>
  );
};

export default Index;
