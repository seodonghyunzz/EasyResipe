import Image from "next/image";
type ContentImgType = {
  ATT_FILE_NO_MK: string;
  RCP_NM: string;
  RCP_PARTS_DTLS: string;
};
export function ContentImg({
  ATT_FILE_NO_MK,
  RCP_NM,
  RCP_PARTS_DTLS,
}: ContentImgType) {
  return (
    <div className="flex flex-col gap-8 mb-4">
      <div className="flex items-center justify-center w-full ">
        <div className="w-2/3 aspect-[2/1] relative rounded-md overflow-hidden">
          <Image src={ATT_FILE_NO_MK} alt={RCP_NM} fill />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="items-center text-center p-3 text-title3 text-label-900 font-medium">
          재료
        </p>
        <p className="text-label-700 text-body2">{RCP_PARTS_DTLS}</p>
      </div>
    </div>
  );
}
