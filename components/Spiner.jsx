import { colors } from '../styles/theme';

export default function Login() {
  return (
    <>
      <div className="spinner" />
      <style jsx>{`
        .spinner {
          margin: auto;
          border: 4px solid rgba(0, 0, 0, 0.1);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border-left-color: ${colors.primary_darken};

          animation: spin 1s ease infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
