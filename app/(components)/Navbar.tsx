import Link from 'next/link';
import styles from './navbar.module.sass'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className='logo'>
          <Link href="/" >
            BlockTrain
          </Link>
        </li>
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
    </nav>
  );
};

export default Navbar;
