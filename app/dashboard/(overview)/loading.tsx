//loading.tsx is a special Next.js file built on top of Suspense, 
//it allows you to create fallback UI to show as a replacement while page content loads.

// Since loading.tsx is a level higher than /invoices/page.tsx and /customers/page.tsx in the file system, 
// it's also applied to those pages.

// We can change this with Route Groups. Create a new folder called /(overview) inside the dashboard folder. 
// Then, move your loading.tsx and page.tsx files inside the folder:

// Folder structure showing how to create a route group using parentheses
// Now, the loading.tsx file will only apply to your dashboard overview page.

import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
    return <DashboardSkeleton/>;
  }