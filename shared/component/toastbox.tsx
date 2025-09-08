type MsgType = {
  msg: string;
};

export default function ToastBox({ msg }: MsgType) {
  return (
    <div className="fixed px-6 py-2 -translate-x-1/2 w-2/3 rounded-md shadow-md bg-background-default top-10 z-50 left-1/2 animate-fade-in-out md:w-[300px]">
      <p className="text-body3 text-label-700">{msg}</p>
    </div>
  );
}
