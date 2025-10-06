

export function MenuFooter() {
  return (
    <div className='mt-10 p-6'>
        <span className='text-sm text-gray-400'>Social</span>
      <div className="flex justify-between mt-2 text-sm gap-3 ">
        <div className="flex gap-4">
          <a href="#" className=" transition-colors">
            Instagram
          </a>
          <a href="#" className=" transition-colors">
            Twitter  
          </a>
          <a href="#" className=" transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}