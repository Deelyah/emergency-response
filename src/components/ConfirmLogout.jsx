import { useNavigate } from "react-router-dom";


const ConfirmLogout = ({ closeModal }) => {
    const navigateTo = useNavigate()
    const initateLogout = ()=>{
        navigateTo('/')
    }
  return (
    <div className='fixed inset-0 bg-[#00000046] backdrop-blur-sm z-10 flex justify-center items-center px-5'>
      <div className='rounded-lg bg-white w-fit px-5 py-10 shadow'>
        <div className=''>
          <h2 className='text-xl font-semibold text-[#313A51] text-center mb-8'>
            Are you sure you want to logout?
          </h2>
          <div className='flex'>
            <button
              className='bg-white text-primary w-1/2 mr-3 py-3 rounded-lg border border-primary'
              onClick={closeModal}
            >
              Cancel
            </button>
            <button className='bg-primary text-white w-1/2 ml-3 py-3 rounded-lg' onClick={initateLogout}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogout;
