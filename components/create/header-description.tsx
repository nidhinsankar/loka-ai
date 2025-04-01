interface IProps {
  title: string;
  description: string;
}
const HeaderDescription: React.FC<IProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-4xl ">{title}</h2>
      <p className="text-lg text-gray-400">{description}</p>
    </div>
  );
};
export default HeaderDescription;
