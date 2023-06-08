import useToken from "@galvanize-inc/jwtdown-for-react";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-json-pretty/themes/monikai.css";
import "../index.css";
;
// };

export const Main = () => {
  const { token } = useToken();
  return (
    <>
      <div className="px-4 py-5" id="background">
        {!token && <p className="whitetext">Please sign up</p>}
        {token && <p className="whitetext">Main Page</p>}
      </div>
    </>
  );
};
