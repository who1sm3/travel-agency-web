import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { MapPin, Shield, DollarSign, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary/20 to-accent/20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/stunning-mountain-landscape-with-crystal-clear-lak.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Explore the World with Ease</h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
            Discover breathtaking destinations and create unforgettable memories with our expertly crafted travel
            experiences
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
            <Link href="/contact">Plan Your Trip</Link>
          </Button>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Destinations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked destinations that offer the perfect blend of adventure, culture, and relaxation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/tropical-beach-paradise-with-turquoise-water-and-p.jpg')",
                }}
              ></div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Maldives Paradise
              </CardTitle>
              <CardDescription>
                Crystal clear waters, overwater bungalows, and pristine beaches await you in this tropical paradise.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">$2,499</span>
                <span className="text-muted-foreground">7 days</span>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/majestic-swiss-alps-with-snow-capped-peaks-and-alp.jpg')",
                }}
              ></div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Swiss Alps Adventure
              </CardTitle>
              <CardDescription>
                Experience breathtaking mountain vistas, charming villages, and world-class skiing in the heart of
                Europe.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">$3,299</span>
                <span className="text-muted-foreground">10 days</span>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/ancient-japanese-temple-with-cherry-blossoms-and-t.jpg')",
                }}
              ></div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Japan Cultural Journey
              </CardTitle>
              <CardDescription>
                Immerse yourself in ancient traditions, modern innovation, and stunning natural beauty across Japan.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">$2,899</span>
                <span className="text-muted-foreground">12 days</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose WanderLux</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to making your travel dreams a reality with our exceptional service and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Trusted Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 15 years of experience and thousands of satisfied customers, we're your reliable travel
                partner.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Best Prices</h3>
              <p className="text-muted-foreground leading-relaxed">
                We guarantee competitive pricing and work with trusted partners to offer you the best value for your
                money.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Tailored Experiences</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every trip is customized to your preferences, ensuring a unique and memorable travel experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">WanderLux</h3>
            <p className="text-background/80 max-w-md mx-auto">
              Creating extraordinary travel experiences that inspire and delight our customers around the world.
            </p>
          </div>
          <div className="flex justify-center space-x-8 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/60">© 2024 WanderLux Travel Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
