import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-auto">
      <Link className="btn btn-ghost normal-case text-xl" href="/" >
                BlockTrain
      </Link>
      </div>
      <div className="flex gap-1">
        <ul className="menu menu-horizontal px-1">
          
          <li>
              <Link href="/blocks">
                Blocks
              </Link>
            </li>
            <li>
              <Link href="/transactions">
                Transactions
              </Link>
            </li>
            <li>
              <Link href="/tokens">
                Tokens
              </Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
