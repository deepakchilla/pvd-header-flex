import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content - Added padding-top to account for fixed header */}
      <main className="pt-16 lg:pt-20">
        <div className="flex min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] items-center justify-center">
          <div className="text-center px-4">
            <h1 className="mb-6 text-4xl lg:text-6xl font-bold font-poppins text-primary animate-fade-in">
              Welcome to PVD Enterprises
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-inter max-w-2xl mx-auto leading-relaxed">
              Your trusted partner for professional business solutions and exceptional service delivery.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;