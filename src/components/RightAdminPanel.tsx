import React from "react";

export const RightAdminPanel = React.memo(() => {
  return <div className="w-[40px] h-[300px] py-[10px] bg-slate-400 rounded-l-lg flex flex-col items-center justify-end">
    <button className="admin-btn">+</button>
  </div>;
});
