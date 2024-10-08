// export default function Page() {
//     return <p>Dashboard Page</p>;
//   }

//Add new functionality to fetch data Lesson 7

//import { Card } from '@/app/ui/dashboard/cards';
import { lusitana } from '@/app/ui/fonts';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
//import Card from '@/app/ui/dashboard/cards';
import CardWrapper from '@/app/ui/dashboard/cards';
//import { fetchCardData } from '@/app/lib/data'; //move fetchLatestInvoices down to LatestInvoices
import { Suspense } from 'react';
import { LatestInvoicesSkeleton, RevenueChartSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
 
export default async function Page() {
  //const revenue = await fetchRevenue();
  //const latestInvoices = await fetchLatestInvoices();
  //const cardData = await fetchCardData();
  //console.log(cardData);
  // const {
  //   numberOfInvoices,
  //   numberOfCustomers,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        {/* {<LatestInvoices latestInvoices={latestInvoices} />} */}
        </Suspense>
      </div>
    </main>
  );
}