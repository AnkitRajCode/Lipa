const Contact = () => {
  return (
    <div className="flex justify-center mb-20 md:my-20">
      <div className='max-w-4xl font-poppins bg-gray-100 md:rounded-3xl p-5 md:p-14'>
          <div className="text-4xl text-center font-medium">Stay up to date</div>
          <div className="text-justify md:text-center my-10 md:my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. maiores dolorum ratione ipsa obcaecati? Odio natus dolorum repudiandae eligendi voluptate.
          </div>
          <form>
              <input type="email" name="" id="" className='border-b border-b-gray-500 focus:outline-none bg-transparent md:w-4/5' />
              <input type="button" value="Submit" className='px-8 py-1 shadow-lg text-white  rounded-full bg-sky-600 cursor-pointer' />
          </form>
          <div className='text-sm text-center mt-5 md:mt-2'>By submitting this form I agree to lipa privacy policy</div>
      </div>
    </div>
  )
}

export default Contact