import { Button, Card, CardHeader, CardContent, Typography } from "@mui/material";

function Dashboard() {  
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-4 shadow-sm"></header>
      <div className="flex">
      <aside className="hidden w-56 flex-col border-r bg-white md:flex">
          <div className="flex h-14 items-center border-b px-4">
            <span className="font-semibold">Menu</span>
          </div>
          <nav className="flex-1 overflow-auto py-2">
            <div className="px-4 py-2">
              <h2 className="mb-2 text-xs font-semibold text-gray-500">Navigation</h2>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start font-normal">
                  Home
                </Button>
                <Button variant="secondary" className="w-full justify-start font-normal">
                  Dashboard
                </Button>
              </div>
            </div>
          </nav>
        </aside>
        <main>
          <div>
            <Card>
              <CardHeader title = {<Typography variant="subtitle2" fontWeight="bold">Today&apos;s Sales</Typography>}
              action={<div style={{ color: "#3b82f6" }}>icon</div>} // text-blue-500
              sx={{ pb: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}
              >
              </CardHeader>
              <CardContent>

              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
