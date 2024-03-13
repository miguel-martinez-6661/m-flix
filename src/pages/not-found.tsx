import { Button } from "@/components/ui/button";
import { Page } from "@/components/ui/page";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <div className="flex flex-col justify-center items-center w-full h-screen space-y-4">
        <h1 className="text-lg font-bold text-white text-4xl">Not found</h1>
        <p className="text-white text-2xl">
          Sorry, the page you are looking for does not exist
        </p>
        <Button variant="outline" onClick={() => navigate(-1)}>
          Go back
        </Button>
      </div>
    </Page>
  );
};
