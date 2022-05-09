import { FaMicroblog } from 'react-icons/fa';
import styles from './styles';

export default function Menu() {
  return (
    <>
      <div className="content-menu">
        <nav>
          <ul>
            <li>
              <div className="home-icon">
                <i>
                  <FaMicroblog />
                </i>
                <div className="front" />
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
