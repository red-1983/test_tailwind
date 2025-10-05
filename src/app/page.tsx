import { CardPropsData } from '@/types/data.types';
import TariffsSection from '@/components/tariffs/TariffsSection';

async function getTariffs(): Promise<CardPropsData[]> {
  try {
    const response = await fetch('https://t-core.fit-hub.pro/Test/GetTariffs', {
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch tariffs');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching tariffs:', error);
    return [];
  }
}

export default async function Home() {
  const cardData = await getTariffs();

  return (
    <main className="flex flex-col row-start-2 items-center sm:items-start rounded-2xl overflow-hidden ">
      <TariffsSection cardData={cardData} />
    </main>
  );
}
