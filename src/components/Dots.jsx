import React from 'react'

const Dots = () => {
  return (
    <div className="flex gap-1 w-full justify-center">
      <span className={`h-2 w-2 rounded-full bg-slate-200/40`}></span>
      <span className={`h-2 w-2 rounded-full bg-slate-200/40`}></span>
      <span className={`h-2 w-2 rounded-full bg-slate-200/40`}></span>
    </div>
  );
}

export default Dots