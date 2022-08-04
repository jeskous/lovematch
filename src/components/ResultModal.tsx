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

  //RENDER
  if (!isVisible) return <></>;
  return (
    <div className="z-50 absolute top-1/2 bottom-1/2 -translate-y-1/2 flex flex-col justify-around items-center bg-white rounded-xl py-4 px-8 h-80 w-4/5 max-w-sm">
      <h2>Ergebnids:</h2>
      <div>
        <p>{result ? result.percentage : ''}%</p>
        <p>{result ? result.result : 'Kein Ergebnis'}</p>
      </div>
      <button onClick={() => setResultVisible(false)}>Nochmal</button>
    </div>
  );
}
