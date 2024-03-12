interface PageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return (
    <div className="p-4 md:p-20 min-h-screen bg-black">
      <div className="flex justify-center items-center bg-cover bg-center">
        <div className="absolute top-0 left-0 mt-5 ml-5">
          <h1 className="text-red-600 text-3xl font-bold uppercase">M-flix</h1>
        </div>
      </div>
      {children}
    </div>
  );
};
