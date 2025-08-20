import { LocalBusinessSchema } from '@/components/StructuredData';
export const dynamic = 'force-static';

export default function Head() {
  return (
    <>
      <LocalBusinessSchema />
    </>
  );
}
