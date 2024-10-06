import { useEffect } from "react";
import { redirect } from "react-router-dom";

const NotPermissions = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      redirect("/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <p>
      You don't have permissions to read this section. Please contact your
      administrator
    </p>
  );
};

export default NotPermissions;
