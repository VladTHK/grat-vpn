import emptyUserImg from '@/assets/icon/avatar.svg';

const Header = () => {
  return (
    <header className="flex justify-between items-center border border-b-2 border-slate-700 bg-slate-900 mx-5 my-4 px-4 py-3 rounded-xl shadow-md text-white">
      <div className="flex gap-3 items-center">
        <button className="size-10 cursor-pointer">
          <img 
            className="size-full object-cover bg-slate-800 rounded-full border-2 border-slate-600" 
            src={emptyUserImg} 
            alt="User avatar" 
          />
        </button>
        <span className="border border-slate-500 bg-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium tracking-wide">
          0.03$
        </span>
      </div>
      <div>
        <button className="main-button font-mono">
          Buy VPN
        </button>
      </div>
    </header>
  );
};

export default Header;
