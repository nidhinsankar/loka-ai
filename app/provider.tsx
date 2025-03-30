import Header from "@/components/common/header";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="px-10 xl:px-32 2xl:px-40">{children}</div>
    </div>
  );
};

export default Provider;
