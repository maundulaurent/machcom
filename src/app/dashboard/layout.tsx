// app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        {/* <nav>Dashboard Nav - this shoul have nothing</nav> */}
        {children}
      </div>
    );
  }