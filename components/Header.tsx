import Image from 'next/image';
export default function () {
  return (
    <div>
      <Image src="/logo.png" alt="Examine Logo" width={140} height={30} />
    </div>
  );
}