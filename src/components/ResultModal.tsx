type Props = {
  isVisible: boolean;
  setResultVisible: any;
  result:
    | {
        fname: string;
        sname: string;
        percentage: number;
        result: string;
      }
    | undefined;
};
export default function ResultModal({
  isVisible,
  setResultVisible,
  result,
}: Props) {
  const RenderIcon = (percentage: number) => {};

  const handleSubmit = (e: any) => {
    e.preventDefault;
    setResultVisible(false);
  };

  //RENDER
  if (!isVisible) return <></>;

  return (
    <form
      onSubmit={handleSubmit}
      className="z-50 absolute top-1/2 bottom-1/2 -translate-y-1/2 flex flex-col justify-around items-center bg-white rounded-xl py-4 px-8 h-80 w-4/5 max-w-sm"
    >
      <div className="w-full flex justify-between">
        <span className="-rotate-12 text-xl text-red-500 font-medium">
          {result ? result.fname : ''}
        </span>
        <p className="hidden md:block uppercase text-base font-semiBold  ">
          {result ? result.percentage : '-'}/100
        </p>
        <span className="rotate-12 text-xl text-red-500 font-medium">
          {result ? result.sname : ''}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-blue-500"></div>
        <p className="pt-6 uppercase text-base font-medium text-center  ">
          {result ? result.result : 'Kein Ergebnis'}
        </p>
      </div>
      <button type="submit" className="btn btn-outline w-full font-normal">
        Nochmal
      </button>
    </form>
  );
}
