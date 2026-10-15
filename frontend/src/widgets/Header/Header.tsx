import emptyUserImg from '@/assets/icon/avatar.svg';

const Header = () => {
  return (
    <header className="flex justify-between items-center border border-b-2 border-gray-700 bg-gray-900 mx-5 my-4 px-4 py-3 rounded-xl shadow-md text-white">
      <div className="flex gap-3 items-center">
        <button className="size-10 cursor-pointer">
          <img 
            className="size-full object-cover bg-gray-800 rounded-full border-2 border-gray-600" 
            src={emptyUserImg} 
            alt="User avatar" 
          />
        </button>
        <span className="border border-gray-500 bg-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium tracking-wide">
          0.03$
        </span>
      </div>
      <div>
        <button className="button button-accent font-mono">
          Buy VPN
        </button>
      </div>
    </header>
  );
};

export default Header;
