import React from 'react'

function Body() {
    return (
        <section className='py-8'>
            <h1 className=' font-medium text-center text-[#202020] text-[30px] md:text-[42px]'>
                Medical bill details
            </h1>

            <div className="px-6 flex items-center justify-center my-7 md:text-lg font-medium">
                <div className="
                    w-[40px] h-[40px] 
                    flex items-center justify-center
                    bg-[#B03390] text-white
                    rounded-full
                ">
                    <span>
                        1
                    </span>
                </div>
                <div className=" w-9/12 md:w-[450px] bg-[#B03390] h-[3px]"></div>
                <div className="
                    w-[40px] h-[40px]
                    flex items-center justify-center
                    border-[3px] border-[#B03390] text-[#B03390]
                    rounded-full
                ">
                    <span >
                        2
                    </span>
                </div>
            </div>


            <div className="mt-16 pb-20 w-11/12 mx-auto max-w-2xl text-[#202020]">
                <label htmlFor="medical-condition">
                    <div className="text-lg md:text-[20px]">
                        Medical condition or treatment <span className=' italic text-lg'>(required)</span>
                    </div>
                    <input
                        className='mt-2 border rounded border-black py-2 px-4 w-full md:text-lg outline-none'
                        type="text"
                        name='medical-condition'
                        id='medical-condition'
                    />
                </label>

                <div className='mt-8 block'>
                    <div className="text-lg md:text-[20px]">
                        Did you have insurance? <span className=' italic text-lg'>(required)</span>
                    </div>
                    <div className=" mt-2 w-full grid grid-cols-2 border rounded border-black">
                        <div className="md:text-lg w-full py-3 text-center bg-black text-white">Yes</div>
                        <div className="md:text-lg w-full py-3 text-center ">No</div>
                    </div>
                </div>

                <div className='mt-8 block'>
                    <div className="text-lg md:text-[20px]">
                        Upload invoice <span className=' italic text-lg'>(optional)</span>
                    </div>

                    <label htmlFor="invoice" >
                        <div className=" mt-2 dashed-border py-8 w-full flex items-center justify-center">
                            <button className='font-medium bg-[#595959] rounded-md text-white py-2 px-4'>
                                Add Images
                            </button>
                        </div>
                        <input name='invoice' id='invoice' className='hidden' type="file" />
                    </label>
                </div>

                <button className='font-medium text-lg mt-12 py-3 bg-[#B03390] w-full rounded-[50px] text-center text-white'>
                    Continue
                </button>

            </div>

        </section>
    )
}

export default Body