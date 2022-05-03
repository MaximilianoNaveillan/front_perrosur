import styles from "./styles";
import { FaMicroblog } from "react-icons/fa";
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
