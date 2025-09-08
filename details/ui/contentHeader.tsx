export function ContentHeader({
  RCP_NM,
  HASH_TAG,
}: {
  RCP_NM: string;
  HASH_TAG: string;
}) {
  return (
    <div>
      <div className="mt-4 font-bold text-title3 md:text-display2">
        {RCP_NM}
      </div>
    </div>
  );
}
