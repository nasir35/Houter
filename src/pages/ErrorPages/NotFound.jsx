import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold mb-4 text-[#EF4444]">404</h1>
        <p className="text-2xl mb-8 text-[#1B1C57]">
          Oops! The page you are looking for does not exist.
        </p>
        <div className="flex justify-center space-x-4">
          <button onClick={handleGoBack} className="btn btn-neutral">
            Go Back
          </button>
          <button onClick={handleHome} className=" btn btn-primary">
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
