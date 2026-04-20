import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  
  export default function ResponsivePage() {
    return (
      <main className="p-4 md:p-8">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Responsive Product Section
          </h1>
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Ini contoh layout yang berubah ikut saiz screen.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Starter Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Sesuai untuk beginner yang baru mula belajar.
                </p>
                <Button className="w-full">Pilih Plan</Button>
              </CardContent>
            </Card>
  
            <Card>
              <CardHeader>
                <CardTitle>Pro Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Sesuai untuk developer yang nak lebih banyak feature.
                </p>
                <Button className="w-full" variant="outline">
                  Plih Plan
                </Button>
              </CardContent>
            </Card>
  
            <Card>
              <CardHeader>
                <CardTitle>Team Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Sesuai untuk pasukan yang nak kerjasama dengan lebih mudah.
                </p>
                <Button className="w-full" variant="secondary">
                  Pilih Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    );
  }